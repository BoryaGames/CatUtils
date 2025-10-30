({
  "content": `
    <input type="text" placeholder="Название..." id="packageName">
    <br /><br />
    <button data-call="load">Загрузить</button>
    <br /><br /><br /><br /><br />
    <div id="output" style="color: white;"></p>
  `,
  "load": async ({ packageName, output }) => {
    output.innerHTML = "Загрузка...";
    var result = await fetch(`https://registry.npmjs.com/${packageName.value}`).then(res => res.json());
    currentElement.packageData = result;
    output.innerHTML = `<h1>${result.name}</h1><h4>${result.description || ""}</h4><div style="width: 40%;">${(result.keywords || []).map(keyword => `<span class="blockselect" style="margin: 2px; cursor: auto;">${keyword}</span>`).join("")}</div><br /><br /><input type="text" placeholder="Условие версии..." id="versionCondition" value="latest"><br /><p id="version"></p>`;
    updateCalls();
    currentElement._update(getProxy());
  },
  "_update": ({ versionCondition, version }) => {
    if (!versionCondition) {
      return;
    }
    var result = sanitizeHTML(currentElement.packageData["dist-tags"][versionCondition.value] || getVersion(versionCondition.value, Object.keys(currentElement.packageData.versions)));
    if (result) {
      currentElement.version = result;
      result += ` <i class="fa-solid fa-copy" style="cursor: pointer;" data-call="copyVersion"></i>`;
    }
    version.innerHTML = result || "Неизвестно";
    updateCalls();
  },
  "copyVersion": () => {
    navigator.clipboard.writeText(`"${currentElement.packageData.name}": "^${currentElement.version}"`);
  }

})
