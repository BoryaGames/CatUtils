({
  "content": `
    <input type="text" placeholder="Никнейм или UUID..." id="player">
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br>
    <p id="outputData" style="color: white;">(Информации нет.)</p>
    <br><br><br>
    <button data-call="load">Загрузить</button>
  `,
  "load": async ({ player, outputData }) => {
    try {
      var result = await fetch(`https://playerdb.co/api/player/minecraft/${player.value}`, {
        "headers": {
          "User-Agent": "CatUtils (https://catutils.topcatto.xyz, v0.0.1)"
        }
      }).then(res => res.body());
    } catch {
      outputData.innerHTML = `<font color="red">Не удалось</font> получить информацию.`;
    }
    if (result.success) {
      outputData.innerHTML = `Игрок <font color="lime">${result.data.player.username}</font> с UUID <font color="lime"><font color="lime">${result.data.player.id}</font> существует.`;
      return;
    }
    outputData.innerHTML = `Игрока с таким никнеймом или UUID <font color="red">не существует</font> (скорее всего, такой никнейм свободен).`;
  }
})
