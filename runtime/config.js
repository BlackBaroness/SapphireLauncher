// ====== LAUNCHER CONFIG ====== //
var config = {
    dir: "SapphireLife", // Launcher directory
    title: "SapphireLife", // Window title
    icons: [ "favicon.png" ], // Window icon paths

    // Auth config
    newsURL: "https://sapphirelife.ru/", // News WebView URL
    linkText: "Забыли пароль?", // Text for link under "Auth" button
    linkURL: new java.net.URL("http://sapphirelife.ru/lost-password/"), // URL for link under "Auth" button

    // Settings defaults
    settingsMagic: 0xC0DE5, // Ancient magic, don't touch
    autoEnterDefault: true, // Should autoEnter be enabled by default?
    fullScreenDefault: false, // Should fullScreen be enabled by default?
    ramDefault: 1024, // Default RAM amount (0 for auto)

    // Custom JRE config (!!! DON'T CHANGE !!!)
    jvmMustdie32Dir: "jre-8u202-win32", jvmMustdie64Dir: "jre-8u202-win64",
    jvmLinux32Dir: "jre-8u202-linux32", jvmLinux64Dir: "jre-8u202-linux64",
    jvmMacOSXDir: "jre-8u202-macosx", jvmUnknownDir: "jre-8u202-unknown"
};

// ====== DON'T TOUCH! ====== //
var dir = IOHelper.HOME_DIR.resolve(config.dir);
if (!IOHelper.isDir(dir)) {
    java.nio.file.Files.createDirectory(dir);
}
var defaultUpdatesDir = dir.resolve("updates");
if (!IOHelper.isDir(defaultUpdatesDir)) {
    java.nio.file.Files.createDirectory(defaultUpdatesDir);
}
