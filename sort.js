const arr = [
  "bungcip.better-toml",
  "ChakrounAnas.turbo-console-log",
  "cschlosser.doxdocgen",
  "DavidAnson.vscode-markdownlint",
  "dbaeumer.vscode-eslint",
  "DigitalBrainstem.javascript-ejs-support",
  "donjayamanne.githistory",
  "ecmel.vscode-html-css",
  "eg2.vscode-npm-script",
  "esbenp.prettier-vscode",
  "GitHub.copilot",
  "GitHub.github-vscode-theme",
  "golang.go",
  "GrapeCity.gc-excelviewer",
  "icrawl.discord-vscode",
  "jeff-hykin.better-cpp-syntax",
  "johnsoncodehk.volar",
  "kamikillerto.vscode-colorize",
  "kisstkondoros.vscode-codemetrics",
  "mikestead.dotenv",
  "mintlify.document",
  "ms-azuretools.vscode-docker",
  "ms-python.python",
  "ms-python.vscode-pylance",
  "ms-vscode-remote.remote-containers",
  "ms-vscode-remote.remote-ssh",
  "ms-vscode-remote.remote-wsl",
  "ms-vscode.cmake-tools",
  "ms-vscode.cpptools",
  "ms-vscode.cpptools-extension-pack",
  "ms-vscode.cpptools-themes",
  "ms-vscode.vscode-typescript-next",
  "ms-vsliveshare.vsliveshare",
  "octref.vetur",
  "piotrpalarz.vscode-gitignore-generator",
  "PKief.material-icon-theme",
  "pranaygp.vscode-css-peek",
  "ritwickdey.LiveServer",
  "TabNine.tabnine-vscode",
  "twxs.cmake",
  "Tyriar.shell-launcher",
  "usernamehw.errorlens",
  "vsciot-vscode.vscode-arduino",
  "WakaTime.vscode-wakatime",
  "wayou.vscode-todo-highlight",
  "xabikos.JavaScriptSnippets",
  "zhuangtongfa.material-theme",
  "Zignd.html-css-class-completion",
];
let str = "";
let str2 = "";
for (const i of arr) {
  str += `- 📦 [${i}](https://marketplace.visualstudio.com/items?itemName=${i})\n`;
  str2 += `- ${i}\n`;
}
console.log(str2);
