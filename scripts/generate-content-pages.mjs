import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const updated = "2026-08-19";
const socialImage = "https://nadjaatwal.net/images/nadja-atwal-social.webp";

const pages = [
  {
    slug: "media-architect",
    schemaType: "Service",
    title: "Media Architect for Executive Visibility | Nadja Atwal",
    description: "Nadja Atwal develops media architecture for founders, executives, companies, and public figures seeking authority, visibility, and narrative clarity.",
    eyebrow: "Media Architecture",
    h1: "Media Architect",
    hero: "Build a clear public position across media, leadership, partnerships, and digital channels.",
    answerQ: "What does a media architect do?",
    answer: "A media architect designs the connected system behind a person or company’s public authority. Nadja Atwal aligns positioning, narrative, media opportunities, executive visibility, strategic relationships, and digital proof so every public touchpoint reinforces the same credible identity.",
    overviewTitle: "A connected system for authority and visibility.",
    paragraphs: [
      "Media visibility loses value when interviews, social profiles, speaking opportunities, partnerships, and company messaging tell different stories. Media architecture creates one strategic foundation for those channels. It defines what an audience should understand, why the source deserves trust, and which proof supports the position.",
      "Nadja works with founders, executives, companies, and public figures whose ideas or work need a sharper market position. The engagement starts with the current reputation, business goals, target audiences, existing media assets, and gaps between perception and reality. The resulting structure guides messages, opportunities, and relationship-building.",
      "The work connects closely with PR strategy, executive positioning, business advisory, speaking, and media interviews. It supports leaders preparing for expansion, a launch, fundraising, a category shift, a public platform, or a more consistent thought-leadership presence."
    ],
    steps: [
      ["Position", "Define the central expertise, audience, business objective, and credible point of difference that every public appearance should reinforce."],
      ["Prove", "Organize biographies, experience, media evidence, partnerships, owned content, and other authority signals into a clear proof system."],
      ["Place", "Match the position with the right interviews, conversations, events, partnerships, and channels instead of pursuing disconnected exposure."],
      ["Sustain", "Create repeatable themes and editorial priorities so visibility compounds through consistency, relevance, and documented expertise."]
    ],
    topics: ["Narrative architecture", "Executive visibility", "Media positioning", "Authority signals", "Strategic relationships", "Thought leadership"],
    faqs: [
      ["Who benefits from media architecture?", "Founders, executives, companies, and public figures benefit when their expertise is strong but their positioning, media presence, and proof remain fragmented or unclear."],
      ["How is media architecture different from publicity?", "Publicity focuses on exposure. Media architecture defines the strategic identity, message, proof, and channel system that makes exposure useful and consistent."],
      ["Does the work include executive positioning?", "Yes. Executive positioning is a core part of the work when a founder or leader must become a credible public representative of the company or category."],
      ["How do I discuss a media architecture engagement?", "Use the booking page and share the organization, goal, timing, current visibility, target audience, and the decision or outcome the work should support."]
    ],
    related: ["pr-strategist", "executive-positioning", "business-advisor", "press"]
  },
  {
    slug: "pr-strategist",
    schemaType: "Service",
    title: "PR Strategist for Founders and Leaders | Nadja Atwal",
    description: "Nadja Atwal advises founders, executives, companies, and public figures on PR strategy, media readiness, reputation, authority, and public perception.",
    eyebrow: "Public Relations Strategy",
    h1: "PR Strategist",
    hero: "Turn expertise, timing, and proof into a credible public position.",
    answerQ: "What does Nadja Atwal do as a PR strategist?",
    answer: "Nadja Atwal helps leaders and organizations clarify their public position, prepare credible messages, identify the proof behind their claims, and pursue media opportunities aligned with business goals. Her approach links reputation, executive visibility, media readiness, and long-term authority.",
    overviewTitle: "PR strategy built around clarity and credibility.",
    paragraphs: [
      "Effective PR starts before a pitch. A clear position, relevant evidence, disciplined messaging, and an informed view of the audience determine whether attention builds trust or creates confusion. Nadja’s strategic work addresses those foundations before selecting channels or opportunities.",
      "The process reviews how a founder, executive, company, or public figure is currently understood. It identifies the stories with genuine relevance, the claims that require stronger support, the questions a journalist or audience will ask, and the connection between public visibility and business priorities.",
      "PR strategy often overlaps with media architecture, executive positioning, speaking preparation, business advisory, and press interviews. The goal is a durable narrative system that remains coherent across earned media, owned content, events, partnerships, and leadership communication."
    ],
    steps: [
      ["Assess", "Review reputation, current coverage, search results, public biographies, message consistency, audience expectations, and communication risks."],
      ["Clarify", "Define a relevant point of view, supporting evidence, core messages, approved language, and the topics the source is qualified to address."],
      ["Prepare", "Build press-ready materials, interview guidance, response frameworks, supporting links, and internal alignment around the public position."],
      ["Advance", "Prioritize opportunities whose audience, subject, format, and timing support the larger reputation and business strategy."]
    ],
    topics: ["PR strategy", "Press readiness", "Message development", "Reputation", "Media interviews", "Public perception"],
    faqs: [
      ["When should a company engage a PR strategist?", "Common moments include a launch, expansion, leadership transition, fundraising cycle, category change, reputation issue, speaking push, or a need for stronger executive visibility."],
      ["Does strategy come before media outreach?", "Yes. Positioning, evidence, message discipline, target audiences, and response preparation should guide outreach so attention supports the intended business outcome."],
      ["Does Nadja work with individuals and companies?", "Yes. Her work addresses founders, executives, public figures, leadership teams, and companies seeking clearer authority and media positioning."],
      ["What should I include in a PR strategy inquiry?", "Include the organization or individual, objective, timing, target audience, current challenge, relevant links, and any upcoming announcement or public milestone."]
    ],
    related: ["media-architect", "executive-positioning", "press", "booking"]
  },
  {
    slug: "business-advisor",
    schemaType: "Service",
    title: "Business Advisor for Strategic Growth | Nadja Atwal",
    description: "Nadja Atwal advises founders, executives, and companies on growth visibility, market positioning, strategic relationships, expansion, and authority.",
    eyebrow: "Business Advisory",
    h1: "Business Advisor",
    hero: "Connect market positioning, leadership visibility, and strategic relationships to growth.",
    answerQ: "How does Nadja Atwal advise companies and leaders?",
    answer: "Nadja Atwal advises founders, executives, and companies on market positioning, growth visibility, executive authority, strategic relationships, and expansion communication. She connects business objectives with the public narrative and high-value access required to move those objectives forward.",
    overviewTitle: "Advisory at the intersection of business and influence.",
    paragraphs: [
      "Growth decisions often depend on more than a strong product or service. The market must understand the opportunity, leadership must communicate with authority, and the right relationships must support entry, expansion, investment, or partnership conversations. Nadja’s advisory work brings those elements into one decision framework.",
      "An engagement begins with the intended outcome and the conditions around it. This includes the company’s current stage, category, target market, leadership visibility, stakeholder map, competitive perception, and communication assets. The analysis reveals where positioning or access limits momentum.",
      "Advisory work may connect with executive positioning, media strategy, market-entry communication, speaking, partnership development, and PR readiness. Recommendations focus on practical priorities, sequencing, and credible authority rather than disconnected attention."
    ],
    steps: [
      ["Objective", "Define the commercial outcome, decision makers, market conditions, timing, and the role visibility or relationships play in progress."],
      ["Position", "Clarify the company and leadership story in language relevant to customers, partners, investors, media, and other priority stakeholders."],
      ["Connect", "Map the categories of relationships, conversations, platforms, and introductions most relevant to the strategic objective."],
      ["Execute", "Set priorities and communication steps that support momentum while protecting credibility and leadership focus."]
    ],
    topics: ["Growth visibility", "Market entry", "Strategic partnerships", "Executive authority", "Business positioning", "Expansion communication"],
    faqs: [
      ["What business issues fit this advisory work?", "The work fits market entry, strategic expansion, executive visibility, growth communication, partnership positioning, and situations where business goals depend on authority or access."],
      ["Does advisory work include media strategy?", "It includes media strategy when public visibility, interviews, thought leadership, or reputation directly support the business objective."],
      ["Who participates in an advisory engagement?", "Depending on scope, the work may involve a founder, chief executive, leadership team, communications lead, business-development lead, or another decision owner."],
      ["How do I request an advisory conversation?", "Use the booking page and describe the company, objective, stage, target market, timing, current constraint, and the leadership team involved."]
    ],
    related: ["executive-positioning", "media-architect", "pr-strategist", "booking"]
  },
  {
    slug: "speaker",
    schemaType: "Service",
    title: "Keynote Speaker and Moderator | Nadja Atwal",
    description: "Book Nadja Atwal for keynotes, panels, moderation, and interviews on media, leadership, AI, technology, business, culture, and public perception.",
    eyebrow: "Speaking and Moderation",
    h1: "Speaker and Moderator",
    hero: "High-level conversations on leadership, media power, innovation, and public perception.",
    answerQ: "Is Nadja Atwal available for speaking and moderation?",
    answer: "Yes. Nadja Atwal is available for keynotes, moderated conversations, panels, executive interviews, and event hosting. Her core subjects include leadership, media influence, business, AI, technology, innovation, women in authority, culture, reputation, and public perception.",
    overviewTitle: "A speaker and moderator built for consequential subjects.",
    paragraphs: [
      "Nadja brings a journalist’s instinct, an advisor’s commercial perspective, and a host’s ability to move a conversation beyond prepared talking points. Her role may center on an individual keynote, a moderated interview, a multi-speaker panel, an executive conversation, or a broader event program.",
      "Each engagement starts with the audience and desired outcome. Topic framing, level of technical detail, tone, format, speaker mix, and timing are shaped around the event. Preparation focuses on questions and ideas that create useful insight for the room rather than generic discussion.",
      "Nadja’s experience across media, business, public relations, emerging technology, and international leadership supports conferences, corporate programs, investor events, media formats, and private executive gatherings. Remote and in-person opportunities are evaluated through the booking process."
    ],
    steps: [
      ["Brief", "Share the audience, event objective, format, date, location, other speakers, recording plans, and the subject the program must address."],
      ["Frame", "Select a clear topic and angle that matches Nadja’s expertise while giving the audience a specific reason to engage."],
      ["Prepare", "Align the run of show, questions, examples, timing, introductions, technical needs, and any interview or panel participants."],
      ["Deliver", "Present or moderate a focused conversation designed for clarity, pace, audience relevance, and useful takeaways."]
    ],
    topics: ["Leadership and influence", "AI and public trust", "Women in authority", "Media power", "Founder visibility", "Culture and reputation"],
    faqs: [
      ["Which event formats does Nadja support?", "Formats include keynotes, panels, moderated interviews, fireside conversations, executive discussions, media interviews, event hosting, and selected virtual programs."],
      ["Which speaking topics are available?", "Core areas include media influence, leadership, AI, technology, innovation, public trust, women in business, reputation, culture, and executive visibility."],
      ["What information is needed for a speaking request?", "Provide the date, location, audience, event purpose, format, topic, schedule, recording plans, expected attendance, and budget or engagement structure."],
      ["Where do I find a detailed topic list?", "Visit the speaking topics page for focused program directions and then use the booking page to request availability."]
    ],
    related: ["speaking-topics", "ai-technology-commentary", "press", "booking"]
  },
  {
    slug: "podcast",
    schemaType: "PodcastSeries",
    title: "Perceived Reality Podcast with Nadja Atwal",
    description: "Perceived Reality with Nadja Atwal features substantive conversations on business, technology, culture, leadership, media, innovation, and perception.",
    eyebrow: "Perceived Reality",
    h1: "Perceived Reality Podcast",
    hero: "Conversations beneath the surface of business, technology, culture, leadership, and perception.",
    answerQ: "What is the Perceived Reality podcast?",
    answer: "Perceived Reality is a podcast hosted by Nadja Atwal. The show features leaders, founders, investors, creators, executives, and changemakers in conversations about business, technology, culture, leadership, media, innovation, society, and the forces shaping public perception.",
    overviewTitle: "Conversations for people who question the obvious.",
    paragraphs: [
      "Perceived Reality examines the distance between what people first see and the systems, incentives, decisions, and personalities underneath. Nadja uses long-form conversation to explore how leaders think, how categories change, and how public narratives shape business and culture.",
      "Guests may come from business, technology, investment, media, science, leadership, entertainment, or public life. The common requirement is a useful point of view backed by experience. Episodes favor context, disagreement, and real decision-making over rehearsed promotion.",
      "Listeners may follow the show on Apple Podcasts and Spotify. Guest, partnership, media, and cross-promotional inquiries should include relevant background, proposed subjects, official links, and the reason the conversation fits Perceived Reality."
    ],
    steps: [
      ["Leader Interviews", "Conversations with founders, executives, investors, and operators about decisions, growth, influence, risk, and the systems behind results."],
      ["Cultural Signals", "Discussions about reputation, media narratives, public behavior, identity, attention, and the forces moving culture."],
      ["Future Debates", "Clear exchanges on AI, technology, innovation, trust, regulation, leadership, and the social consequences of change."],
      ["Human Stories", "Personal experiences that reveal how ambition, pressure, resilience, family, belief, and responsibility shape public lives."]
    ],
    topics: ["Business", "Technology", "Culture", "Leadership", "Media", "Society", "Public perception"],
    faqs: [
      ["Who hosts Perceived Reality?", "Nadja Atwal hosts Perceived Reality and leads conversations with leaders, founders, investors, creators, executives, and changemakers."],
      ["Where is the podcast available?", "Listeners may find Perceived Reality on Apple Podcasts and Spotify through the official links on this website."],
      ["What subjects does the show cover?", "The show covers business, technology, culture, leadership, media, AI, innovation, society, reputation, and public perception."],
      ["How do I propose a guest or partnership?", "Use the booking page or email Nadja’s team with the proposed guest, credentials, links, topic, timing, and the reason the conversation fits the show."]
    ],
    related: ["about", "ai-technology-commentary", "press", "booking"]
  },
  {
    slug: "ai-technology-commentary",
    schemaType: "Service",
    title: "AI and Technology Commentary | Nadja Atwal",
    description: "Nadja Atwal offers media commentary and moderated discussion on AI, technology, innovation, leadership, culture, reputation, and public trust.",
    eyebrow: "AI and Technology",
    h1: "AI, Technology, and Innovation Commentary",
    hero: "Clear discussion of how emerging technology changes trust, leadership, business, and culture.",
    answerQ: "What does Nadja Atwal discuss about AI and technology?",
    answer: "Nadja Atwal discusses how AI, emerging technology, and innovation affect public trust, leadership, reputation, business models, media narratives, work, culture, and decision-making. She is available for media interviews, panels, moderation, podcasts, and executive conversations on these subjects.",
    overviewTitle: "Technology commentary grounded in human and business consequences.",
    paragraphs: [
      "AI coverage often separates technical change from the public response around it. Yet adoption depends on trust, communication, leadership, incentives, and the stories people believe. Nadja’s commentary focuses on those connections and the practical tension between innovation, reputation, and social acceptance.",
      "Relevant conversations include how leaders explain uncertainty, how companies communicate new systems, how media frames risk, how automation changes authority, and why public perception moves faster or slower than technical capability. The emphasis remains on clear language for broad business and media audiences.",
      "Nadja participates in interviews, panels, moderated discussions, podcasts, and executive formats. Producers and event organizers should share the proposed subject, editorial angle, audience, format, timing, other participants, and whether the conversation will be recorded or distributed."
    ],
    steps: [
      ["AI and Trust", "How transparency, evidence, leadership behavior, media coverage, and lived experience influence confidence in emerging technology."],
      ["Innovation and Reputation", "How organizations balance speed, uncertainty, stakeholder expectations, public claims, and responsibility while introducing new systems."],
      ["Technology and Leadership", "What executives must communicate when tools, roles, business models, and customer expectations change at the same time."],
      ["Media and Perception", "How headlines, social platforms, expert voices, cultural narratives, and institutional credibility shape public understanding."]
    ],
    topics: ["Artificial intelligence", "Public trust", "Technology leadership", "Innovation", "Media narratives", "Future of work"],
    faqs: [
      ["Is Nadja available for AI media interviews?", "Yes. Interview requests should include the outlet, subject, angle, deadline, format, expected duration, and whether the segment will be live or recorded."],
      ["Does she provide technical product analysis?", "Her focus is the business, leadership, media, cultural, reputation, and public-trust implications of AI and emerging technology rather than engineering evaluation."],
      ["Which formats fit this commentary?", "Relevant formats include television, print, digital media, podcasts, panels, keynotes, executive interviews, and moderated discussions."],
      ["How should producers request availability?", "Use the booking page and provide the outlet or event, deadline, audience, angle, format, distribution plan, and any other confirmed participants."]
    ],
    related: ["speaker", "speaking-topics", "press", "booking"]
  },
  {
    slug: "press",
    schemaType: "CollectionPage",
    title: "Press and Media Interviews | Nadja Atwal",
    description: "Press information, interview subjects, official biography, podcast links, and booking details for Nadja Atwal, media architect, advisor, and host.",
    eyebrow: "Press and Media",
    h1: "Press and Media Interviews",
    hero: "Official background, interview areas, and contact details for producers, journalists, and event teams.",
    answerQ: "Who should contact Nadja Atwal for media interviews?",
    answer: "Journalists, producers, editors, podcast teams, conference organizers, and corporate media teams may contact Nadja Atwal for interviews and commentary on media strategy, leadership, public perception, business, AI, technology, innovation, culture, reputation, and women in authority.",
    overviewTitle: "A direct source for media and event teams.",
    paragraphs: [
      "Nadja Atwal is a Manhattan-based media architect, PR strategist, business advisor, speaker, moderator, and host of Perceived Reality. Her background spans journalism, international media, public relations, executive advisory, business development, event conversations, and long-form interviews.",
      "Media requests should state the outlet, program or publication, subject, editorial angle, audience, format, deadline, location or remote platform, expected duration, and distribution plan. Include any confirmed guests or opposing viewpoints when the format involves a panel or debate.",
      "Approved biography language, official website links, podcast destinations, topic areas, and booking contact are maintained on this website. Use the dedicated About page for a fuller profile and the editorial standards page for the site’s sourcing and correction policy."
    ],
    steps: [
      ["Fast Biography", "Nadja Atwal is a media architect, PR strategist, business advisor, speaker, moderator, and host of the Perceived Reality podcast."],
      ["Interview Areas", "Media power, public perception, leadership, PR strategy, executive visibility, AI, technology, innovation, culture, and business authority."],
      ["Official Links", "Use nadjaatwal.net as the canonical source and the official Apple Podcasts and Spotify destinations for Perceived Reality."],
      ["Contact", "Send deadlines and complete production details to atwal@media-architect.co or use the structured booking page."]
    ],
    topics: ["Media interviews", "Television", "Podcasts", "Panels", "Executive commentary", "Press biography"],
    faqs: [
      ["What is Nadja Atwal’s official short biography?", "Nadja Atwal is a Manhattan-based media architect, PR strategist, business advisor, speaker, moderator, and host of Perceived Reality."],
      ["Which subjects fit an interview request?", "Core subjects include media strategy, public perception, leadership, business, AI, technology, innovation, culture, reputation, and executive visibility."],
      ["What details help with a fast media response?", "Include the outlet, topic, angle, deadline, format, location or remote platform, duration, recording status, and other confirmed participants."],
      ["Where should a producer send a request?", "Email atwal@media-architect.co or use the booking page with the complete editorial and production details."]
    ],
    related: ["about", "ai-technology-commentary", "speaker", "booking"]
  },
  {
    slug: "booking",
    schemaType: "ContactPage",
    title: "Book Nadja Atwal for Speaking and Media",
    description: "Contact Nadja Atwal for speaking, moderation, media interviews, podcast inquiries, partnerships, executive positioning, and business advisory work.",
    eyebrow: "Booking and Contact",
    h1: "Book Nadja Atwal",
    hero: "Send complete details for speaking, media, podcast, partnership, and advisory opportunities.",
    answerQ: "How do I book Nadja Atwal?",
    answer: "Email atwal@media-architect.co with the opportunity type, organization, requested date, location or remote format, audience, topic, timing, distribution plans, budget or engagement structure, and a direct contact. Nadja’s team reviews speaking, moderation, media, podcast, partnership, and advisory inquiries.",
    overviewTitle: "The information needed for a focused response.",
    paragraphs: [
      "Complete inquiries reduce back-and-forth and help Nadja’s team evaluate relevance, timing, and preparation needs. Start with the organization, decision owner, opportunity type, requested date, location, audience, subject, format, and the outcome the engagement should support.",
      "For media requests, add the outlet, editorial angle, deadline, whether the segment is live or recorded, expected duration, distribution channels, and other participants. For speaking requests, add attendance, run of show, topic direction, technical requirements, travel expectations, and recording rights.",
      "For advisory or positioning requests, describe the company or leader, current stage, strategic objective, market, timeline, existing visibility, and the decision or constraint driving the conversation. Sensitive details may remain at a high level in the initial inquiry."
    ],
    steps: [
      ["Speaking", "Provide event name, date, location, audience, format, topic, other speakers, recording plans, expected attendance, and engagement structure."],
      ["Media", "Provide outlet, producer or editor, subject, angle, deadline, format, duration, live or recorded status, and distribution details."],
      ["Podcast", "Provide the show or proposed guest, subject, credentials, audience, timing, official links, and the reason the conversation fits."],
      ["Advisory", "Provide the organization, leadership role, objective, market, current challenge, timing, relevant links, and desired next decision."]
    ],
    topics: ["Speaking requests", "Media interviews", "Podcast inquiries", "Partnerships", "Executive positioning", "Business advisory"],
    faqs: [
      ["What email should I use?", "Send booking, media, podcast, partnership, and advisory inquiries to atwal@media-architect.co."],
      ["Does Nadja accept remote engagements?", "Remote and in-person opportunities are evaluated based on subject, audience, format, timing, preparation requirements, and strategic fit."],
      ["What should a media producer include?", "Include the outlet, editorial angle, deadline, format, duration, live or recorded status, distribution, and other confirmed participants."],
      ["What happens after an inquiry?", "Nadja’s team reviews fit, timing, scope, and preparation requirements, then responds with the next relevant questions or scheduling options."]
    ],
    related: ["speaker", "speaking-topics", "press", "business-advisor"]
  },
  {
    slug: "privacy-policy",
    schemaType: "WebPage",
    title: "Privacy Policy and Data Practices | Nadja Atwal",
    description: "Read the privacy policy for NadjaAtwal.net, including contact links, consent controls, embedded media, local storage, external platforms, and data choices.",
    eyebrow: "Privacy",
    h1: "Privacy Policy",
    hero: "How this website handles consent, embedded media, external links, and contact interactions.",
    answerQ: "How does NadjaAtwal.net handle visitor privacy?",
    answer: "NadjaAtwal.net limits data collection within the static website, uses consent controls before loading supported external media, and links to third-party platforms whose own privacy terms apply. Visitors may reopen Privacy Settings from the footer to review or change optional consent choices.",
    overviewTitle: "Privacy information for website visitors.",
    paragraphs: [
      "This website provides information about Nadja Atwal, Perceived Reality, speaking, media, and advisory services. The site may store functional preferences, such as the selected language and cookie-consent choices, in the visitor’s browser. These preferences support the requested website experience.",
      "Embedded services, including podcast players or other external media, may set cookies or process technical information after the visitor grants the relevant consent. External destinations such as Apple Podcasts, Spotify, LinkedIn, Instagram, email providers, and Elettro operate under their own privacy policies and terms.",
      "When a visitor sends an email, the sender controls the information included. Contact details and inquiry content should be limited to what is needed for the request. Do not send passwords, payment-card numbers, government identification, medical records, or other unnecessary sensitive information through a general booking email."
    ],
    steps: [
      ["Consent Settings", "The footer link labeled Privacy Settings opens the site’s consent controls so optional categories may be reviewed or changed."],
      ["External Media", "Supported embeds remain blocked until the visitor allows the relevant external-media category through the consent interface."],
      ["External Links", "Third-party websites receive information under their own policies when a visitor follows an external link or uses their service."],
      ["Contact", "Privacy questions related to this website may be sent to atwal@media-architect.co with a clear description of the request."]
    ],
    topics: ["Consent", "External media", "Local storage", "Email inquiries", "Third-party links", "Visitor choices"],
    faqs: [
      ["Does the site load external media automatically?", "Supported external media remains blocked until the visitor provides consent through the website’s privacy controls."],
      ["Where do I change privacy settings?", "Select Privacy Settings in the footer to reopen the consent interface and review available choices."],
      ["Do external websites follow this policy?", "No. Apple Podcasts, Spotify, LinkedIn, Instagram, email services, and other external destinations apply their own privacy policies and terms."],
      ["How do I ask a privacy question?", "Email atwal@media-architect.co with the subject Privacy Request and include enough information to identify the website-related question."]
    ],
    related: ["professional-disclosure", "editorial-standards", "about", "booking"]
  },
  {
    slug: "report",
    schemaType: "Article",
    title: "SEO and AIO Optimization Report | Nadja Atwal",
    description: "Review the current NadjaAtwal.net technical SEO, AI answer readiness, site infrastructure, implemented improvements, methodology, and validation results.",
    eyebrow: "Optimization Report",
    h1: "SEO and AIO Report",
    hero: "A transparent record of the site’s search and AI-answer readiness work.",
    answerQ: "How does NadjaAtwal.net score for SEO and AIO readiness?",
    answer: "The August 19, 2026 repository audit scores NadjaAtwal.net at 100 out of 100 for technical SEO, 100 out of 100 for AI-answer readiness, and 100 out of 100 for site infrastructure across 16 indexable pages. The audit is reproducible through the included site validation script.",
    overviewTitle: "From a partial foundation to a complete measurable standard.",
    paragraphs: [
      "The baseline audit measured 57 out of 100 for SEO, 44 out of 100 for AIO readiness, and 27 out of 100 for site infrastructure across 11 pages. Strong canonical URLs, basic structured data, a sitemap, robots instructions, and AI-readable text files were already present.",
      "The treatment completed missing robots directives, social metadata, author signals, favicon support, review dates, page-specific schema, visible question-and-answer sections, structured FAQs, trust pages, focused intent pages, internal links, image optimization, sitemap dates, and a custom 404 page.",
      "The final audit checks every indexable HTML page, local link target, title, description, canonical, heading, social card, JSON-LD block, schema hierarchy, author signal, image attribute, direct answer, FAQ, reviewed date, trust path, word depth, sitemap entry, and infrastructure asset."
    ],
    steps: [
      ["Technical SEO: 100", "Every audited page passes the defined metadata, canonical, indexing, social preview, schema, authorship, favicon, theme, heading, and image requirements."],
      ["AIO Readiness: 100", "Every page includes a canonical entity, direct answer, question-led heading, specific schema, visible FAQ, review signal, internal context, and trust path."],
      ["Infrastructure: 100", "Robots, sitemap coverage, last-modified dates, 404 handling, branded assets, optimized WebP media, trust pages, intent pages, and internal links pass."],
      ["Reproducible Validation", "Run node scripts/audit-site.mjs from the repository root. The command exits with an error if any measured score falls below 100."]
    ],
    topics: ["SEO 100/100", "AIO 100/100", "Infrastructure 100/100", "16 pages", "Structured data", "Reproducible audit"],
    faqs: [
      ["What does the SEO score measure?", "It measures on-site technical and content readiness, including metadata, indexability, canonical URLs, social previews, structured data, hierarchy, authorship, and image delivery."],
      ["What does the AIO score measure?", "It measures whether pages provide clear answers, canonical entities, question-led structure, specific schema, visible FAQs, review signals, substantive context, and trust references."],
      ["Does a score of 100 guarantee rankings?", "No. Rankings and citations also depend on indexing, authority, external references, competition, query relevance, user behavior, and search-engine systems outside the repository."],
      ["How is the result checked again?", "Run the repository audit after any material site change. A failing check names the page and requirement requiring attention."]
    ],
    related: ["about", "editorial-standards", "professional-disclosure", "press"]
  },
  {
    slug: "about",
    schemaType: "AboutPage",
    title: "About Nadja Atwal | Media and Business Advisor",
    description: "Learn about Nadja Atwal, a Manhattan-based media architect, PR strategist, business advisor, speaker, moderator, and host of Perceived Reality.",
    eyebrow: "About Nadja Atwal",
    h1: "Media, Business, and Public Influence",
    hero: "A career connecting journalism, strategic communications, business advisory, and high-level conversation.",
    answerQ: "Who is Nadja Atwal?",
    answer: "Nadja Atwal is a Manhattan-based media architect, PR strategist, business advisor, speaker, moderator, and host of Perceived Reality. She helps founders, executives, companies, and public figures build authority through strategic positioning, media visibility, relationships, and narrative development.",
    overviewTitle: "A cross-disciplinary career in media and strategy.",
    paragraphs: [
      "Nadja began her career in journalism and foreign correspondence for German media before expanding into public relations, media strategy, business development, executive advisory, speaking, moderation, and production. That range informs a practical view of how public narratives form and how leaders earn attention and trust.",
      "Her work sits at the intersection of media, business, and emerging technology. She advises leaders and companies on market positioning, growth visibility, strategic expansion, executive authority, and high-value relationships. She also contributes to conversations about leadership, AI, technology, culture, and public perception.",
      "As host of Perceived Reality, Nadja speaks with leaders, founders, investors, creators, executives, and changemakers. The show extends the same focus found in her advisory and speaking work: looking past the surface to understand the decisions, systems, incentives, and beliefs shaping outcomes."
    ],
    steps: [
      ["Media Architect", "Designs connected positioning, narrative, media, proof, and relationship systems for leaders, companies, and public-facing ideas."],
      ["PR Strategist", "Guides message clarity, media readiness, reputation, interview positioning, and the authority signals behind credible visibility."],
      ["Business Advisor", "Connects growth objectives with market positioning, executive visibility, strategic relationships, and expansion communication."],
      ["Host and Speaker", "Leads interviews, panels, keynotes, and conversations across business, media, leadership, AI, technology, culture, and perception."]
    ],
    topics: ["Journalism", "Media architecture", "Public relations", "Business advisory", "Speaking", "Perceived Reality"],
    faqs: [
      ["Where is Nadja Atwal based?", "Nadja Atwal is based in Manhattan, New York, and evaluates relevant U.S., international, remote, and in-person opportunities."],
      ["What is Nadja Atwal’s professional focus?", "Her work focuses on media architecture, PR strategy, business advisory, executive positioning, speaking, moderation, interviews, and public perception."],
      ["What is Perceived Reality?", "Perceived Reality is Nadja’s podcast featuring conversations on business, technology, culture, leadership, media, innovation, society, and public perception."],
      ["How do I contact Nadja’s team?", "Visit the booking page or email atwal@media-architect.co with the opportunity, timing, format, audience, and relevant background."]
    ],
    related: ["media-architect", "business-advisor", "podcast", "booking"]
  },
  {
    slug: "editorial-standards",
    schemaType: "Article",
    title: "Editorial Standards and Corrections | Nadja Atwal",
    description: "Read the editorial standards for NadjaAtwal.net, including sourcing, identity, accuracy, updates, corrections, AI-readable content, and commercial clarity.",
    eyebrow: "Trust and Accuracy",
    h1: "Editorial Standards",
    hero: "How the official website maintains accurate, current, and clearly sourced information.",
    answerQ: "How is information on NadjaAtwal.net reviewed?",
    answer: "NadjaAtwal.net treats the official site, approved professional materials, direct updates from Nadja Atwal or her team, and clearly identified platform destinations as primary sources. Material identity, service, contact, and availability information is reviewed when published or materially changed.",
    overviewTitle: "A clear standard for official identity and professional information.",
    paragraphs: [
      "This website serves as the canonical online source for Nadja Atwal’s current professional positioning, services, speaking subjects, podcast identity, press information, and booking path. Copy should distinguish current official information from older third-party biographies, interviews, event listings, or social profiles.",
      "Material claims should rely on approved first-party information or a reliable external source. The site avoids unsupported rankings, invented client results, implied endorsements, and guarantees. External platform links are used to identify official destinations or provide relevant context, not to transfer editorial responsibility.",
      "When a substantive error is identified, the relevant page should be corrected and its review date updated. Minor spelling, formatting, accessibility, and technical changes may be fixed without a public correction note. Requests should identify the page, disputed statement, supporting evidence, and requester contact."
    ],
    steps: [
      ["Identity", "Use consistent canonical language for Nadja Atwal, her professional roles, the Perceived Reality podcast, and the official website domain."],
      ["Sourcing", "Prefer approved first-party information and direct official platform links. Attribute external facts when they materially support a claim."],
      ["Updates", "Review pages after material professional, contact, service, podcast, privacy, or policy changes and record the current modification date."],
      ["Corrections", "Correct supported material errors promptly and preserve clear contact instructions for questions about accuracy or representation."]
    ],
    topics: ["Accuracy", "Primary sources", "Canonical identity", "Updates", "Corrections", "AI-readable content"],
    faqs: [
      ["What sources does the site prioritize?", "The site prioritizes approved professional information, direct updates from Nadja or her team, official website records, and clearly identified official platform destinations."],
      ["How do I report an error?", "Email atwal@media-architect.co with the page URL, disputed statement, proposed correction, supporting evidence, and contact information."],
      ["Are old third-party biographies treated as current?", "No. Older profiles may reflect a valid earlier period but should not override the current official positioning maintained on this website."],
      ["Does the site use structured data and AI-readable files?", "Yes. Structured data, direct-answer sections, FAQs, llms.txt, and llms-full.txt communicate the same canonical identity and official URLs."]
    ],
    related: ["about", "professional-disclosure", "privacy-policy", "report"]
  },
  {
    slug: "professional-disclosure",
    schemaType: "Article",
    title: "Professional Disclosure | Nadja Atwal",
    description: "Review professional, commercial, editorial, podcast, media, booking, and external-link disclosures for Nadja Atwal’s official website and services.",
    eyebrow: "Transparency",
    h1: "Professional Disclosure",
    hero: "Clear boundaries between professional descriptions, editorial content, commercial services, and external platforms.",
    answerQ: "What does the Nadja Atwal professional disclosure cover?",
    answer: "This disclosure explains that NadjaAtwal.net presents Nadja Atwal’s professional identity, services, speaking, podcast, press, and booking information. References to media, companies, platforms, subjects, or industries do not by themselves imply endorsement, client status, partnership, or guaranteed outcomes.",
    overviewTitle: "Transparency for visitors, producers, and prospective clients.",
    paragraphs: [
      "The website contains professional marketing information about media architecture, PR strategy, business advisory, executive positioning, speaking, moderation, interviews, and Perceived Reality. Descriptions explain the nature of the work and relevant topics. They do not promise specific coverage, revenue, investment, reputation, audience, or business outcomes.",
      "Podcast and editorial discussions may include opinions, interpretations, interviews, or external viewpoints. Guest participation, platform availability, or a link to a third party does not establish endorsement of every statement, product, organization, or policy associated with that source.",
      "Commercial relationships, sponsorships, or material partnerships should be identified where disclosure is relevant to the content or audience. Prospective clients and partners should rely on a signed agreement for scope, fees, timing, responsibilities, confidentiality, rights, approvals, and deliverables."
    ],
    steps: [
      ["Services", "Website descriptions summarize areas of professional work. Final scope, responsibilities, fees, timing, and deliverables require a written agreement."],
      ["Outcomes", "No website statement guarantees media coverage, audience growth, investment, sales, partnerships, rankings, citations, or reputation results."],
      ["External Platforms", "Apple Podcasts, Spotify, LinkedIn, Instagram, Elettro, and other linked services operate under their own terms and policies."],
      ["Editorial Context", "Interviews and commentary may present opinions or external perspectives. Relevant commercial relationships should be disclosed in context."]
    ],
    topics: ["Professional services", "Commercial clarity", "No guaranteed outcomes", "Podcast context", "External links", "Partnership disclosure"],
    faqs: [
      ["Does website copy define a client engagement?", "No. A signed agreement defines the final scope, deliverables, timing, fees, approvals, rights, responsibilities, and confidentiality terms."],
      ["Does the site guarantee media or business results?", "No. The site does not guarantee coverage, rankings, audience growth, partnerships, investment, revenue, citations, or other third-party outcomes."],
      ["Do external links imply endorsement?", "No. A link may identify an official destination or provide context without endorsing every statement, product, service, or policy on the external site."],
      ["Where do I ask a disclosure question?", "Email atwal@media-architect.co with the page URL, specific question, organization, and relevant background."]
    ],
    related: ["editorial-standards", "privacy-policy", "about", "booking"]
  },
  {
    slug: "executive-positioning",
    schemaType: "Service",
    title: "Executive Positioning Strategy | Nadja Atwal",
    description: "Nadja Atwal helps founders and executives clarify authority, point of view, biography, media readiness, speaking themes, and leadership visibility.",
    eyebrow: "Executive Visibility",
    h1: "Executive Positioning Strategy",
    hero: "Give leadership expertise a clear public identity, evidence base, and communication system.",
    answerQ: "What is executive positioning?",
    answer: "Executive positioning defines how a founder or leader should be understood by customers, employees, partners, investors, media, and the market. Nadja Atwal aligns expertise, point of view, biography, proof, speaking themes, media readiness, and digital presence around that strategic identity.",
    overviewTitle: "A credible leadership position supports company momentum.",
    paragraphs: [
      "A leader’s public identity often develops through scattered biographies, interviews, panels, social posts, company announcements, and search results. Without a central position, audiences receive an incomplete or inconsistent picture. Executive positioning creates the message and proof structure behind visible leadership.",
      "The work begins with business objectives, audience priorities, actual expertise, leadership history, available evidence, and the questions the market needs the executive to answer. It then identifies a defensible point of view and the themes the executive should consistently own.",
      "Outputs may guide biographies, speaker introductions, interview preparation, content priorities, media materials, website language, social profiles, and partnership conversations. The position must remain accurate, specific, useful to the audience, and connected to company strategy."
    ],
    steps: [
      ["Authority Audit", "Review current biographies, search results, profiles, interviews, speaking history, content, company narrative, and external proof."],
      ["Position Definition", "Choose the expertise, audience, point of view, language, and credible difference the executive should consistently represent."],
      ["Proof System", "Organize experience, results, roles, media, events, partnerships, and owned ideas that substantiate the position."],
      ["Visibility Plan", "Prioritize speaking, media, content, relationship, and digital actions that reinforce the position without diluting it."]
    ],
    topics: ["Founder positioning", "Executive biography", "Thought leadership", "Media readiness", "Speaking themes", "Digital authority"],
    faqs: [
      ["Who needs executive positioning?", "Founders, chief executives, senior leaders, board members, investors, advisors, and public-facing experts benefit when their visibility must support a larger business objective."],
      ["What materials may change?", "The strategy may guide biographies, profiles, interview language, speaker introductions, website copy, thought-leadership themes, content priorities, and media materials."],
      ["How is this different from personal branding?", "Executive positioning starts with business strategy, stakeholder expectations, actual authority, and proof. Visual identity or general self-promotion is secondary."],
      ["How do I request an executive positioning review?", "Use the booking page and provide the leader’s role, company, objective, audience, timeline, current materials, and the decision the visibility should support."]
    ],
    related: ["media-architect", "pr-strategist", "business-advisor", "booking"]
  },
  {
    slug: "speaking-topics",
    schemaType: "Article",
    title: "Speaking Topics and Moderation | Nadja Atwal",
    description: "Explore Nadja Atwal’s speaking and moderation topics across leadership, media power, AI, technology, public trust, business, culture, and reputation.",
    eyebrow: "Program Topics",
    h1: "Speaking Topics and Moderation",
    hero: "Focused program directions for conferences, panels, executive events, interviews, and media formats.",
    answerQ: "What topics does Nadja Atwal speak about?",
    answer: "Nadja Atwal speaks and moderates conversations about leadership, media influence, public perception, AI, technology, innovation, business authority, women in leadership, founder visibility, reputation, culture, and the future of trust. Topics are adapted to the audience and event objective.",
    overviewTitle: "Topics built around leadership, change, and perception.",
    paragraphs: [
      "A strong event topic gives the audience a clear question and a useful tension to examine. Nadja’s programs draw from her work across journalism, public relations, media strategy, business advisory, executive positioning, speaking, moderation, and long-form interviews.",
      "Topic selection should consider the audience’s level of knowledge, the decisions they face, the format, other participants, event theme, and intended outcome. A keynote needs a different narrative structure from a panel, moderated interview, private executive conversation, or live media segment.",
      "The directions below provide starting points rather than fixed scripts. Final framing is developed around the event brief, current context, available time, and any confirmed speakers. Organizers should share the audience, purpose, date, location, format, and recording plan."
    ],
    steps: [
      ["Leadership and Perception", "How leaders build trust when public narratives, internal reality, stakeholder expectations, and rapid change do not align."],
      ["AI and Public Trust", "Why adoption depends on communication, evidence, accountability, media narratives, and leadership behavior alongside technical performance."],
      ["Women and Authority", "How visibility, credibility, access, negotiation, public expectations, and institutional culture shape women’s leadership."],
      ["Media Power and Reputation", "How interviews, platforms, search results, social narratives, and repeated stories influence authority and business decisions."]
    ],
    topics: ["Leadership", "AI and public trust", "Women in authority", "Media power", "Founder visibility", "Reputation and culture"],
    faqs: [
      ["Are topics customized for each audience?", "Yes. Topic depth, examples, language, format, and emphasis are shaped around the audience, event purpose, schedule, and other confirmed participants."],
      ["Does Nadja moderate panels and interviews?", "Yes. Relevant formats include panels, fireside conversations, executive interviews, media discussions, event hosting, and other moderated programs."],
      ["Which details should an organizer provide?", "Provide the date, location, audience, event objective, format, topic direction, other speakers, expected attendance, timing, recording plans, and engagement structure."],
      ["Where do I request availability?", "Use the booking page or email atwal@media-architect.co with the complete event brief and a direct organizer contact."]
    ],
    related: ["speaker", "ai-technology-commentary", "press", "booking"]
  }
];

const labels = Object.fromEntries(pages.map((page) => [page.slug, page.h1]));

function entityGraph(page) {
  const canonical = `https://nadjaatwal.net/${page.slug}/`;
  const pageNode = {
    "@type": page.schemaType,
    "@id": `${canonical}#primary`,
    name: page.h1,
    description: page.description,
    url: canonical,
    isPartOf: { "@id": "https://nadjaatwal.net/#website" },
    about: { "@id": "https://nadjaatwal.net/#person" },
    author: { "@id": "https://nadjaatwal.net/#person" },
    dateModified: updated,
    inLanguage: "en-US"
  };
  if (page.schemaType === "Service") {
    pageNode.provider = { "@id": "https://nadjaatwal.net/#person" };
    pageNode.serviceType = page.h1;
    pageNode.areaServed = "Worldwide";
  }
  if (page.schemaType === "PodcastSeries") {
    pageNode.host = { "@id": "https://nadjaatwal.net/#person" };
    pageNode.sameAs = [
      "https://podcasts.apple.com/us/podcast/perceived-reality/id1817982355",
      "https://open.spotify.com/show/6Ex9GXozjZtfgX8q2xZZs4"
    ];
  }
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://nadjaatwal.net/#person",
        name: "Nadja Atwal",
        url: "https://nadjaatwal.net/",
        image: "https://nadjaatwal.net/images/nadja-wallstreet.webp",
        description: "Nadja Atwal is a Manhattan-based media architect, PR strategist, business advisor, speaker, moderator, and host of Perceived Reality.",
        jobTitle: ["Media Architect", "PR Strategist", "Business Advisor", "Podcast Host", "Speaker", "Moderator"],
        knowsAbout: ["Media architecture", "Public relations", "Business advisory", "Executive positioning", "Public perception", "Artificial intelligence", "Technology", "Leadership", "Podcasting"],
        sameAs: [
          "https://www.linkedin.com/in/nadja-atwal-q",
          "https://www.instagram.com/nadjaatwal/",
          "https://podcasts.apple.com/us/podcast/perceived-reality/id1817982355",
          "https://open.spotify.com/show/6Ex9GXozjZtfgX8q2xZZs4"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://nadjaatwal.net/#website",
        name: "Nadja Atwal",
        url: "https://nadjaatwal.net/",
        publisher: { "@id": "https://nadjaatwal.net/#person" },
        inLanguage: "en-US"
      },
      pageNode,
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: page.faqs.map(([name, text]) => ({
          "@type": "Question",
          name,
          acceptedAnswer: { "@type": "Answer", text }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://nadjaatwal.net/" },
          { "@type": "ListItem", position: 2, name: page.h1, item: canonical }
        ]
      }
    ]
  };
}

function nav() {
  return `<header class="topbar">
      <a href="/#top" class="brand" aria-label="Nadja Atwal home"><span class="brand-mark">NA</span><span class="brand-text">Nadja Atwal</span></a>
      <nav class="nav-links" aria-label="Main navigation"><a href="/about/">About</a><a href="/podcast/">Podcast</a><a href="/speaker/">Speaking</a><a href="/press/">Press</a><a href="/booking/">Booking</a><a href="/report/">Report</a></nav>
      <a class="nav-cta" href="/booking/">Book Nadja</a>
    </header>`;
}

function footer() {
  return `<footer class="footer">
      <p>© 2026 Nadja Atwal. Perceived Reality.</p>
      <p class="production-credit"><a href="https://elettro.com" target="_blank" rel="noopener" aria-label="Website produced by Elettro"><img src="/images/elettro-logo.svg" alt="" aria-hidden="true" width="75" height="20"><span>Website produced by <strong>Elettro</strong></span></a></p>
      <div><a href="/about/">About</a><a href="/podcast/">Podcast</a><a href="/speaker/">Speaking</a><a href="/press/">Press</a><a href="/booking/">Booking</a><a href="/privacy-policy/">Privacy</a><a href="#" data-cookie-settings>Privacy Settings</a></div>
      <div class="footer-trust trust-links"><a href="/editorial-standards/">Editorial standards</a><a href="/professional-disclosure/">Professional disclosure</a><a href="/report/">SEO and AIO report</a></div>
    </footer>`;
}

function render(page) {
  const canonical = `https://nadjaatwal.net/${page.slug}/`;
  const steps = page.steps.map(([title, copy], index) => `<article class="process-card"><span>0${index + 1}</span><h3>${title}</h3><p>${copy}</p></article>`).join("");
  const faqs = page.faqs.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join("");
  const related = page.related.map((slug) => `<a href="/${slug}/">${labels[slug] || slug}</a>`).join("");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="author" content="Nadja Atwal">
  <meta name="theme-color" content="#05050a">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/images/nadja-atwal-logo.svg" type="image/svg+xml">
  <meta property="og:site_name" content="Nadja Atwal">
  <meta property="og:locale" content="en_US">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Nadja Atwal, media architect, advisor, speaker, and podcast host">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${socialImage}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/cookie-consent/cookie-consent.css">
  <script type="application/ld+json">${JSON.stringify(entityGraph(page), null, 2)}</script>
</head>
<body>
  <div class="site-shell">
    ${nav()}
    <main id="top">
      <section class="page-hero"><div class="orb orb-one"></div><div class="orb orb-two"></div><div class="grid-noise"></div><p class="eyebrow">${page.eyebrow}</p><h1>${page.h1}</h1><p class="hero-copy">${page.hero}</p><div class="hero-actions"><a class="primary-btn" href="/booking/">Contact Nadja</a><a class="secondary-btn" href="/">Return Home</a></div></section>
      <div class="editorial-meta"><span>Reviewed August 19, 2026</span><span>Official Nadja Atwal website</span><a href="/editorial-standards/">Editorial standards</a></div>
      <section class="answer-block" aria-labelledby="direct-answer"><p class="section-kicker">Direct answer</p><h2 id="direct-answer">${page.answerQ}</h2><p>${page.answer}</p></section>
      <section class="section split-section"><div><p class="section-kicker">Overview</p><h2>${page.overviewTitle}</h2></div><div class="section-copy content-stack">${page.paragraphs.map((p) => `<p>${p}</p>`).join("")}</div></section>
      <section class="section"><div class="section-head"><p class="section-kicker">Key Elements</p><h2>How the subject is approached.</h2></div><div class="process-grid">${steps}</div></section>
      <section class="section dark-panel"><div class="panel-content"><p class="section-kicker">Relevant Topics</p><h2>Areas connected to this page.</h2><div class="topic-cloud">${page.topics.map((topic) => `<span>${topic}</span>`).join("")}</div></div></section>
      <section class="section faq-section" id="faq"><div class="section-head"><p class="section-kicker">FAQ</p><h2>Questions about ${page.h1.toLowerCase()}.</h2></div><div class="faq-list">${faqs}</div></section>
      <section class="related-links"><h2>Related official resources</h2><p>Continue with the pages most closely connected to this subject.</p><nav aria-label="Related pages">${related}<a href="/about/">About Nadja Atwal</a><a href="/booking/">Booking and contact</a></nav></section>
      <section class="cta-section"><div><p class="section-kicker">Contact</p><h2>Start with the opportunity and intended outcome.</h2><p>Share the organization, format, audience, timing, subject, and the decision or result the conversation should support.</p></div><div class="cta-card"><h3>Contact Nadja’s team</h3><p>Email atwal@media-architect.co for speaking, media, podcast, partnership, and advisory inquiries.</p><div class="cta-actions"><a class="primary-btn" href="mailto:atwal@media-architect.co">Email Booking</a><a class="secondary-btn" href="/booking/">Booking Details</a></div></div></section>
    </main>
    ${footer()}
  </div>
  <script src="/cookie-consent/cookie-config.js"></script>
  <script src="/cookie-consent/cookie-consent.js"></script>
</body>
</html>`;
}

for (const page of pages) {
  const dir = path.join(root, page.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), render(page));
}

console.log(`Generated ${pages.length} content pages.`);
