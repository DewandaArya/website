(function () {
  "use strict";

  var toggle = document.querySelector(".topbar__toggle");
  var sidebar = document.getElementById("sidebar");
  if (!toggle || !sidebar) return;

  var icon = toggle.querySelector(".topbar__toggle-icon");

  var ICON_SETTINGS = "assets/icons/sliders.svg";
  var ICON_HOME = "assets/icons/home.svg";

  function setOpen(open) {
    sidebar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Home" : "Settings");
    if (icon) icon.src = open ? ICON_HOME : ICON_SETTINGS;
  }

  toggle.addEventListener("click", function () {
    setOpen(!sidebar.classList.contains("is-open"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  var mq = window.matchMedia("(max-width: 640px) and (orientation: portrait)");
  var onChange = function () { if (!mq.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
