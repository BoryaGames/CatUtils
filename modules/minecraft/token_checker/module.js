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
    var tokenData = token.value.match(/^([a-zA-Z0-9\-_]+)\.([a-zA-Z0-9\-_]+)\.([a-zA-Z0-9\-_]+)$/);
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

    // From https://api.minecraftservices.com/publickeys
    const minecraftPublicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4S4G8fJJw4hLRME8zM2aBqaQRqYs0TlU8N+sZl0MUgtyFw0KAXnzbOPH7yu6qbqsGYVKF/D+fUg+49PhFmxEsylvmj/yeRwdp3yFGME/BVfL06zFmAw+rGaxqubcswzIO8ByUtjQOmlnrzj4zvhNSYJmwNbTIKrKNlSHYvYZbUDRquH9yMDOKnvGAMMDGttFrM300mVznRgaTEzU9aPqMvj0YxtxUcGIQTar0TBQa7NzEAr59u5VVx5s6naS6QVBrMc6e32f38enVkNFZQT87KlCb2B6ziPmbaRzWWs4qcHsHz8BUCKplo5iu/ePtwaa5AaVT27Lnv+KzS46eyf1CwIDAQAB";

    function decodeBinary(b64) {
      var bin = atob(b64.replace(/-/g, "+").replace(/_/g, "/"));
      var bytes = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) {
        bytes[i] = bin.charCodeAt(i);
      }
      return bytes.buffer;
    }
    var status = "";
    var data = (new TextEncoder()).encode(`${tokenData[1]}.${tokenData[2]}`);
    var sig = decodeBinary(tokenData[3]);
    var key = await crypto.subtle.importKey("spki", decodeBinary(minecraftPublicKey), {
      "name": "RSASSA-PKCS1-v1_5",
      "hash": "SHA-256"
    }, false, ["verify"]);
    if (!await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, sig, data)) {
      status = `Этот токен <font color="red">не настоящий</font>.`;
    } else if (Date.now() > (metadata.exp * 1000)) {
      status = `Этот токен <font color="red">устарел</font>.`;
    } else if (Date.now() < (metadata.nbf * 1000)) {
      status = `На устройстве <font color="yellow">неправильное время</font>, невозможно проверить токен.`;
    } else {
      status = `Этот токен <font color="lime">активен</font>.`;
    }
    outputData.innerHTML = `Это выглядит как <font color="lime">возможный</font> токен доступа Minecraft.<br />Игрок: <font color="lime">${mcProfile.name}</font> (<font color="lime">${mcProfile.id}</font>)<br />Платформа: <font color="lime">${metadata.platform}</font><br />Токен сгенерирован: <font color="lime">${(new Date(metadata.iat * 1000)).toLocaleString()}</font><br />Токен истекает: <font color="lime">${(new Date(metadata.exp * 1000)).toLocaleString()}</font><br />` + status;
  }
})
