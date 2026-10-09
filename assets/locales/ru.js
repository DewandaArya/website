window.MojoI18N = window.MojoI18N || {};
window.MojoI18N.ru = {
  "nav.home": "Главная",
  "nav.features": "Возможности",
  "nav.news": "Новости",
  "nav.download": "Скачать",
  "nav.components": "Компоненты",

  "hero.eyebrow": "Текст-заглушка",
  "hero.title": "Minecraft — где угодно",
  "hero.lede": "Вступительный абзац-заглушка. MojoLauncher — бесплатный лаунчер с открытым исходным кодом, который запускает игру в пару нажатий. Замените этот текст на реальный анонс перед запуском.",
  "hero.download": "Скачать",
  "hero.learn": "Подробнее",
  "hero.note": "Временный текст \u00b7 версия 0.0.0-placeholder",

  "features.title": "Почему MojoLauncher",
  "features.subtitle": "Краткое описание проекта для блока ниже.",
  "features.card1.title": "Полный контроль",
  "features.card1.body": "Текст-заглушка про настраиваемое управление, управление средой выполнения и параметры рендера.",
  "features.card2.title": "Поддержка модов",
  "features.card2.body": "Текст-заглушка про установку .jar-файлов, Fabric, Forge, Quilt и NeoForge.",
  "features.card3.title": "Инстансы",
  "features.card3.body": "Текст-заглушка про изолированные папки игры, профили и быстрое переключение.",

  "news.title": "Последние релизы",
  "news.subtitle": "Самые свежие сборки, опубликованные на GitHub.",
  "news.loading": "Загрузка релизов\u2026",
  "news.error": "Не удалось загрузить релизы.",
  "news.noReleases": "Релизов пока нет.",
  "news.viewAll": "Все релизы на GitHub",
  "news.prerelease": "Предрелиз",

  "download.title": "Скачать MojoLauncher",
  "download.subtitle": "Скачайте лаунчер для Android. Стабильные сборки — в Google Play, самые свежие — на GitHub.",
  "download.nightly": "Ночная сборка",
  "download.nightlyWarning": "Ночные сборки экспериментальны и могут быть нестабильными или сломанными — используйте их на свой риск.",
  "play.src": "assets/badges/google-play-ru.png",
  "play.alt": "Доступно в Google Play",

  "components.title": "Компоненты",
  "components.subtitle": "MojoLauncher собран из компонентов с открытым исходным кодом — большинство из них поддерживается в организации MojoLauncher.",

  "components.ltw.title": "LTW \u2014 Large Thin Wrapper",
  "components.ltw.body": "Тонкая обёртка, транслирующая OpenGL Core в OpenGL ES. Обеспечивает работу рендерера OpenGL ES 3, благодаря чему современные версии Minecraft запускаются на GPU Android.",
  "components.ltw.link": "LTW на GitHub",

  "components.mojoexec.title": "MojoExec",
  "components.mojoexec.body": "Нативная утилита для портирования: загружает графические драйверы, настраивает EGL и Vulkan и перехватывает точки входа Vulkan. Также предоставляет загрузчик с обходом пространства имён для Turnip и других драйверов.",
  "components.mojoexec.link": "MojoExec на GitHub",

  "components.sdl.title": "SDL / GLFW",
  "components.sdl.body": "Два взаимозаменяемых бэкенда окон и ввода. Оба создают окно игры и обрабатывают ввод с клавиатуры, мыши и геймпада; лаунчер выбирает SDL3 или GLFW в зависимости от версии Minecraft.",
  "components.sdl.note": "Проект поддерживает форк, потому что Android-бэкенд upstream SDL рассчитан на то, что активити и окном владеет сам SDL. MojoSDL добавляет слой JNI-привязок, собственную работу с поверхностью и EGL и поддержку нескольких окон, чтобы SDL работал внутри активити и поверхности лаунчера и загружал графические драйверы через MojoExec.",
  "components.glfw.note": "GLFW — тоже хардфорк: upstream GLFW вообще не поддерживает Android, поэтому форк добавляет платформу Android и соответствующие JNI-привязки.",

  "menu.language": "Язык",
  "menu.community": "Сообщество",

  "outro.title": "Всё готово",
  "outro.body": "Заключительный абзац-заглушка. Расскажите, где скачать лаунчер и что делать дальше.",
  "outro.play": "Играть",

  "footer.build": "Последний релиз \u00b7 сборка-заглушка",
  "footer.docs": "Документы",
  "footer.privacy": "Конфиденциальность",
  "footer.source": "Исходники",
  "footer.copy": "\u00a9 2026 MojoLauncher — временный текст в подвале"
};
