({
  "content": `
    <input type="file" id="file" style="display: none;" data-change="fileChange">
    <div id="content">
      <div id="upload" class="upload" data-call="inputClick" data-dragenter="preventDefault" data-dragover="preventDefault" data-dragleave="preventDefault" data-drop="fileDrop">
        <i class="fa-solid fa-plus"></i>
      </div>
      <br />
      <br />
      <button data-call="upload">Загрузить</button>
    </div>
  `,
  "fileChange": ({ file, upload }) => {
    upload.innerText = file.files[0].name;
  },
  "inputClick": ({ file }) => {
    file.click();
  },
  "preventDefault": (_, event) => {
    event.preventDefault();
    event.stopPropagation();
  },
  "fileDrop": ({ file, upload }, event) => {
    event.preventDefault();
    event.stopPropagation();
    file.files = event.dataTransfer.files;
    currentElement.fileChange({ file, upload });
  },
  "renderSize": bytes => {
    var currentNum = bytes;
    var currentType = "B";
    var types = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB", "RB", "QB"];
    var currentIndex = -1;
    while (currentNum > 1023 && currentIndex < types.length - 1) {
      currentNum /= 1024;
      currentType = types[++currentIndex];
    }
    return `${currentNum.toFixed(2)} ${currentType}`;
  },
  "upload": ({ file, content }) => {
    var fileObject = file.files[0];
    if (!fileObject) {
      return;
    }
    content.innerHTML = `<h2 style="color: white;"><i class="fa-solid fa-file"></i> ${fileObject.name}</h2><h3 style="color: white;">${currentElement.renderSize(fileObject.size)}</h3><br /><br /><button data-call="scan">Сканировать</button>`;
    updateCalls();
  },
  "types": [{
    "name": "ICO",
    "magic": parseHEX("00 00 01 00"),
    "offset": 0
  }, {
    "name": "GIF",
    "magic": parseHEX("47 49 46 38 37 61"),
    "offset": 0
  }, {
    "name": "GIF",
    "magic": parseHEX("47 49 46 38 39 61"),
    "offset": 0
  }, {
    "name": "JPEG",
    "magic": parseHEX("FF D8 FF DB"),
    "offset": 0
  }, {
    "name": "JPEG",
    "magic": parseHEX("FF D8 FF EE"),
    "offset": 0
  }, {
    "name": "JPEG",
    "magic": parseHEX("FF D8 FF E1 ?? ?? 45 78 69 66 00 00"),
    "offset": 0
  }, {
    "name": "JPEG",
    "magic": parseHEX("FF D8 FF E0"),
    "offset": 0
  }, {
    "name": "EXE / DLL / SYS / EFI",
    "magic": parseHEX("4D 5A"),
    "offset": 0
  }, {
    "name": "EXE",
    "magic": parseHEX("5A 4D"),
    "offset": 0
  }, {
    "name": "ZIP / APK / DOCX / EPUB / IPA / JAR / MSIX / PPTX / XLSX / WHL",
    "magic": parseHEX("50 4B 03 04"),
    "offset": 0
  }, {
    "name": "ZIP / APK / DOCX / EPUB / IPA / JAR / MSIX / PPTX / XLSX / WHL",
    "magic": parseHEX("50 4B 05 06"),
    "offset": 0
  }, {
    "name": "ZIP / APK / DOCX / EPUB / IPA / JAR / MSIX / PPTX / XLSX / WHL",
    "magic": parseHEX("50 4B 07 08"),
    "offset": 0
  }, {
    "name": "RAR v1.50 (архив)",
    "magic": parseHEX("52 61 72 21 1A 07 00"),
    "offset": 0
  }, {
    "name": "RAR v5.00 (архив)",
    "magic": parseHEX("52 61 72 21 1A 07 01 00"),
    "offset": 0
  }, {
    "name": "ELF",
    "magic": parseHEX("7F 45 4C 46"),
    "offset": 0
  }, {
    "name": "PNG (изображение)",
    "magic": parseHEX("89 50 4E 47 0D 0A 1A 0A"),
    "offset": 0
  }, {
    "name": "CLASS (Java класс)",
    "magic": parseHEX("CA FE BA BE"),
    "offset": 0
  }, {
    "name": "Adobe PostScript",
    "magic": parseHEX("25 21 50 53"),
    "offset": 0
  }, {
    "name": "PDF (документ)",
    "magic": parseHEX("25 50 44 46 2D"),
    "offset": 0
  }, {
    "name": "OGG (музыка)",
    "magic": parseHEX("4F 67 67 53"),
    "offset": 0
  }, {
    "name": "PSD (Adobe Photoshop документ)",
    "magic": parseHEX("38 42 50 53"),
    "offset": 0
  }, {
    "name": "WAV (музыка)",
    "magic": parseHEX("52 49 46 46 ?? ?? ?? ?? 57 41 56 45"),
    "offset": 0
  }, {
    "name": "AVI",
    "magic": parseHEX("52 49 46 46 ?? ?? ?? ?? 41 56 49 20"),
    "offset": 0
  }, {
    "name": "MP3 (музыка)",
    "magic": parseHEX("FF FB"),
    "offset": 0
  }, {
    "name": "MP3 (музыка)",
    "magic": parseHEX("FF F3"),
    "offset": 0
  }, {
    "name": "MP3 (музыка)",
    "magic": parseHEX("FF F2"),
    "offset": 0
  }, {
    "name": "MP3 (музыка)",
    "magic": parseHEX("49 44 33"),
    "offset": 0
  }, {
    "name": "BMP (изоббажение)",
    "magic": parseHEX("42 4D"),
    "offset": 0
  }, {
    "name": "ISO (образ диска)",
    "magic": parseHEX("43 44 30 30 31"),
    "offset": 0
  }, {
    "name": "DOC / XLS / PPT / MSI",
    "magic": parseHEX("D0 CF 11 E0 A1 B1 1A E1"),
    "offset": 0
  }, {
    "name": "VMDK",
    "magic": parseHEX("4B 44 4D"),
    "offset": 0
  }, {
    "name": "VMDK (описание виртуального разделённого диска VMWare 4)",
    "magic": parseHEX("23 20 44 69 73 6B 20 44 65 73 63 72 69 70 74 6F"),
    "offset": 0
  }, {
    "name": "CRX (расширение Google Chrome)",
    "magic": parseHEX("43 72 32 34"),
    "offset": 0
  }, {
    "name": "XAR (архив)",
    "magic": parseHEX("78 61 72 21"),
    "offset": 0
  }, {
    "name": "TAR (архив)",
    "magic": parseHEX("75 73 74 61 72 00 30 30"),
    "offset": 257
  }, {
    "name": "TAR (архив)",
    "magic": parseHEX("75 73 74 61 72 20 20 00"),
    "offset": 257
  }, {
    "name": "7Z (архив)",
    "magic": parseHEX("37 7A BC AF 27 1C"),
    "offset": 0
  }, {
    "name": "GZ (сжатие)",
    "magic": parseHEX("1F 8B"),
    "offset": 0
  }, {
    "name": "XZ (архив)",
    "magic": parseHEX("FD 37 7A 58 5A 00"),
    "offset": 0
  }, {
    "name": "LZ4 (архив)",
    "magic": parseHEX("04 22 4D 18"),
    "offset": 0
  }, {
    "name": "CAB (кабинет Microsoft)",
    "magic": parseHEX("04 22 4D 18"),
    "offset": 0
  }, {
    "name": "MKV / WEBM (видео)",
    "magic": parseHEX("1A 45 DF A3"),
    "offset": 0
  }, {
    "name": "DJVU (книга)",
    "magic": parseHEX("41 54 26 54 46 4F 52 4D ?? ?? ?? ?? 44 4A 56"),
    "offset": 0
  }, {
    "name": "CRT / PEM (сертификат)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 2D 2D 2D 2D 2D"),
    "offset": 0
  }, {
    "name": "CSR / PEM (запрос на сертификат)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 20 52 45 51 55 45 53 54 2D 2D 2D 2D 2D"),
    "offset": 0
  }, {
    "name": "KEY / PEM (приватный ключ)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0
  }, {
    "name": "KEY / PEM (приватный ключ DSA)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 44 53 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0
  }, {
    "name": "KEY / PEM (приватный ключ RSA)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 52 53 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0
  }, {
    "name": "PPK (приватный ключ Putty v2)",
    "magic": parseHEX("50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 32 3A"),
    "offset": 0
  }, {
    "name": "PPK (приватный ключ Putty v3)",
    "magic": parseHEX("50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 33 3A"),
    "offset": 0
  }, {
    "name": "Приватный ключ OpenSSH",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 4F 50 45 4E 53 53 48 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0
  }, {
    "name": "PUB (публичный ключ OpenSSH)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 53 53 48 32 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0
  }, {
    "name": "WOFF (шрифт v1.0)",
    "magic": parseHEX("77 4F 46 46"),
    "offset": 0
  }, {
    "name": "WOFF (шрифт v2.0)",
    "magic": parseHEX("77 4F 46 32"),
    "offset": 0
  }, {
    "name": "XML (UTF-8)",
    "magic": parseHEX("3C 3F 78 6D 6C 20"),
    "offset": 0
  }, {
    "name": "XML (UTF-16LE)",
    "magic": parseHEX("3C 00 3F 00 78 00 6D 00 6C 00 20"),
    "offset": 0
  }, {
    "name": "XML (UTF-16BE)",
    "magic": parseHEX("00 3C 00 3F 00 78 00 6D 00 6C 00 20"),
    "offset": 0
  }, {
    "name": "XML (UTF-32LE)",
    "magic": parseHEX("3C 00 00 00 3F 00 00 00 78 00 00 00 6D 00 00 00 6C 00 00 00 20 00 00 00"),
    "offset": 0
  }, {
    "name": "XML (UTF-32BE)",
    "magic": parseHEX("00 00 00 3C 00 00 00 3F 00 00 00 78 00 00 00 6D 00 00 00 6C 00 00 00 20"),
    "offset": 0
  }, {
    "name": "XML (EBCDIC)",
    "magic": parseHEX("4C 6F A7 94 93 40"),
    "offset": 0
  }, {
    "name": "WASM (WebAssembly)",
    "magic": parseHEX("00 61 73 6D"),
    "offset": 0
  }, {
    "name": "SWF (Adobe Flash)",
    "magic": parseHEX("43 57 53"),
    "offset": 0
  }, {
    "name": "SWF (Adobe Flash)",
    "magic": parseHEX("46 57 53"),
    "offset": 0
  }, {
    "name": "DEB (Linux)",
    "magic": parseHEX("21 3C 61 72 63 68 3E 0A"),
    "offset": 0
  }, {
    "name": "WEBP (изображение)",
    "magic": parseHEX("52 49 46 46 ?? ?? ?? ?? 57 45 42 50"),
    "offset": 0
  }, {
    "name": "U-Boot",
    "magic": parseHEX("27 05 19 56"),
    "offset": 0
  }, {
    "name": "RTF (документ)",
    "magic": parseHEX("7B 5C 72 74 66 31"),
    "offset": 0
  }, {
    "name": "MP4 (видео)",
    "magic": parseHEX("66 74 79 70 69 73 6F 6D"),
    "offset": 4
  }, {
    "name": "MP4 (видео)",
    "magic": parseHEX("66 74 79 70 4D 53 4E 56"),
    "offset": 4
  }, {
    "name": "ZLIB (без сжатия, без словаря)",
    "magic": parseHEX("78 01"),
    "offset": 0
  }, {
    "name": "ZLIB (минимальное сжатие, без словаря)",
    "magic": parseHEX("78 5E"),
    "offset": 0
  }, {
    "name": "ZLIB (стандартное сжатие, без словаря)",
    "magic": parseHEX("78 9C"),
    "offset": 0
  }, {
    "name": "ZLIB (максимальное сжатие, без словаря)",
    "magic": parseHEX("78 DA"),
    "offset": 0
  }, {
    "name": "ZLIB (без сжатия, с словарём)",
    "magic": parseHEX("78 20"),
    "offset": 0
  }, {
    "name": "ZLIB (минимальное сжатие, с словарём)",
    "magic": parseHEX("78 7D"),
    "offset": 0
  }, {
    "name": "ZLIB (стандартное сжатие, с словарём)",
    "magic": parseHEX("78 BB"),
    "offset": 0
  }, {
    "name": "ZLIB (максимальное сжатие, с словарём)",
    "magic": parseHEX("78 F9"),
    "offset": 0
  }, {
    "name": "ALIAS (символическая ссылка MacOS)",
    "magic": parseHEX("62 6F 6F 6B 00 00 00 00 6D 61 72 6B 00 00 00 00"),
    "offset": 0
  }, {
    "name": "Закладка MacOS",
    "magic": parseHEX("62 6F 6F 6B"),
    "offset": 0
  }, {
    "name": "PGP",
    "magic": parseHEX("85 ?? ?? 03"),
    "offset": 0
  }, {
    "name": "ZST (сжатие)",
    "magic": parseHEX("28 B5 2F FD"),
    "offset": 0
  }, {
    "name": "VDI (виртуальный жёсткий диск VirtualBox)",
    "magic": parseHEX("3C 3C 3C 20 4F 72 61 63 6C 65 20 56 4D 20 56 69 72 74 75 61 6C 42 6F 78 20 44 69 73 6B 20 49 6D 61 67 65 20 3E 3E 3E"),
    "offset": 0
  }, {
    "name": "VHD (виртуальный жёсткий диск Windows)",
    "magic": parseHEX("63 6F 6E 65 63 74 69 78"),
    "offset": 0
  }, {
    "name": "VHDX (виртуальный жёсткий диск Windows 8)",
    "magic": parseHEX("76 68 64 78 66 69 6C 65"),
    "offset": 0
  }, {
    "name": "BLEND (проект Blender)",
    "magic": parseHEX("42 4C 45 4E 44 45 52"),
    "offset": 0
  }, {
    "name": "TTF (шрифт)",
    "magic": parseHEX("00 01 00 00 00"),
    "offset": 0
  }, {
    "name": "OTF (шрифт)",
    "magic": parseHEX("4F 54 54 4F"),
    "offset": 0
  }, {
    "name": "WIM / ESD (архив образа Windows)",
    "magic": parseHEX("4F 54 54 4F"),
    "offset": 0
  }, {
    "name": "ACCDB (база данных Microsoft Access 2007)",
    "magic": parseHEX("00 01 00 00 53 74 61 6E 64 61 72 64 20 41 43 45 20 44 42"),
    "offset": 0
  }, {
    "name": "MDB (база данных Microsoft Access)",
    "magic": parseHEX("00 01 00 00 53 74 61 6E 64 61 72 64 20 4A 65 74 20 44 42"),
    "offset": 0
  }, {
    "name": "HDR",
    "magic": parseHEX("23 3F 52 41 44 49 41 4E 43 45 0A"),
    "offset": 0
  }, {
    "name": "VBE (зашифрованный VBScript)",
    "magic": parseHEX("23 40 7E 5E"),
    "offset": 0
  }, {
    "name": "M3U / M3U8 (плейлист)",
    "magic": parseHEX("23 45 58 54 4D 33 55"),
    "offset": 0
  }, {
    "name": "HDR",
    "magic": parseHEX("6E 69 31 00"),
    "offset": 344
  }, {
    "name": "База данных DuckDB",
    "magic": parseHEX("44 55 43 4B"),
    "offset": 8
  }],
  "scan": ({ file, content }) => {
    var fileObject = file.files[0];
    var fr = new FileReader;
    var matched = [];
    fr.onload = () => {
      if (fr.readyState == 2) {
        var result = new Uint8Array(fr.result);
        console.log(result);
        for (var type of currentElement.types) {
          if (findBytePattern(result, type.magic) != type.offset) {
            continue;
          }
          matched.push(type.name);
        }
        if (!matched.length) {
          matched = ["Неизвестный файл"];
        }
        content.innerHTML = `<h2 style="color: white;"><i class="fa-solid fa-file"></i> ${fileObject.name}</h2><h3 style="color: white;">${currentElement.renderSize(fileObject.size)}</h3><h3 style="color: white;">${matched.join(", ")}</h3>`;
      }
    };
    fr.readAsArrayBuffer(fileObject.slice(0, 1024));
  }
})