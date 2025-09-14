({
  "content": `
    <div>
      <h2 style="color: white;">Установка Outline (для ARM)</h2>
      <textarea placeholder="Команда" readonly>sudo SB_IMAGE="kugaevsky/outline-server-arm64" bash -c "$(wget -qO- https://raw.githubusercontent.com/kugaevsky/outline-server-arm64/master/src/server_manager/install_scripts/install_server.sh)"</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
    <div>
      <h2 style="color: white;">Исправление SSL (для NodeJS v17+)</h2>
      <textarea placeholder="Команда" readonly>export NODE_OPTIONS=--openssl-legacy-provider</textarea>
      <br><br>
      <button data-call="copy">Копировать</button>
    </div>
    <br />
    <br />
  `,
  "copy": (_, event) => {
    navigator.clipboard.writeText(event.target.parentElement.querySelector("textarea").value);
  }
})