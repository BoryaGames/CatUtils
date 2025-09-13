({
  "content": `
    <textarea type="text" placeholder="Вход" id="inputText"></textarea>
    <textarea type="text" placeholder="Пароль" id="inputPassword"></textarea>
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br><br>
    <textarea type="text" placeholder="Выход" id="outputText" readonly></textarea>
    <br><br><br><br>
    <button data-call="encode">Шифровать</button>
    <br><br>
    <button data-call="decode">Расшифровать</button>
  `,
  "encode": ({ inputText, inputPassword, outputText }) => {
    outputText.value = CryptoJS.AES.encrypt(inputText.value, inputPassword.value).toString();
  },
  "decode": ({ inputText, outputText }) => {
    outputText.value = CryptoJS.AES.decrypt(inputText.value, inputPassword.value).toString(CryptoJS.enc.Utf8);
  }
})