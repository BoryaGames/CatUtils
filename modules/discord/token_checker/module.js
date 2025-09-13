({
  "content": `
    <input type="text" placeholder="Токен" id="token">
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br>
    <p id="outputData" style="color: white;">(Информации нет.)</p>
    <br><br><br>
    <button data-call="scan">Проверить</button>
  `,
  "scan": async ({ token, outputData }) => {
    if (!token.value.match(/^(mfa\.[a-z0-9_-]{20,})$|^([a-z0-9_-]{23,28}\.[a-z0-9_-]{6,7}\.[a-z0-9_-]{27,})$/i)) {
      outputData.innerHTML = `Это выглядит как <font color="red">невозможный</font> токен.`;
      return;
    }
    if (token.value.startsWith("mfa.")) {
      outputData.innerHTML = `Это выглядит как <font color="lime">возможный</font> токен <font color="red">неизвестного</font> пользователя.`;
      return;
    }
    var parts = token.value.split(".");
    try {
      var id = decodeURIComponent(escape(atob(parts[0])));
    } catch {
      outputData.innerHTML = `Это выглядит как <font color="red">невозможный</font> токен.`;
      return;
    }
    if (!id.match(/^\d+$/)) {
      outputData.innerHTML = `Это выглядит как <font color="red">невозможный</font> токен.`;
      return;
    }
    id = BigInt(id);
    if (id.toString(2).length < 23) {
      outputData.innerHTML = `Это выглядит как <font color="red">невозможный</font> токен.`;
      return;
    }
    if (parseInt(((id >> 22n) + 1420070400000n).toString()) > Date.now()) {
      outputData.innerHTML = `Это выглядит как <font color="red">несуществующий</font> на данный момент токен.`;
      return;
    }
    var createdTimestamp = (decodeTokenTime(parts[1]) + 1293840000) *1e3;
    // Уже не работает с новым форматом
    /*if (createdTimestamp > Date.now()) {
      outputData.innerHTML = `Это выглядит как <font color="red">несуществующий</font> на данный момент токен пользователя <font color="lime">${id.toString()}</font>.`;
      return;
    }*/
    outputData.innerHTML = `Это выглядит как <font color="lime">возможный</font> токен пользователя <font color="lime">${id.toString()}</font>.<br>Токен был сгенерирован <font color="lime">${(new Date(createdTimestamp)).toLocaleString("ru-RU")}</font> (возможно не точно).`;
  }
})