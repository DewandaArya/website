(function () {
  "use strict";

  var toggle = document.querySelector(".topbar__toggle");
  var sidebar = document.getElementById("sidebar");
  if (!toggle || !sidebar) return;

  var back = sidebar.querySelector(".sidebar__back");

  function setOpen(open) {
    sidebar.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setOpen(!sidebar.classList.contains("is-open"));
  });

  if (back) {
    back.addEventListener("click", function () { setOpen(false); });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  var mq = window.matchMedia("(max-width: 640px) and (orientation: portrait)");
  var onChange = function () { if (!mq.matches) setOpen(false); };
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
