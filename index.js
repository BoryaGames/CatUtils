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
    updateCalls();
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

function updateCalls() {
  Array.from(document.querySelectorAll("img, input, button, div, span, i, code")).forEach(btn => {
    if (btn.dataset.call) {
      btn.onclick = event => {
        currentElement[btn.dataset.call](getProxy(), event);
      };
    }
    if (btn.dataset.change) {
      btn.onchange = event => {
        currentElement[btn.dataset.change](getProxy(), event);
      };
    }
    if (btn.dataset.dragenter) {
      btn.ondragenter = event => {
        currentElement[btn.dataset.dragenter](getProxy(), event);
      };
    }
    if (btn.dataset.dragover) {
      btn.ondragover = event => {
        currentElement[btn.dataset.dragover](getProxy(), event);
      };
    }
    if (btn.dataset.dragleave) {
      btn.ondragleave = event => {
        currentElement[btn.dataset.dragleave](getProxy(), event);
      };
    }
    if (btn.dataset.drop) {
      btn.ondrop = event => {
        currentElement[btn.dataset.drop](getProxy(), event);
      };
    }
  });
}

function findBytePattern(haystack, needle, startIndex = 0) {
  if (needle.length === 0) {
    return startIndex;
  }
  if (needle.length > haystack.length - startIndex) {
    return -1;
  } 
  for (var i = startIndex; i <= haystack.length - needle.length; i++) {
    var found = true;
    for (var j = 0; j < needle[0].length; j++) {
      if (haystack[i + j] !== needle[0][j] && !needle[1].includes(j)) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }
  return -1;
}

function parseHEX(hex) {
  return [new Uint8Array(hex.split(" ").map(byte => (byte == "??") ? 0 : parseInt(byte, 16))), hex.split(" ").map((byte, index) => (byte == "??") ? index : null).filter(byte => byte)];
}

function getVersion(condition, versions) {
  function parseVersion(version) {
    var mainMatch = version.match(/^([0-9]+(?:\.[0-9]+)*(?:\.[0-9A-Za-z-]+)*)/);
    if (!mainMatch) {
      return {
        "main": [],
        "preRelease": null,
        "build": null
      };
    }
    var mainPart = mainMatch[1];
    var rest = version.slice(mainMatch[0].length);
    var preRelease = null;
    var build = null;
    if (rest.startsWith("+")) {
      build = rest.slice(1);
    } else if (rest.startsWith("-")) {
      var dashPlus = rest.indexOf("+");
      if (dashPlus !== -1) {
        preRelease = rest.slice(1, dashPlus);
        build = rest.slice(dashPlus + 1);
      } else {
        preRelease = rest.slice(1);
      }
    }
    var mainParts = mainPart.split(".").map(part => {
      var num = parseInt(part, 10);
      return isNaN(num) ? part : num;
    });
    var preReleaseParts = preRelease ? preRelease.split(".").map(part => {
      var num = parseInt(part, 10);
      return isNaN(num) ? part : num;
    }) : null;
    return {
      "main": mainParts,
      "preRelease": preReleaseParts,
      "build": build
    };
  }
  function compareParts(a, b) {
    const maxLength = Math.max(a.length, b.length);
    for (let i = 0; i < maxLength; i++) {
      const partA = i < a.length ? a[i] : 0;
      const partB = i < b.length ? b[i] : 0;
      if (typeof partA === "number" && typeof partB === "number") {
        if (partA !== partB) {
          return partA - partB;
        }
      } else if (typeof partA === "number" && typeof partB === "string") {
        return -1;
      } else if (typeof partA === "string" && typeof partB === "number") {
        return 1;
      } else {
        var strA = String(partA);
        var strB = String(partB);
        if (strA < strB) {
          return -1;
        }
        if (strA > strB) {
          return 1;
        }
      }
    }
    return 0;
  }
  function compareVersions(a, b) {
    var parsedA = parseVersion(a);
    var parsedB = parseVersion(b);
    var mainCompare = compareParts(parsedA.main, parsedB.main);
    if (mainCompare !== 0) {
      return mainCompare;
    }
    if (!parsedA.preRelease && parsedB.preRelease) {
      return 1;
    }
    if (parsedA.preRelease && !parsedB.preRelease) {
      return -1;
    }
    if (parsedA.preRelease && parsedB.preRelease) {
      return compareParts(parsedA.preRelease, parsedB.preRelease);
    }
    return 0;
  }
  function matchesCondition(version, condition) {
    var versionParts = version.split(".");
    var conditionParts = condition.split(".");
    for (var i = 0; i < conditionParts.length; i++) {
      if (i >= versionParts.length) {
        return false;
      }
      if (versionParts[i] !== conditionParts[i]) {
        return false;
      }
    }
    return true;
  }
  var matchingVersions = versions.filter(v => matchesCondition(v, condition));
  if (matchingVersions.length === 0) {
    return null;
  }
  return matchingVersions.sort((a, b) => compareVersions(b, a))[0];
}

function sanitizeHTML(text) {
  return text.split("<").join("&lt;").split(">").join("&gt;");
}