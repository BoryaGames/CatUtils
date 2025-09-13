({
  "content": `
    <input type="text" placeholder="ID" id="inputId">
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br>
    <p id="outputData" style="color: white;">(Информации нет.)</p>
    <br><br>
    <div class="blockselect" data-call="setType">Сервер</div>
    <div class="blockselect selected" data-call="setType">Неизвестно</div>
    <div class="blockselect" data-call="setType">Не сервер</div>
    <br><br><br>
    <button data-call="scan">Сканировать</button>
  `,
  "setType": (_, event) => {
    document.querySelector(".blockselect.selected").classList.remove("selected");
    event.target.classList.add("selected");
  },
  "scan": async ({ inputId, outputData }) => {
    var id = BigInt(inputId.value);
    var timePart = (id >> 22n);
    var workerId = (id >> 17n & 0x1Fn);
    var processId = (id >> 12n & 0x1Fn);
    var incrementPart = (id & 0xFFFn);
    var time = new Date(parseInt((timePart + 1420070400000n).toString()));
    var serverPart = "";
    if (document.querySelector(".blockselect.selected").innerText == "Сервер") {
      var widgetData = await fetch(`https://discord.com/api/v10/guilds/${inputId.value}/widget.json`).then(res => res.json());
      if (widgetData.code == 10004) {
        serverPart = `<br><font color="red">Этот сервер был удалён.</font>`;
      }
      if (widgetData.code == 50004) {
        serverPart = `<br><font color="lime">Этот сервер существует.</font><br>У этого сервера <font color="red">отключён</font> виджет.`;
      }
      if (widgetData.id) {
        serverPart = `<br><font color="lime">Этот сервер существует.</font><br>У этого сервера <font color="lime">включён</font> виджет.<br>Название сервера: <font color="lime">${widgetData.name}</font><br>Приглашение: ${widgetData.instant_invite ? `<font color="lime">${widgetData.instant_invite}</font>` : `<font color="red">Неизвестно</font>`}`;
      }
    }
    if (document.querySelector(".blockselect.selected").innerText == "Неизвестно") {
      var widgetData = await fetch(`https://discord.com/api/v10/guilds/${inputId.value}/widget.json`).then(res => res.json());
      if (widgetData.code == 10004) {
        serverPart = `<br><font color="red">Это не является сервером, или он был удалён.</font>`;
      }
      if (widgetData.code == 50004) {
        serverPart = `<br><font color="lime">Это сервер, который существует на данный момент.</font><br>У этого сервера <font color="red">отключён</font> виджет.`;
      }
      if (widgetData.id) {
        serverPart = `<br><font color="lime">Это сервер, который существует на данный момент.</font><br>У этого сервера <font color="lime">включён</font> виджет.<br>Название сервера: <font color="lime">${widgetData.name}</font><br>Приглашение: ${widgetData.instant_invite ? `<font color="lime">${widgetData.instant_invite}</font>` : `<font color="red">Неизвестно</font>`}`;
      }
    }
    outputData.innerHTML = `Дата создания: <font color="lime">${time.toLocaleString("ru-RU")}</font><br>ID потока: <font color="lime">${workerId}</font><br>ID процесса: <font color="lime">${processId}</font><br>Этот ID был создан <font color="lime">${incrementPart}</font> по счёту у этого процесса.${serverPart}`;
  }
})