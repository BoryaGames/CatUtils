var fs = require("fs");
var babel = require("@babel/core");

// Очистка
try {
  fs.rmSync("dist", {
    "recursive": true
  });
} catch {}

// Создание папки dist
fs.mkdirSync("dist");

// Копирование файлов из public в dist
fs.readdirSync("public").forEach(file => fs.copyFileSync(`public/${file}`, `dist/${file}`));

// Загрузка всех модулей и создание VFS
var vfs = {
  "type": "root",
  "elements": {}
};
var assigns = "";
function loadModules(current, path) {
  fs.readdirSync(`modules${path}`).forEach(module => {
    if (module.match(/^module\.js(on)?$/)) {
      return;
    }
    var base = {
      "type": "folder",
      "elements": {}
    };
    if (fs.existsSync(`modules${path}${module}/module.js`)) {
      base = {
        "type": "file"
      };
      assigns += `\nfs${`${path}${module}`.split("/").filter(part => part).map(part => `.elements["${part}"]`).join("")} = Object.assign(fs${`${path}${module}`.split("/").filter(part => part).map(part => `.elements["${part}"]`).join("")}, ${fs.readFileSync(`modules${path}${module}/module.js`).toString("utf-8")});`;
    }
    current.elements[module] = Object.assign(base, JSON.parse(fs.readFileSync(`modules${path}${module}/module.json`).toString("utf-8")));
    if (base.type == "folder") {
      loadModules(current.elements[module], `${path}${module}/`);
    }
  });
}
loadModules(vfs, "/");

// Загрузка кода и добавление модулей в код
var code = `${fs.readFileSync("index.js").toString("utf-8").replace("{}; // @build-insert", `${JSON.stringify(vfs, null, 2)};${assigns}`)}`;

// Минификация кода
var minified = babel.transformSync(code, {
  "presets": ["minify"],
  "comments": false
});

// Создание bundle.min.js
fs.writeFileSync("dist/bundle.min.js", `${fs.readdirSync("lib").map(library => fs.readFileSync(`lib/${library}`).toString("utf-8")).join("\n")}\n${minified.code}`);