({
  "content": `
    <select id="inputRadix">
      <option value="2">2 (Binary)</option>
      <option value="3">3 (Ternary)</option>
      <option value="4">4 (Quaternary)</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8 (Octal)</option>
      <option value="9">9</option>
      <option value="10" selected>10 (Decimal)</option>
      <option value="11">11 (Undecimal)</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16 (HEX)</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
      <option value="32">32</option>
      <option value="33">33</option>
      <option value="34">34</option>
      <option value="35">35</option>
      <option value="36">36</option>
    </select>
    <input type="text" placeholder="Вход" id="inputNumber" required>
    <img id="swap" src="arrow-right.png" width="32px" height="32px" style="position: relative; top: 11px; cursor: pointer;" data-call="swap">
    <select id="outputRadix">
      <option value="2">2 (Binary)</option>
      <option value="3">3 (Ternary)</option>
      <option value="4">4 (Quaternary)</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8 (Octal)</option>
      <option value="9">9</option>
      <option value="10" selected>10 (Decimal)</option>
      <option value="11">11 (Undecimal)</option>
      <option value="12">12</option>
      <option value="13">13</option>
      <option value="14">14</option>
      <option value="15">15</option>
      <option value="16">16 (HEX)</option>
      <option value="17">17</option>
      <option value="18">18</option>
      <option value="19">19</option>
      <option value="20">20</option>
      <option value="21">21</option>
      <option value="22">22</option>
      <option value="23">23</option>
      <option value="24">24</option>
      <option value="25">25</option>
      <option value="26">26</option>
      <option value="27">27</option>
      <option value="28">28</option>
      <option value="29">29</option>
      <option value="30">30</option>
      <option value="31">31</option>
      <option value="32">32</option>
      <option value="33">33</option>
      <option value="34">34</option>
      <option value="35">35</option>
      <option value="36">36</option>
    </select>
    <input type="text" placeholder="Выход" id="outputNumber" readonly>
  `,
  "swap": ({ inputNumber, outputNumber, swap }) => {
    var oldInputNumber = inputNumber.value;
    inputNumber.value = outputNumber.value;
    outputNumber.value = oldInputNumber;
    swap.style.animation = "spin .5s";
    setTimeout(() => {
      swap.style.animation = "";
    }, 500);
  },
  "_update": ({ inputRadix, inputNumber, outputRadix, outputNumber }) => {
    if (!inputNumber.value) {
      outputNumber.value = "";
      return;
    }
    outputNumber.value = parseInt(inputNumber.value, parseInt(inputRadix.value)).toString(parseInt(outputRadix.value));
  }
})