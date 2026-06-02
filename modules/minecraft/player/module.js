({
  "content": `
    <input type="text" placeholder="Никнейм или UUID..." id="player">
    <br><br>
    <img src="download.png" width="32px" height="32px">
    <br>
    <p id="outputData" style="color: white;">(Информации нет.)</p>
    <canvas id="skin" width="300px" height="400px"></canvas>
    <br><br><br>
    <button data-call="load">Загрузить</button>
  `,
  "load": async ({ player, outputData, skin }) => {
    outputData.innerHTML = `<font color="yellow">Загрузка...</font>`;
    try {
      var result = await fetch(`https://playerdb.co/api/player/minecraft/${player.value}`, {
        "headers": {
          "User-Agent": "CatUtils (https://catutils.topcatto.xyz, v0.0.1)"
        }
      }).then(res => res.json());
    } catch {
      outputData.innerHTML = `<font color="red">Не удалось</font> получить информацию.`;
      return;
    }
    if (result.success) {
      outputData.innerHTML = `Игрок <font color="lime">${result.data.player.username}</font> с UUID <font color="lime">${result.data.player.id}</font> существует.`;
      return new skinview3d.SkinViewer({
		    "canvas": skin,
		    "width": 300,
		    "height": 400,
		    "skin": result.data.player.skin_texture
	    });
    }
    if (player.value.match(/^[0-9a-f]{8}-?[0-9a-f]{4}-?[0-5][0-9a-f]{3}-?[089ab][0-9a-f]{3}-?[0-9a-f]{12}$/i)) {
      outputData.innerHTML = `Игрока с таким UUID <font color="red">не существует</font>.`;
    } else {
      outputData.innerHTML = `Игрока с таким никнеймом <font color="red">не существует</font> (скорее всего, такой никнейм свободен).`;
    }
  }
})
