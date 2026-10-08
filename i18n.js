(function () {
  "use strict";

  var translations = {
    en: {
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.news": "News",
      "nav.download": "Download",

      "hero.eyebrow": "Placeholder eyebrow text",
      "hero.title": "Minecraft, anywhere you want it",
      "hero.lede": "Placeholder introduction paragraph. MojoLauncher is a free, open source launcher that gets you into the game in a couple of taps. Replace this copy with the real announcement text before launch.",
      "hero.download": "Download",
      "hero.learn": "Learn more",
      "hero.note": "Temporary test text \u00b7 version 0.0.0-placeholder",

      "features.title": "Why MojoLauncher",
      "features.subtitle": "Short placeholder summary of the project for the feature grid below.",
      "features.card1.title": "Full control",
      "features.card1.body": "Placeholder body copy describing custom controls, runtime management and renderer options.",
      "features.card2.title": "Mod friendly",
      "features.card2.body": "Placeholder body copy about installing .jar files, Fabric, Forge, Quilt and NeoForge.",
      "features.card3.title": "Instances",
      "features.card3.body": "Placeholder body copy about isolated game directories, profiles and quick switching.",

      "news.title": "Latest news",
      "news.subtitle": "Three placeholder entries \u2014 swap them out for the real changelog posts.",
      "news.item1.title": "Placeholder release announcement headline",
      "news.item1.excerpt": "Temporary test text standing in for the first paragraph of the post.",
      "news.item2.title": "Placeholder performance update headline",
      "news.item2.excerpt": "Temporary test text standing in for the first paragraph of the post.",
      "news.item3.title": "Placeholder community spotlight headline",
      "news.item3.excerpt": "Temporary test text standing in for the first paragraph of the post.",

      "start.title": "Get started",
      "start.subtitle": "Pick a destination below. Every button is placeholder navigation for now.",
      "menu.wiki": "Wiki",
      "menu.discord": "Discord",
      "menu.docs": "Documentation & guides",
      "menu.settings": "Advanced settings",
      "menu.jar": "Run a .jar installer",
      "menu.logs": "Support & log files",
      "menu.folder": "Open game directory",

      "outro.title": "Ready when you are",
      "outro.body": "Placeholder closing paragraph. Tell readers where to get the launcher and what to do next.",
      "outro.play": "Play",

      "footer.build": "Latest release \u00b7 placeholder build",
      "footer.docs": "Docs",
      "footer.privacy": "Privacy",
      "footer.source": "Source",
      "footer.copy": "\u00a9 2026 MojoLauncher \u2014 temporary test footer text"
    },

    ru: {
      "nav.home": "\u0413\u043b\u0430\u0432\u043d\u0430\u044f",
      "nav.features": "\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",
      "nav.news": "\u041d\u043e\u0432\u043e\u0441\u0442\u0438",
      "nav.download": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",

      "hero.eyebrow": "\u0422\u0435\u043a\u0441\u0442-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430",
      "hero.title": "Minecraft \u2014 \u0433\u0434\u0435 \u0443\u0433\u043e\u0434\u043d\u043e",
      "hero.lede": "\u0412\u0441\u0442\u0443\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0431\u0437\u0430\u0446-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430. MojoLauncher \u2014 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u043b\u0430\u0443\u043d\u0447\u0435\u0440 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0438\u0433\u0440\u0443 \u0432 \u043f\u0430\u0440\u0443 \u043d\u0430\u0436\u0430\u0442\u0438\u0439. \u0417\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u044d\u0442\u043e\u0442 \u0442\u0435\u043a\u0441\u0442 \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043d\u043e\u043d\u0441 \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c.",
      "hero.download": "\u0421\u043a\u0430\u0447\u0430\u0442\u044c",
      "hero.learn": "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
      "hero.note": "\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u00b7 \u0432\u0435\u0440\u0441\u0438\u044f 0.0.0-placeholder",

      "features.title": "\u041f\u043e\u0447\u0435\u043c\u0443 MojoLauncher",
      "features.subtitle": "\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0434\u043b\u044f \u0431\u043b\u043e\u043a\u0430 \u043d\u0438\u0436\u0435.",
      "features.card1.title": "\u041f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c",
      "features.card1.body": "\u0422\u0435\u043a\u0441\u0442-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430 \u043f\u0440\u043e \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u043e\u0435 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u043e\u0439 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0440\u0435\u043d\u0434\u0435\u0440\u0430.",
      "features.card2.title": "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043c\u043e\u0434\u043e\u0432",
      "features.card2.body": "\u0422\u0435\u043a\u0441\u0442-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430 \u043f\u0440\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0443 .jar-\u0444\u0430\u0439\u043b\u043e\u0432, Fabric, Forge, Quilt \u0438 NeoForge.",
      "features.card3.title": "\u0418\u043d\u0441\u0442\u0430\u043d\u0441\u044b",
      "features.card3.body": "\u0422\u0435\u043a\u0441\u0442-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430 \u043f\u0440\u043e \u0438\u0437\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u0430\u043f\u043a\u0438 \u0438\u0433\u0440\u044b, \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u0438 \u0431\u044b\u0441\u0442\u0440\u043e\u0435 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435.",

      "news.title": "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",
      "news.subtitle": "\u0422\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0438 \u2014 \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u0438\u0445 \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0441\u0442\u044b.",
      "news.item1.title": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0430\u043d\u043e\u043d\u0441\u0430 \u0440\u0435\u043b\u0438\u0437\u0430-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430",
      "news.item1.excerpt": "\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0430\u0431\u0437\u0430\u0446\u0430 \u043f\u043e\u0441\u0442\u0430.",
      "news.item2.title": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430",
      "news.item2.excerpt": "\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0430\u0431\u0437\u0430\u0446\u0430 \u043f\u043e\u0441\u0442\u0430.",
      "news.item3.title": "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043d\u043e\u0432\u043e\u0441\u0442\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430",
      "news.item3.excerpt": "\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0430\u0431\u0437\u0430\u0446\u0430 \u043f\u043e\u0441\u0442\u0430.",

      "start.title": "\u0421 \u0447\u0435\u0433\u043e \u043d\u0430\u0447\u0430\u0442\u044c",
      "start.subtitle": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b \u043d\u0438\u0436\u0435. \u0412\u0441\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u043f\u043e\u043a\u0430 \u0432\u0435\u0434\u0443\u0442 \u0432 \u043d\u0438\u043a\u0443\u0434\u0430.",
      "menu.wiki": "\u0412\u0438\u043a\u0438",
      "menu.discord": "Discord",
      "menu.docs": "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0438 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0430",
      "menu.settings": "\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
      "menu.jar": "\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0449\u0438\u043a .jar",
      "menu.logs": "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0438 \u043b\u043e\u0433\u0438",
      "menu.folder": "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0430\u043f\u043a\u0443 \u0438\u0433\u0440\u044b",

      "outro.title": "\u0412\u0441\u0451 \u0433\u043e\u0442\u043e\u0432\u043e",
      "outro.body": "\u0417\u0430\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0430\u0431\u0437\u0430\u0446-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430. \u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435, \u0433\u0434\u0435 \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u043b\u0430\u0443\u043d\u0447\u0435\u0440 \u0438 \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0430\u043b\u044c\u0448\u0435.",
      "outro.play": "\u0418\u0433\u0440\u0430\u0442\u044c",

      "footer.build": "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0440\u0435\u043b\u0438\u0437 \u00b7 \u0441\u0431\u043e\u0440\u043a\u0430-\u0437\u0430\u0433\u043b\u0443\u0448\u043a\u0430",
      "footer.docs": "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b",
      "footer.privacy": "\u041a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c",
      "footer.source": "\u0418\u0441\u0445\u043e\u0434\u043d\u0438\u043a\u0438",
      "footer.copy": "\u00a9 2026 MojoLauncher \u2014 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432 \u043f\u043e\u0434\u0432\u0430\u043b\u0435"
    }
  };

  var STORAGE_KEY = "mojolauncher.lang";
  var supported = Object.keys(translations);
  var select = document.querySelector(".lang__select");

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    for (var i = 0; i < supported.length; i++) {
      if (nav === supported[i] || nav.indexOf(supported[i] + "-") === 0) return supported[i];
    }
    return "en";
  }

  function apply(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key] != null ? dict[key] : translations.en[key];
      if (value != null) el.textContent = value;
    });
    if (select) select.value = lang;
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    apply(lang);
  }

  if (select) {
    select.addEventListener("change", function () {
      setLang(select.value);
    });
  }

  apply(detectLang());
})();
