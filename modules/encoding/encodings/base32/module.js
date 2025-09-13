({
  "content": `
    <textarea type="text" placeholder="Вход" id="inputText"></textarea>
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br><br>
    <textarea type="text" placeholder="Выход" id="outputText" readonly></textarea>
    <br><br><br><br>
    <button data-call="encode">Кодировать</button>
    <br><br>
    <button data-call="decode">Декодировать</button>
  `,
  "encode": ({ inputText, outputText }) => {
    outputText.value = base32.encode(unescape(encodeURIComponent(inputText.value)));
  },
  "decode": ({ inputText, outputText }) => {
    outputText.value = decodeURIComponent(escape(base32.decode(inputText.value)));
  }
})