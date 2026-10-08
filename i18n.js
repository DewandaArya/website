(function () {
  "use strict";

  window.MojoI18N = window.MojoI18N || {};
  var translations = window.MojoI18N;

  var STORAGE_KEY = "mojolauncher.lang";
  var selects = document.querySelectorAll(".lang__select");

  var supported = [];
  if (selects.length) {
    var options = selects[0].options;
    for (var i = 0; i < options.length; i++) supported.push(options[i].value);
  }
  if (!supported.length) supported = ["en"];

  var defaults = {};
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    defaults[el.getAttribute("data-i18n")] = el.textContent;
  });

  var loading = {};

  function loadLocale(lang) {
    if (translations[lang]) return Promise.resolve(translations[lang]);
    if (loading[lang]) return loading[lang];
    loading[lang] = new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = "assets/locales/" + lang + ".js";
      script.onload = function () { resolve(translations[lang]); };
      script.onerror = function () {
        delete loading[lang];
        reject(new Error("Failed to load locale: " + lang));
      };
      document.head.appendChild(script);
    });
    return loading[lang];
  }

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && supported.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase();
    for (var i = 0; i < supported.length; i++) {
      if (nav === supported[i] || nav.indexOf(supported[i] + "-") === 0) return supported[i];
    }
    return supported[0];
  }

  function apply(lang) {
    var dict = translations[lang] || {};
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = dict[key] != null ? dict[key] : defaults[key];
      if (value != null) el.textContent = value;
    });
    selects.forEach(function (sel) { sel.value = lang; });
  }

  function setLang(lang) {
    if (supported.indexOf(lang) === -1) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    loadLocale(lang).then(function () { apply(lang); });
  }

  selects.forEach(function (sel) {
    sel.addEventListener("change", function () { setLang(sel.value); });
  });

  var initial = detectLang();
  selects.forEach(function (sel) { sel.value = initial; });
  loadLocale(initial).then(function () { apply(initial); });
})();
