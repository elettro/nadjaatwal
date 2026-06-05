(function () {
  "use strict";

  var STORAGE_KEY = "nadja_cookie_consent_v1";
  var DEFAULT_CONFIG = {
    siteName: "Nadja Atwal",
    privacyPolicyUrl: "/privacy-policy/",
    imprintUrl: "/impressum/",
    consentVersion: "1.0",
    scripts: { statistics: [], marketing: [] }
  };
  var config = Object.assign({}, DEFAULT_CONFIG, window.CookieConsentConfig || {});
  config.scripts = Object.assign({}, DEFAULT_CONFIG.scripts, config.scripts || {});
  var consent = readConsent();
  var bannerOverlay;
  var modal;
  var lastFocusedElement;
  var loadedScripts = {};

  function readConsent() {
    try {
      var stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return null;
      }

      var parsed = JSON.parse(stored);
      if (!parsed || parsed.version !== config.consentVersion) {
        return null;
      }

      return {
        essential: true,
        statistics: Boolean(parsed.statistics),
        marketing: Boolean(parsed.marketing),
        externalMedia: Boolean(parsed.externalMedia),
        timestamp: parsed.timestamp,
        version: parsed.version
      };
    } catch (error) {
      return null;
    }
  }

  function writeConsent(preferences) {
    consent = {
      essential: true,
      statistics: Boolean(preferences.statistics),
      marketing: Boolean(preferences.marketing),
      externalMedia: Boolean(preferences.externalMedia),
      timestamp: new Date().toISOString(),
      version: config.consentVersion
    };

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    loadAllowedScripts();
    activateExternalMedia();
    hideBanner();
    closePreferences();
  }

  function createButton(text, className, action) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "cc-button " + className;
    button.textContent = text;
    button.addEventListener("click", action);
    return button;
  }

  function buildBanner() {
    bannerOverlay = document.createElement("div");
    bannerOverlay.className = "cc-overlay";

    var banner = document.createElement("section");
    banner.className = "cc-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-modal", "true");
    banner.setAttribute("aria-labelledby", "cc-banner-title");

    banner.innerHTML = [
      '<p class="cc-kicker">Privacy choices</p>',
      '<h2 id="cc-banner-title">' + escapeHtml(config.siteName) + ' uses privacy-first consent controls.</h2>',
      '<p>We use essential storage to remember your choices. Optional Statistics, Marketing, and External Media categories are prepared for future tools and stay off unless you allow them.</p>',
      '<div class="cc-links"><a href="' + escapeAttribute(config.privacyPolicyUrl) + '">Privacy Policy</a><a href="' + escapeAttribute(config.imprintUrl) + '">Imprint</a></div>'
    ].join("");

    var actions = document.createElement("div");
    actions.className = "cc-actions";
    actions.appendChild(createButton("Accept all", "cc-button-primary", function () {
      writeConsent({ statistics: true, marketing: true, externalMedia: true });
    }));
    actions.appendChild(createButton("Essential only", "cc-button-secondary", function () {
      writeConsent({ statistics: false, marketing: false, externalMedia: false });
    }));
    actions.appendChild(createButton("Customize settings", "cc-button-ghost", function () {
      openPreferences();
    }));

    banner.appendChild(actions);
    bannerOverlay.appendChild(banner);
    document.body.appendChild(bannerOverlay);
  }

  function buildModal() {
    modal = document.createElement("div");
    modal.className = "cc-modal";
    modal.hidden = true;
    modal.innerHTML = [
      '<section class="cc-modal-panel" role="dialog" aria-modal="true" aria-labelledby="cc-modal-title">',
      '  <div class="cc-modal-header">',
      '    <div>',
      '      <p class="cc-kicker">Consent preferences</p>',
      '      <h2 id="cc-modal-title">Privacy Settings</h2>',
      '      <p>Choose which optional categories ' + escapeHtml(config.siteName) + ' may use. Essential storage is always active so the site can remember this choice.</p>',
      '    </div>',
      '    <button type="button" class="cc-close" aria-label="Close privacy settings">×</button>',
      '  </div>',
      '  <div class="cc-modal-body">',
      '    <div class="cc-category">',
      '      <div><h3>Essential</h3><p>Required for core site functions and remembering your consent choice. Always active and locked on.</p></div>',
      '      <span class="cc-status">Always active</span>',
      '    </div>',
      categoryMarkup("statistics", "Statistics", "Default off. Placeholder category for future analytics and site performance measurement."),
      categoryMarkup("marketing", "Marketing", "Default off. Placeholder category for future ads, pixels, and retargeting."),
      categoryMarkup("externalMedia", "External Media", "Default off. Placeholder category for future YouTube, Spotify, maps, Instagram, and other embeds."),
      '    <div class="cc-actions">',
      '      <button type="button" class="cc-button cc-button-primary" data-cc-save>Save preferences</button>',
      '      <button type="button" class="cc-button cc-button-secondary" data-cc-accept-all>Accept all</button>',
      '      <button type="button" class="cc-button cc-button-ghost" data-cc-essential>Essential only</button>',
      '    </div>',
      '  </div>',
      '</section>'
    ].join("");

    modal.querySelector(".cc-close").addEventListener("click", function () {
      if (consent) {
        closePreferences();
      } else {
        hideModalOnly();
      }
    });
    modal.querySelector("[data-cc-save]").addEventListener("click", saveSelectedPreferences);
    modal.querySelector("[data-cc-accept-all]").addEventListener("click", function () {
      writeConsent({ statistics: true, marketing: true, externalMedia: true });
    });
    modal.querySelector("[data-cc-essential]").addEventListener("click", function () {
      writeConsent({ statistics: false, marketing: false, externalMedia: false });
    });

    document.body.appendChild(modal);
  }

  function categoryMarkup(name, label, description) {
    return [
      '<div class="cc-category">',
      '  <div><h3>' + label + '</h3><p>' + description + '</p></div>',
      '  <label class="cc-toggle">',
      '    <span class="sr-only">Allow ' + label + '</span>',
      '    <input type="checkbox" data-cc-toggle="' + name + '">',
      '    <span aria-hidden="true"></span>',
      '  </label>',
      '</div>'
    ].join("");
  }

  function openPreferences() {
    if (!modal) {
      buildModal();
    }

    lastFocusedElement = document.activeElement;
    syncToggles();
    modal.hidden = false;
    var firstToggle = modal.querySelector("[data-cc-toggle]");
    (firstToggle || modal.querySelector("button")).focus();
  }

  function closePreferences() {
    if (!modal) {
      return;
    }

    modal.hidden = true;
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  function hideModalOnly() {
    if (modal) {
      modal.hidden = true;
    }
  }

  function hideBanner() {
    if (bannerOverlay) {
      bannerOverlay.hidden = true;
    }
  }

  function syncToggles() {
    var values = consent || { statistics: false, marketing: false, externalMedia: false };
    modal.querySelectorAll("[data-cc-toggle]").forEach(function (toggle) {
      toggle.checked = Boolean(values[toggle.getAttribute("data-cc-toggle")]);
    });
  }

  function saveSelectedPreferences() {
    writeConsent({
      statistics: modal.querySelector('[data-cc-toggle="statistics"]').checked,
      marketing: modal.querySelector('[data-cc-toggle="marketing"]').checked,
      externalMedia: modal.querySelector('[data-cc-toggle="externalMedia"]').checked
    });
  }

  function loadAllowedScripts() {
    if (!consent) {
      return;
    }

    ["statistics", "marketing"].forEach(function (category) {
      if (!consent[category]) {
        return;
      }

      (config.scripts[category] || []).forEach(function (scriptConfig) {
        injectScript(scriptConfig, category);
      });
    });
  }

  function injectScript(scriptConfig, category) {
    if (!scriptConfig) {
      return;
    }

    var source = typeof scriptConfig === "string" ? scriptConfig : scriptConfig.src;
    var inlineCode = typeof scriptConfig === "object" ? scriptConfig.inline : "";
    var id = typeof scriptConfig === "object" ? scriptConfig.id : "";
    var marker = id || source || inlineCode;

    if (!marker || loadedScripts[marker]) {
      return;
    }

    var script = document.createElement("script");
    script.setAttribute("data-cc-category", category);
    script.setAttribute("data-cc-loaded", marker);

    if (source) {
      script.src = source;
      script.async = scriptConfig.async !== false;
    } else if (inlineCode) {
      script.text = inlineCode;
    }

    document.head.appendChild(script);
    loadedScripts[marker] = true;
  }

  function activateExternalMedia() {
    if (!consent || !consent.externalMedia) {
      return;
    }

    document.querySelectorAll('.cc-embed-placeholder[data-consent-category="externalMedia"][data-iframe-src]').forEach(function (placeholder) {
      var iframe = document.createElement("iframe");
      iframe.src = placeholder.getAttribute("data-iframe-src");
      iframe.title = placeholder.getAttribute("data-iframe-title") || "External media";
      iframe.loading = "lazy";
      iframe.allowFullscreen = true;
      iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");

      var wrapper = document.createElement("div");
      wrapper.className = "cc-responsive-iframe";
      wrapper.appendChild(iframe);
      placeholder.replaceWith(wrapper);
    });
  }

  function bindSettingsLinks() {
    document.querySelectorAll("[data-cookie-settings]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        openPreferences();
      });
    });
  }

  function bindExternalMediaButtons() {
    document.addEventListener("click", function (event) {
      var button = event.target.closest("[data-allow-external-media]");
      if (!button) {
        return;
      }

      writeConsent({
        statistics: consent ? consent.statistics : false,
        marketing: consent ? consent.marketing : false,
        externalMedia: true
      });
    });
  }

  function ensureSettingsLink() {
    if (document.querySelector("[data-cookie-settings]")) {
      return;
    }

    var footer = document.querySelector("footer");
    if (footer) {
      var link = document.createElement("a");
      link.href = "#";
      link.setAttribute("data-cookie-settings", "");
      link.textContent = "Privacy Settings";
      var linkGroup = footer.querySelector("div") || footer;
      linkGroup.appendChild(link);
      return;
    }

    var floating = document.createElement("a");
    floating.href = "#";
    floating.className = "cc-floating-settings";
    floating.setAttribute("data-cookie-settings", "");
    floating.textContent = "Privacy Settings";
    document.body.appendChild(floating);
  }

  function handleEscape(event) {
    if (event.key === "Escape" && consent && modal && !modal.hidden) {
      closePreferences();
    }
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character];
    });
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/'/g, "&#039;");
  }

  function init() {
    ensureSettingsLink();
    bindSettingsLinks();
    bindExternalMediaButtons();
    buildModal();
    document.addEventListener("keydown", handleEscape);

    if (consent) {
      loadAllowedScripts();
      activateExternalMedia();
    } else {
      buildBanner();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
