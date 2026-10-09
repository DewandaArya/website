(function () {
  "use strict";

  var container = document.getElementById("releases");
  if (!container) return;

  var repo = container.getAttribute("data-releases") || "MojoLauncher/MojoLauncher";
  var limit = parseInt(container.getAttribute("data-limit"), 10);
  if (!(limit > 0)) limit = 3;

  // The "nightly" tag is a persistent rolling release (its APK is re-uploaded
  // for every build), so it is never a real news entry.
  var EXCLUDED_TAGS = ["nightly"];

  var RELEASES_URL = "https://github.com/" + repo + "/releases";
  // Fetch a few extra: excluded tags are dropped before we slice to `limit`.
  var API_URL = "https://api.github.com/repos/" + repo + "/releases?per_page=" + (limit + 5);

  // English fallbacks, used until the active locale has loaded.
  var FALLBACK = {
    "news.loading": "Loading releases\u2026",
    "news.error": "Couldn't load releases right now.",
    "news.noReleases": "No releases published yet.",
    "news.viewAll": "View all releases on GitHub",
    "news.prerelease": "Pre-release"
  };

  var releases = null;
  var status = "loading";

  function t(key) {
    if (window.MojoI18N && typeof window.MojoI18N.t === "function") {
      return window.MojoI18N.t(key, FALLBACK[key]);
    }
    return FALLBACK[key];
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function pad(value) {
    return value < 10 ? "0" + value : String(value);
  }

  function formatDate(iso) {
    var date = new Date(iso);
    if (isNaN(date.getTime())) return "";
    return pad(date.getDate()) + "." + pad(date.getMonth() + 1) + "." + date.getFullYear();
  }

  // Turn a release's markdown body into a short, plain-text excerpt.
  function excerpt(markdown) {
    if (!markdown) return "";
    var text = markdown
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/<[^>]+>/g, " ")
      .replace(/^\s{0,3}#{1,6}\s*/gm, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*>\s?/gm, "")
      .replace(/[*_~]{1,3}/g, "")
      .replace(/\s+/g, " ")
      .trim();

    var MAX = 180;
    if (text.length <= MAX) return text;
    var cut = text.slice(0, MAX);
    var space = cut.lastIndexOf(" ");
    if (space > 60) cut = cut.slice(0, space);
    return cut.replace(/[.,;:\-\u2013\u2014]+$/, "") + "\u2026";
  }

  function excluded(release) {
    var tag = release && release.tag_name ? String(release.tag_name).toLowerCase() : "";
    return EXCLUDED_TAGS.indexOf(tag) !== -1;
  }

  function buildItem(release) {
    var url = release.html_url || RELEASES_URL;
    var link = el("a", "news__item");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    link.appendChild(el("span", "news__date", formatDate(release.published_at || release.created_at)));

    var name = release.name || release.tag_name || "";
    var title = el("span", "news__title", name);
    if (release.tag_name && release.tag_name !== name) {
      var tag = el("span", "news__tag", release.tag_name);
      if (release.prerelease) tag.appendChild(el("span", "news__tag-note", t("news.prerelease")));
      title.appendChild(document.createTextNode(" "));
      title.appendChild(tag);
    }
    link.appendChild(title);

    link.appendChild(el("span", "news__excerpt", excerpt(release.body)));
    return link;
  }

  function render() {
    container.textContent = "";

    if (status === "loading") {
      container.setAttribute("aria-busy", "true");
      container.appendChild(el("p", "news__status", t("news.loading")));
      return;
    }

    container.removeAttribute("aria-busy");

    if (status === "error") {
      var message = el("p", "news__status", t("news.error") + " ");
      var link = el("a", "news__status-link", t("news.viewAll"));
      link.href = RELEASES_URL;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      message.appendChild(link);
      container.appendChild(message);
      return;
    }

    if (!releases || !releases.length) {
      container.appendChild(el("p", "news__status", t("news.noReleases")));
      return;
    }

    releases.forEach(function (release) {
      container.appendChild(buildItem(release));
    });
  }

  function load() {
    status = "loading";
    render();

    if (!window.fetch) {
      status = "error";
      render();
      return;
    }

    fetch(API_URL, { headers: { Accept: "application/vnd.github+json" } })
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status);
        return response.json();
      })
      .then(function (data) {
        releases = Array.isArray(data)
          ? data.filter(function (release) { return !excluded(release); }).slice(0, limit)
          : [];
        status = "ready";
        render();
      })
      .catch(function () {
        status = "error";
        render();
      });
  }

  document.addEventListener("mojo:langchange", render);
  load();
})();
