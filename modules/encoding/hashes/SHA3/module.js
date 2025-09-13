({
  "content": `
    <textarea type="text" placeholder="Вход" id="inputText"></textarea>
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br><br>
    <textarea type="text" placeholder="Выход" id="outputText" readonly></textarea>
    <br><br><br>
    <div class="blockselect selected" data-call="setBits">224</div>
    <div class="blockselect" data-call="setBits">256</div>
    <div class="blockselect" data-call="setBits">384</div>
    <div class="blockselect" data-call="setBits">512</div>
    <br><br><br>
    <button data-call="hash">Хэшировать</button>
  `,
  "setBits": (_, event) => {
    document.querySelector(".blockselect.selected").classList.remove("selected");
    event.target.classList.add("selected");
  },
  "hash": ({ inputText, outputText }) => {
    outputText.value = CryptoJS.SHA3(inputText.value, {
      "outputLength": parseInt(document.querySelector(".blockselect.selected").innerText)
    }).toString(CryptoJS.enc.Hex);
  }
})