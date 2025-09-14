({
  "content": `
    <button data-call="getPermission">Получить разрешение</button>
    <br><br><br>
    <h3 style="color: white;">Сканирование устройств...</h3>
    <div id="ports"></div>
    <br><br>
    <select id="baudRate">
      <option value="300">300</option>
      <option value="600">600</option>
      <option value="750">750</option>
      <option value="1200">1200</option>
      <option value="2400">2400</option>
      <option value="4800">4800</option>
      <option value="9600" selected>9600</option>
      <option value="19200">19200</option>
      <option value="31250">31250</option>
      <option value="38400">38400</option>
      <option value="57600">57600</option>
      <option value="74880">74880</option>
      <option value="115200">115200</option>
      <option value="230400">230400</option>
      <option value="250000">250000</option>
      <option value="460800">460800</option>
      <option value="500000">500000</option>
      <option value="1000000">1000000</option>
      <option value="2000000">2000000</option>
    </select>
    <br><br><br><br>
    <code class="console" id="serial" data-call="setActive">
      <span id="contents"></span>
      <span id="cursor" class="cursor"></span>
    </code>
    <br><br>
    <button data-call="connect">Подключиться</button>
  `,
  "_interval": async ({ ports }) => {
    var devices = (await navigator.serial.getPorts()).map(device => device.getInfo());
    if (currentVariables.devices != JSON.stringify(devices)) {
      currentVariables.devices = JSON.stringify(devices);
      function getName({ usbVendorId, usbProductId }) {
        if (usbVendorId == 9025) {
          if (usbProductId == 1) {                  
            return "Плата Arduino Uno на основе AtMega";
          }
          if (usbProductId == 16) {                  
            return "Плата Arduino Mega 2560 на основе AtMega";
          }
          if (usbProductId == 62) {                  
            return "Плата Arduino Due на основе AtMega";
          }
          if (usbProductId == 63) {                  
            return "Плата Arduino Mega на основе AtMega";
          }
          if (usbProductId == 66) {                  
            return "Плата Arduino Mega 2560 R3 на основе AtMega";
          }
          if (usbProductId == 67) {                  
            return "Плата Arduino Uno R3 на основе AtMega";
          }
          if (usbProductId == 32822) {                  
            return "Плата Arduino Leonardo на основе AtMega";
          }
        }
        if (usbVendorId == 1659 && usbProductId == 8963) {
          return "Плата Arduino/ESP32/Milk-V через кабель PL2303";
        }
        if (usbVendorId == 6790) {
          return "Плата Arduino/ESP32 на основе CH340G";
        }
        return "Неизвестное устройство";
      }
      ports.innerHTML = devices.map((device, index) => `<div class="blockselect port" data-index="${index}" data-call="setPort">${getName(device)}</div>`).join("<br><br>");
      Array.from(document.querySelectorAll(".port")).filter(btn => btn.dataset.call).forEach(btn => {
        btn.addEventListener("click", event => {
          currentElement[btn.dataset.call](getProxy(), event);
        });
      });
    }
  },
  "setPort": (_, event) => {
    var selected = document.querySelector(".blockselect.selected");
    if (selected) {
      selected.classList.remove("selected");
    }
    event.target.classList.add("selected");
  },
  "getPermission": () => {
    navigator.serial.requestPort({
      "filters": [{
        "usbVendorId": 9025
      }, {
        "usbVendorId": 6790
      }, {
        "usbVendorId": 1659
      }]
    }).catch(() => {});
  },
  "setActive": ({ cursor }) => {
    cursor.classList.add("active");
  },
  "_mousedown": ({ serial, contents, cursor }, event) => {
    if (![serial, contents, cursor].includes(event.target)) {
      cursor.classList.remove("active");
    }
  },
  "_keypress": async ({ contents, cursor }, event) => {
    if (!currentVariables.device || !cursor.classList.contains("active")) {
      return;
    }
    var encoder = new TextEncoder();
    var writer = currentVariables.device.writable.getWriter();
    var key = event.key;
    if (key == "Enter") {
      key = "\n";
    }
    contents.innerText += key;
    cursor.style.right = contents.innerText.split("\n").at(-1).length ? "8px" : "0";
    await writer.write(encoder.encode(key));
    writer.releaseLock();
  },
  "connect": async ({ baudRate, contents, cursor }) => {
    var selected = document.querySelector(".blockselect.selected");
    if (!selected) {
      return;
    }
    var devices = (await navigator.serial.getPorts());
    var device = devices[parseInt(selected.dataset.index)];
    try {
      await device.open({
        "baudRate": parseInt(baudRate.value)
      });
    } catch {
      return;
    }
    currentVariables.device = device;
    var decoder = new TextDecoder();
    while(device.readable) {
      var reader = device.readable.getReader();
      try {
        while(!0) {
          var { value, done } = await reader.read();
          if (done) {
            break;
          }
          contents.innerText += decoder.decode(value);
          cursor.style.right = contents.innerText.split("\n").at(-1).length ? "8px" : "0";
        }
      } catch(e) {
        console.error(e);
      } finally {
        reader.releaseLock();
      }
    }
  }
})