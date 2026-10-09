window.MojoI18N = window.MojoI18N || {};
window.MojoI18N.en = {
  "nav.home": "Home",
  "nav.features": "Features",
  "nav.news": "News",
  "nav.download": "Download",
  "nav.components": "Components",

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

  "news.title": "Latest releases",
  "news.subtitle": "The newest builds published on GitHub.",
  "news.loading": "Loading releases\u2026",
  "news.error": "Couldn't load releases right now.",
  "news.noReleases": "No releases published yet.",
  "news.viewAll": "View all releases on GitHub",
  "news.prerelease": "Pre-release",

  "download.title": "Download MojoLauncher",
  "download.subtitle": "Get the launcher for Android. Stable builds come from Google Play; the newest builds are published on GitHub.",
  "download.nightly": "Nightly build",
  "download.nightlyWarning": "Nightly builds are experimental and can be unstable or broken \u2014 use them at your own risk.",
  "play.src": "assets/badges/google-play-en.webp",
  "play.alt": "Get it on Google Play",

  "components.title": "Components",
  "components.subtitle": "MojoLauncher is assembled from open-source components, most of them maintained under the MojoLauncher organisation.",

  "components.ltw.title": "LTW \u2014 Large Thin Wrapper",
  "components.ltw.body": "A thin OpenGL core-to-OpenGL ES wrapper that powers the OpenGL ES 3 renderer. It translates desktop OpenGL calls so modern Minecraft versions can run on Android GPUs.",
  "components.ltw.link": "View LTW on GitHub",

  "components.gl4es.title": "GL4ES",
  "components.gl4es.body": "The OpenGL-to-OpenGL ES translation layer behind the OpenGL ES 2 renderer. This \u201cHoly GL4ES\u201d fork is tuned for running Minecraft on Android.",
  "components.gl4es.link": "View Holy GL4ES on GitHub",

  "components.mojoexec.title": "MojoExec",
  "components.mojoexec.body": "A native porting utility that loads graphics drivers, sets up EGL and Vulkan, and hooks Vulkan entry points. It also provides the namespace-bypass loader used to load Turnip and other drivers.",
  "components.mojoexec.link": "View MojoExec on GitHub",

  "components.sdl.title": "SDL / GLFW",
  "components.sdl.body": "The two interchangeable window and input backends. Both create the game window and handle keyboard, mouse and gamepad input; the launcher picks SDL3 or GLFW depending on the Minecraft version being launched.",
  "components.sdl.note": "Both SDL3 and GLFW are maintained as forks adapted for MojoLauncher.",

  "components.openjdk.title": "OpenJDK",
  "components.openjdk.body": "The Java runtime that runs the game. MojoLauncher ships a multiarch OpenJDK 8 build covering all four Android ABIs, so players don\u2019t have to install a runtime separately.",
  "components.openjdk.link": "OpenJDK builds",

  "components.mesa.title": "Mesa 3D",
  "components.mesa.body": "The graphics stack behind the Mesa renderers \u2014 Zink over Vulkan and Freedreno/Turnip. MojoLauncher builds a patched Mesa 26.2 fork with Android support and extra Adreno drivers.",
  "components.mesa.note": "Maintained as a private fork; upstream Mesa lives at mesa3d.org.",
  "components.mesa.link": "Upstream Mesa",

  "menu.language": "Language",
  "menu.community": "Community",

  "outro.title": "Ready when you are",
  "outro.body": "Placeholder closing paragraph. Tell readers where to get the launcher and what to do next.",
  "outro.play": "Play",

  "footer.build": "Latest release \u00b7 placeholder build",
  "footer.docs": "Docs",
  "footer.privacy": "Privacy",
  "footer.source": "Source",
  "footer.copy": "\u00a9 2026 MojoLauncher \u2014 temporary test footer text"
};
