({
  "content": `
    <input type="text" placeholder="URL вебхука" id="url">
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br>
    <p id="outputData" style="color: white;">(Информации нет.)</p>
    <br><br><br>
    <button data-call="check">Проверить</button>
    <button data-call="delete">Удалить</button>
  `,
  "check": async ({ url, outputData }) => {
    if (!url.value.match(/^https?:\/\/discord\.com\/api(?:\/v\d+)?\/webhooks\/(\d+)\/([a-z0-9_-]+)$/i)) {
      outputData.innerHTML = `Это <font color="red">не выглядит</font> как верная ссылка на вебхук Discord.`;
      return;
    }
    var result = await fetch(url.value);
    if (result.status == 200) {
      var data = await result.json();
      outputData.innerHTML = `Вебхук <font color="lime">${data.name}</font> существует.`;
      return;
    }
    if (result.status == 401) {
      outputData.innerHTML = `Вебхук <font color="lime">существует</font>, но ссылка <font color="red">неверна</font>.`;
      return;
    }
    if (result.status == 404) {
      outputData.innerHTML = `Вебхук <font color="red">не существует</font>.`;
      return;
    }
    if (result.status == 429) {
      outputData.innerHTML = `Вы получили <font color="red">рейт-лимит</font>.`;
      return;
    }
    outputData.innerHTML = `Вы получили <font color="red">неизвестную ошибку</font>.`;
  },
  "delete": async ({ url, outputData }) => {
    if (!url.value.match(/^https?:\/\/discord\.com\/api(?:\/v\d+)?\/webhooks\/(\d+)\/([a-z0-9_-]+)$/i)) {
      outputData.innerHTML = `Это <font color="red">не выглядит</font> как верная ссылка на вебхук Discord.`;
      return;
    }
    var result = await fetch(url.value, {
      "method": "DELETE"
    });
    if (result.status == 204) {
      outputData.innerHTML = `Вебхук <font color="lime">удалён успешно</font>.`;
      return;
    }
    if (result.status == 401) {
      outputData.innerHTML = `Ссылка <font color="red">неверна</font>, поэтому вебхук не был удалён.`;
      return;
    }
    if (result.status == 404) {
      outputData.innerHTML = `Вебхук <font color="red">не существует</font> или уже был удалён.`;
      return;
    }
    if (result.status == 429) {
      outputData.innerHTML = `Вы получили <font color="red">рейт-лимит</font>.`;
      return;
    }
    outputData.innerHTML = `Вы получили <font color="red">неизвестную ошибку</font>.`;
  }
})
