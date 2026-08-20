import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const ignored = new Set([".git", "node_modules"]);
const domain = "https://nadjaatwal.net/";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const allFiles = walk(root);
const pages = allFiles.filter((file) => file.endsWith("index.html"));

const cleanText = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&[a-z0-9#]+;/gi, " ")
  .replace(/\s+/g, " ")
  .trim();

const attr = (html, name, key = "name") => {
  const first = new RegExp(`<meta[^>]+${key}=["']${name}["'][^>]+content=["']([^"']*)`, "i").exec(html);
  const second = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+${key}=["']${name}["']`, "i").exec(html);
  return (first || second || [])[1] || "";
};

function jsonLd(html) {
  const blocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const parsed = [];
  const errors = [];
  for (const block of blocks) {
    try { parsed.push(JSON.parse(block[1])); }
    catch (error) { errors.push(error.message); }
  }
  return { blocks, parsed, errors };
}

function schemaTypes(items) {
  const types = new Set();
  const visit = (value) => {
    if (Array.isArray(value)) return value.forEach(visit);
    if (!value || typeof value !== "object") return;
    if (value["@type"]) {
      const values = Array.isArray(value["@type"]) ? value["@type"] : [value["@type"]];
      values.forEach((type) => types.add(type));
    }
    Object.values(value).forEach(visit);
  };
  items.forEach(visit);
  return types;
}

function scoreChecks(checks) {
  const passed = checks.filter((check) => check.ok).length;
  return {
    score: Math.round((passed / checks.length) * 100),
    failures: checks.filter((check) => !check.ok).map((check) => check.name)
  };
}

const results = [];
const brokenLinks = [];

for (const file of pages) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file);
  const isHome = rel === "index.html";
  const title = (/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html) || [])[1]?.replace(/&amp;/g, "&").trim() || "";
  const description = attr(html, "description");
  const canon = (/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)/i.exec(html) || [])[1] || "";
  const h1s = [...html.matchAll(/<h1\b[^>]*>/gi)];
  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  const localImages = images.filter((image) => !/src=["']https?:/i.test(image) && !/elettro-logo\.svg/i.test(image));
  const schema = jsonLd(html);
  const types = schemaTypes(schema.parsed);
  const wordCount = cleanText(html).split(/\s+/).filter(Boolean).length;
  const internalLinks = [...html.matchAll(/<a\b[^>]*href=["']([^"']+)/gi)]
    .map((match) => match[1])
    .filter((href) => !/^(https?:|mailto:|tel:|#|javascript:)/i.test(href));

  for (const hrefRaw of internalLinks) {
    const href = hrefRaw.split("#")[0].split("?")[0];
    if (!href) continue;
    let target = href.startsWith("/") ? path.join(root, href) : path.resolve(path.dirname(file), href);
    if (href.endsWith("/") || (fs.existsSync(target) && fs.statSync(target).isDirectory())) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) brokenLinks.push(`${rel} -> ${hrefRaw}`);
  }

  const seo = scoreChecks([
    { name: "title present", ok: Boolean(title) },
    { name: "title length 30-65", ok: title.length >= 30 && title.length <= 65 },
    { name: "description present", ok: Boolean(description) },
    { name: "description length 110-170", ok: description.length >= 110 && description.length <= 170 },
    { name: "canonical", ok: canon.startsWith(domain) },
    { name: "indexable robots", ok: /index,\s*follow/i.test(attr(html, "robots")) },
    { name: "language", ok: /<html[^>]+lang=["']en["']/i.test(html) },
    { name: "viewport", ok: /name=["']viewport["']/i.test(html) },
    { name: "single H1", ok: h1s.length === 1 },
    { name: "Open Graph title", ok: Boolean(attr(html, "og:title", "property")) },
    { name: "Open Graph description", ok: Boolean(attr(html, "og:description", "property")) },
    { name: "Open Graph URL", ok: Boolean(attr(html, "og:url", "property")) },
    { name: "Open Graph image", ok: Boolean(attr(html, "og:image", "property")) },
    { name: "Twitter card", ok: Boolean(attr(html, "twitter:card")) },
    { name: "Twitter title", ok: Boolean(attr(html, "twitter:title")) },
    { name: "Twitter description", ok: Boolean(attr(html, "twitter:description")) },
    { name: "Twitter image", ok: Boolean(attr(html, "twitter:image")) },
    { name: "valid JSON-LD", ok: schema.blocks.length > 0 && schema.errors.length === 0 },
    { name: "page hierarchy schema", ok: isHome ? types.has("WebSite") && types.has("Person") : types.has("BreadcrumbList") },
    { name: "author", ok: Boolean(attr(html, "author")) },
    { name: "favicon", ok: /rel=["']icon["']/i.test(html) },
    { name: "theme color", ok: Boolean(attr(html, "theme-color")) },
    { name: "image optimization", ok: localImages.every((image) => /\.(webp|avif)/i.test(image) && /\balt=["'][^"']+["']/i.test(image) && /\bwidth=["']\d+/i.test(image) && /\bheight=["']\d+/i.test(image)) }
  ]);

  const aio = scoreChecks([
    { name: "valid machine-readable schema", ok: schema.blocks.length > 0 && schema.errors.length === 0 },
    { name: "canonical person entity", ok: /#person|"Person"/i.test(html) },
    { name: "direct answer section", ok: /class=["'][^"']*answer-block/i.test(html) },
    { name: "question-led heading", ok: /<h2[^>]*>[^<]*(what|how|where|who|when|why|does|is|should)/i.test(html) },
    { name: "page-specific schema", ok: ["Service", "Article", "ProfilePage", "PodcastSeries", "ContactPage", "AboutPage", "FAQPage"].some((type) => types.has(type)) },
    { name: "FAQ structured data", ok: types.has("FAQPage") },
    { name: "visible FAQ content", ok: /class=["'][^"']*faq-(list|section|item)/i.test(html) },
    { name: "reviewed or updated date", ok: /(Reviewed|Updated|dateModified)[^<\n]*2026/i.test(html) },
    { name: "editorial ownership", ok: /By Nadja Atwal|Reviewed by Nadja Atwal|Editorial standards/i.test(html) },
    { name: "descriptive internal links", ok: internalLinks.length >= 4 },
    { name: "substantive content", ok: wordCount >= 500 },
    { name: "trust path", ok: /(editorial-standards|professional-disclosure|privacy-policy|about\/)/i.test(html) }
  ]);

  results.push({ rel, titleLength: title.length, descriptionLength: description.length, words: wordCount, seo, aio, types: [...types].sort() });
}

const sitemapPath = path.join(root, "sitemap.xml");
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
const sitemapUrls = (sitemap.match(/<loc>/g) || []).length;
const sitemapDates = (sitemap.match(/<lastmod>/g) || []).length;
const indexablePages = pages.length;
const siteChecks = scoreChecks([
  { name: "robots.txt", ok: fs.existsSync(path.join(root, "robots.txt")) && /sitemap:/i.test(fs.readFileSync(path.join(root, "robots.txt"), "utf8")) },
  { name: "XML sitemap", ok: Boolean(sitemap) },
  { name: "all pages in sitemap", ok: sitemapUrls === indexablePages },
  { name: "sitemap lastmod", ok: sitemapDates === sitemapUrls && sitemapUrls > 0 },
  { name: "custom 404", ok: fs.existsSync(path.join(root, "404.html")) },
  { name: "favicon asset", ok: fs.existsSync(path.join(root, "images", "nadja-atwal-logo.svg")) },
  { name: "social image", ok: fs.existsSync(path.join(root, "images", "nadja-atwal-social.webp")) },
  { name: "responsive WebP library", ok: allFiles.filter((file) => file.endsWith(".webp")).length >= 4 },
  { name: "trust pages", ok: ["about", "editorial-standards", "professional-disclosure", "privacy-policy"].every((dir) => fs.existsSync(path.join(root, dir, "index.html"))) },
  { name: "focused intent pages", ok: ["executive-positioning", "speaking-topics"].every((dir) => fs.existsSync(path.join(root, dir, "index.html"))) },
  { name: "no broken internal links", ok: brokenLinks.length === 0 }
]);

const seoAverage = Math.round(results.reduce((sum, result) => sum + result.seo.score, 0) / results.length);
const aioAverage = Math.round(results.reduce((sum, result) => sum + result.aio.score, 0) / results.length);
const finalSeo = Math.round(seoAverage * 0.8 + siteChecks.score * 0.2);

console.log(`Pages audited: ${results.length}`);
console.log(`SEO score: ${finalSeo}/100`);
console.log(`AIO score: ${aioAverage}/100`);
console.log(`Site infrastructure: ${siteChecks.score}/100`);

for (const result of results) {
  if (result.seo.failures.length || result.aio.failures.length) {
    console.log(`\n${result.rel} (${result.words} words)`);
    if (result.seo.failures.length) console.log(`  SEO: ${result.seo.score} - ${result.seo.failures.join(", ")}`);
    if (result.aio.failures.length) console.log(`  AIO: ${result.aio.score} - ${result.aio.failures.join(", ")}`);
  }
}

if (siteChecks.failures.length) console.log(`\nSite failures: ${siteChecks.failures.join(", ")}`);
if (brokenLinks.length) console.log(`Broken links:\n${brokenLinks.map((link) => `  ${link}`).join("\n")}`);

if (finalSeo < 100 || aioAverage < 100 || siteChecks.score < 100) process.exitCode = 1;
