({
  "content": `
    <textarea type="text" placeholder="Вход" id="inputText"></textarea>
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br><br>
    <textarea type="text" placeholder="Выход" id="outputText" readonly></textarea>
    <br><br><br><br>
    <button data-call="normal">Кодировать в обычный формат</button>
    <br><br>
    <button data-call="raw">Кодировать в RAW</button>
  `,
  "normal": ({ inputText, outputText }) => {
    outputText.value = (new TonWeb.utils.Address(inputText.value)).toString(!0, !0, !0);
  },
  "raw": ({ inputText, outputText }) => {
    outputText.value = (new TonWeb.utils.Address(inputText.value)).toString(!1);
  }
})