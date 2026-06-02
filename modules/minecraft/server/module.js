({
  "content": `
    <input type="text" placeholder="Адрес сервера..." id="address">
    <br /><br /><br />
    <div class="blockselect selected" data-call="setType">Java</div>
    <div class="blockselect" data-call="setType">Bedrock</div>
    <br /><br />
    <img src="download.png" width="32px" height="32px">
    <br />
    <p id="outputData" style="color: white;">(Информации нет.)</p>
    <img width="64px" height="64px" id="icon" />
    <br /><br /><br />
    <button data-call="load">Загрузить</button>
  `,
  "setType": (_, event) => {
    document.querySelector(".blockselect.selected").classList.remove("selected");
    event.target.classList.add("selected");
  },
  "load": async ({ address, outputData, icon }) => {
    outputData.innerHTML = `<font color="yellow">Загрузка...</font>`;
    icon.style.display = "none";
    try {
      var result = await fetch(`https://api.mcsrvstat.us${(document.querySelector(".blockselect.selected").innerText == "Bedrock" ? "/bedrock" : "")}/3/${encodeURIComponent(address)}`, {
        "headers": {
          "User-Agent": "CatUtils (https://catutils.topcatto.xyz, v0.0.1)"
        }
      }).then(res => res.json());
    } catch {
      outputData.innerHTML = `<font color="red">Не удалось</font> получить информацию.`;
      return;
    }
    outputData.innerHTML = `Сервер: <font color="lime">${result.ip}</font>${result.hostname ? ` (<font color="lime">${result.hostname}</font>)` : ""}<br />Статус: ${result.online ? `<font color="lime">Онлайн</font>` : `<font color="red">Оффлайн</font>`}<br />Версия: <font color="lime">${result.version}</font>${result.software ? `<br />Ядро: <font color="lime">${result.software}</font>` : ""}<br />Игроки: <font color="lime">${result.players.online} / ${result.players.max}</font>`;
    if (result.icon) {
      icon.style.display = "block";
      icon.src = result.icon;
    }
  }
})
