({
  "content": `
    <textarea type="text" placeholder="Вход" id="inputText"></textarea>
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br><br>
    <textarea type="text" placeholder="Выход" id="outputText" readonly></textarea>
    <br><br><br><br>
    <button data-call="hash">Хэшировать</button>
  `,
  "hash": ({ inputText, outputText }) => {
    outputText.value = CryptoJS.SHA384(inputText.value).toString(CryptoJS.enc.Hex);
  }
})