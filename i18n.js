(function () {
  "use strict";

  var translations = window.MojoI18N || { en: {} };
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
    var dict = translations[lang] || translations.en || {};
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key] != null ? dict[key] : (translations.en ? translations.en[key] : null);
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
