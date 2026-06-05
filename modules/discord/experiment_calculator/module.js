({
  "content": `
    <input type="text" placeholder="Эксперимент..." id="experiment" />
    <br /><br />
    <input type="text" placeholder="ID пользователя..." id="user" />
    <br /><br />
    <img src="download.png" width="32px" height="32px">
    <br>
    <p id="outputData" style="color: white;">(Информации нет.)</p>
    <br><br><br>
    <button data-call="calculate">Посчитать</button>
  `,
  "calculate": ({ experiment, user, outputData }) => {
    var currentHash = 0;
    var textEncoder = new TextEncoder();
    var keyBytes = textEncoder.encode(`${experiment.value}:${user.value}`);
    var numBytes = keyBytes.length;
    var numBlocks = Math.floor(numBytes / 4);
    var dataView = new DataView(keyBytes.buffer, keyBytes.byteOffset);
    for (var i = 0; i < numBlocks; i++) {
      const blockOffset = i * 4;
      let k1 = dataView.getUint32(blockOffset, true);
      k1 = Math.imul(k1, 0xcc9e2d51);
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = Math.imul(k1, 0x1b873593);
      currentHash ^= k1;
      currentHash = (currentHash << 13) | (currentHash >>> 19);
      currentHash = Math.imul(currentHash, 5) + 0xe6546b64;
      currentHash >>>= 0;
    }
    var k1 = 0;
    var tailIndex = numBlocks * 4;
    switch(numBytes & 3) {
      case 3:
        k1 ^= keyBytes[tailIndex + 2] << 16;
      case 2:
        k1 ^= keyBytes[tailIndex + 1] << 8;
      case 1:
        k1 ^= keyBytes[tailIndex];
        k1 = Math.imul(k1, 0xcc9e2d51);
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = Math.imul(k1, 0x1b873593);
        currentHash ^= k1;
    }
    currentHash ^= numBytes;
    currentHash ^= currentHash >>> 16;
    currentHash = Math.imul(currentHash, 0x85ebca6b);
    currentHash ^= currentHash >>> 13;
    currentHash = Math.imul(currentHash, 0xc2b2ae35);
    currentHash ^= currentHash >>> 16;
    currentHash >>>= 0;
    outputData.innerHTML = `<font color="lime">${currentHash % 10000}</font>`;
  }
})
