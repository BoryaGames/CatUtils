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
      if (j >= 65 && j <= 90) {
        s[i] = String.fromCharCode((j - 65 + 13) % 26 + 65);
      } else if (j >= 97 && j <= 122) {
        s[i] = String.fromCharCode((j - 97 + 13) % 26 + 97);
      } else {
        s[i] = String.fromCharCode(j);
      }
    }
    outputText.value = s.join("");
  }
})