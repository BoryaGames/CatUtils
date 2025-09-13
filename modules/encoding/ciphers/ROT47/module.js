({
  "content": `
    <textarea type="text" placeholder="Вход" id="inputText"></textarea>
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br><br>
    <textarea type="text" placeholder="Выход" id="outputText" readonly></textarea>
    <br><br><br><br>
    <button data-call="code">Шифровать/Расшифровать</button>
  `,
  "code": ({ inputText, outputText }) => {
    var s = [];
    for (var i = 0; i < inputText.value.length; i++) {
      var j = inputText.value.charCodeAt(i);
      if ((j >= 33) && (j <= 126)) {
        s[i] = String.fromCharCode(33 + ((j + 14) % 94));
      } else {
        s[i] = String.fromCharCode(j);
      }
    }
    outputText.value = s.join("");
  }
})