({
  "content": `
    <textarea type="text" placeholder="Вход" id="inputText"></textarea>
    <textarea type="text" placeholder="Пароль" id="inputPassword"></textarea>
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br><br>
    <textarea type="text" placeholder="Выход" id="outputText" readonly></textarea>
    <br><br><br>
    <div class="blockselect selected" data-call="setType">MD5</div>
    <div class="blockselect" data-call="setType">RIPEMD-160</div>
    <div class="blockselect" data-call="setType">SHA1</div>
    <div class="blockselect" data-call="setType">SHA224</div>
    <div class="blockselect" data-call="setType">SHA256</div>
    <div class="blockselect" data-call="setType">SHA384</div>
    <div class="blockselect" data-call="setType">SHA512</div>
    <div class="blockselect" data-call="setType">SHA3</div>
    <br><br><br>
    <button data-call="hash">Хэшировать</button>
  `,
  "setType": (_, event) => {
    document.querySelector(".blockselect.selected").classList.remove("selected");
    event.target.classList.add("selected");
  },
  "hash": ({ inputText, inputPassword, outputText }) => {
    outputText.value = CryptoJS[`Hmac${document.querySelector(".blockselect.selected").innerText.replace("-", "")}`](inputText.value, inputPassword.value).toString(CryptoJS.enc.Hex);
  }
})