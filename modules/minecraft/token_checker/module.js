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
    var tokenData = token.value.match(/^([a-zA-Z0-9\-_]+)\.([a-zA-Z0-9\-_]+)\.[a-zA-Z0-9\-_]+$/);
    if (!tokenData) {
      outputData.innerHTML = `Это выглядит как <font color="red">невозможный</font> JWT-токен.`;
      return;
    }
    try {
      var encryption = JSON.parse(decodeURIComponent(escape(atob(tokenData[1]))));
    } catch {
      outputData.innerHTML = `Это выглядит как <font color="red">невозможный</font> JWT-токен.`;
      return;
    }
    if (encryption.kid != "049181") {
      outputData.innerHTML = `Этот JWT-токен <font color="red">не является</font> токеном доступа Minecraft.`;
      return;
    }
    try {
      var metadata = JSON.parse(decodeURIComponent(escape(atob(tokenData[2]))));
    } catch {
      outputData.innerHTML = `Это выглядит как <font color="red">повреждённый</font> токен доступа Minecraft.`;
      return;
    }
    var mcProfile = (metadata.pfd || []).find(profile => profile.type == "mc");
    if (!mcProfile) {
      outputData.innerHTML = `Это выглядит как <font color="red">повреждённый</font> токен доступа Minecraft.`;
      return;
    }
    var status = "";
    if (Date.now() > metadata.exp) {
      status = `Этот токен <font color="red">устарел</font>.`;
    } else if (Date.now() < metadata.nbf) {
      status = `На устройстве <font color="yellow">неправильное время</font>, невозможно проверить токен.`;
    } else {
      status = `Этот токен <font color="lime">активен</font>.`;
    }
    outputData.innerHTML = `Это выглядит как <font color="lime">возможный</font> токен доступа Minecraft.<br />Игрок: <font color="lime">${mcProfile.name}</font> (<font color="lime">${mcProfile.id}</font>)<br />Платформа: ${metadata.platform}<br />Токен сгенерирован: ${(new Date(metadata.iat * 1000)).toLocaleString()}<br />Токен истекает: ${(new Date(metadata.exp * 1000)).toLocaleString()}<br />` + status;
  }
})
