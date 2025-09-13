var currentPath = "";
var currentElement = null;
var currentInterval = null;
var currentVariables = {};
var inputsCache = {};
var fs = {}; // @build-insert

window.addEventListener("DOMContentLoaded", () => {
  if (!location.hash) {
    location.hash = "#/";
  }
  currentPath = location.hash.slice(1);
  render();
  setInterval(() => {
    var currentElement = getCurrentElement();
    if (currentElement.type != "file" || !currentElement._update) {
      return;
    }
    var changed = !1;
    for (var input of Array.from(document.querySelectorAll("select, input, textarea"))) {
      if (!input.id || inputsCache[input.id] == input.value) {
        continue;
      }
      changed = !0;
      inputsCache[input.id] = input.value;
    }
    if (changed) {
      currentElement._update(getProxy());
    }
  }, 1);
});

window.addEventListener("popstate", () => {
  currentPath = location.hash.slice(1);
  render();
});

function getCurrentElement() {
  var currentElement = fs;
  var path = currentPath.split("/").filter(part => part);
  while(path.length) {
    currentElement = currentElement.elements[path.shift()];
  }
  return currentElement;
}

function getProxy() {
  return new Proxy({}, {
    get(_, id) {
      return document.querySelector(`#${id}`);
    }
  });
}

function render() {
  if (currentElement && currentElement.__mousedown) {
    window.removeEventListener("mousedown", currentElement.__mousedown);
    delete currentElement.__mousedown;
  }
  if (currentElement && currentElement.__keypress) {
    window.removeEventListener("keypress", currentElement.__keypress);
    delete currentElement.__keypress;
  }
  clearInterval(currentInterval);
  currentInterval = null;
  currentVariables = {};
  currentElement = getCurrentElement();
  if (currentElement.type == "file") {
    document.querySelector("#modules").innerHTML = `<img src="back.png" width="64px" height="64px" id="back" onclick="back();" draggable="false"><br><br><br><br><br>${currentElement.content}`;
    Array.from(document.querySelectorAll("img, button, div, span, code")).filter(btn => btn.dataset.call).forEach(btn => {
      btn.addEventListener("click", event => {
        currentElement[btn.dataset.call](getProxy(), event);
      });
    });
    if (currentElement._interval) {
      currentInterval = setInterval(currentElement._interval, 10, getProxy());
    }
    if (currentElement._mousedown) {
      currentElement.__mousedown = event => {
        currentElement._mousedown(getProxy(), event);
      };
      window.addEventListener("mousedown", currentElement.__mousedown);
    }
    if (currentElement._keypress) {
      currentElement.__keypress = event => {
        currentElement._keypress(getProxy(), event);
      };
      window.addEventListener("keypress", currentElement.__keypress);
    }
  } else {
    document.querySelector("#modules").innerHTML = `${(currentElement.type == "root") ? "" : `<img src="back.png" width="64px" height="64px" id="back" onclick="back();" draggable="false">`}${splitArray(Object.keys(currentElement.elements), 4).map(container => `<div class="container">${container.map(module => `<div class="module" data-module="${module}"><i class="${currentElement.elements[module].icon}"></i><p>${currentElement.elements[module].name}</p></div>`).join("")}</div>`).join("<br />")}`;
    Array.from(document.querySelectorAll(".module")).forEach(module => {
      module.addEventListener("click", openModule);
    });
  }
}

function openModule(event) {
  var module = event.target;
  while(!module.dataset.module) {
    module = module.parentElement;
  }
  currentPath = `${currentPath}/${module.dataset.module}`.replace(/\/+/g, "/");
  location.hash = `#${currentPath}`;
  render();
}

function back() {
  currentPath = (currentPath.split("/").slice(0, -1).join("/") || "/");
  location.hash = `#${currentPath}`;
  render();
}

function splitArray(array, chunkSize) {
  var numberOfChunks = Math.ceil(array.length / chunkSize);
  return [...Array(numberOfChunks)].map((value, index) => {
    return array.slice(index * chunkSize, (index + 1) * chunkSize);
  });
}