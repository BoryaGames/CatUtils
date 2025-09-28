({
  "content": `
    <input type="file" id="file" style="display: none;" data-change="fileChange">
    <div id="content">
      <div id="upload" class="upload" data-call="inputClick" data-dragenter="preventDefault" data-dragover="preventDefault" data-dragleave="preventDefault" data-drop="fileDrop">
        <i class="fa-solid fa-plus"></i>
      </div>
      <br />
      <br />
      <button data-call="scan">Сканировать</button>
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
  "types": [{
    "name": "Изображение-иконка Windows (ICO)",
    "magic": parseHEX("00 00 01 00"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Анимированное изображение (GIF)",
    "magic": parseHEX("47 49 46 38 37 61"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Анимированное изображение (GIF)",
    "magic": parseHEX("47 49 46 38 39 61"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Изображение (JPG / JPEG)",
    "magic": parseHEX("FF D8 FF DB"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Изображение (JPG / JPEG)",
    "magic": parseHEX("FF D8 FF EE"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Изображение (JPG / JPEG)",
    "magic": parseHEX("FF D8 FF E1 ?? ?? 45 78 69 66 00 00"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Изображение (JPG / JPEG)",
    "magic": parseHEX("FF D8 FF E0"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (fileObject, result, tabLevel, detailedScan) => {
      return new Promise(res => {
        var view = new DataView(result.buffer);
        // Адрес PE заголовка
        var headerPointer = view.getUint32(60, true);
        var fr = new FileReader();
        fr.onload = () => {
          if (fr.readyState == 2) {
            var headerView = new DataView(fr.result);
            // Архитектура
            var targetArch = headerView.getUint16(4, true);
            var arches = {
              0x184: "Alpha32",
              0x284: "Alpha64",
              0x1D3: "Matsushita AM33",
              0x8664: "Intel x86-64",
              0x1C0: "ARM",
              0xAA64: "ARM-64",
              0xA641: "ARM64 + Intel x86-64 (под эмуляцией)",
              0xA64E: "ARM64 и ARM64 + Intel x86-64 (под эмуляцией)",
              0x1C4: "ARM Thumb2",
              0xEBC: "EFI",
              0x14C: "Intel x86",
              0x200: "Intel Itanium",
              0x6232: "LoongArch 32-бит",
              0x6264: "LoongArch 64-бит",
              0x9041: "Mitsubishi M32R",
              0x266: "MIPS16",
              0x366: "MIPS с FPU",
              0x466: "MIPS16 с FPU",
              0x1F0: "PowerPC",
              0x1F1: "PowerPC с FPU",
              0x160: "MIPS I 32-бит BE",
              0x162: "MIPS I 32-бит LE",
              0x166: "MIPS III 64-бит LE",
              0x168: "MIPS IV 64-бит LE",
              0x5032: "RISC-V 32-бит",
              0x5064: "RISC-V 64-бит",
              0x5128: "RISC-V 128-бит",
              0x1A2: "Hitachi SH3",
              0x1A3: "Hitachi SH3 DSP",
              0x1A6: "Hitachi SH4",
              0x1A8: "Hitachi SH5",
              0x1C2: "Thumb",
              0x169: "MIPS WCEv2"
            };
            targetArch = (arches[targetArch] || "неизвестной архитектуры");
            // Количество секций
            var sectionsCount = headerView.getUint16(6, true);
            // Таймстемп компиляции файла
            var creationTimestamp = headerView.getUint32(8, true);
            // Неизвестный таймстемп
            if (creationTimestamp == 0xFFFFFFFF) {
              creationTimestamp = 0;
            }
            // Размер необязательного заголовка
            var optionalHeaderSize = headerView.getUint16(20, true);
            // Характеристики (флаги)
            var characteristics = headerView.getUint16(22, true);
            // Необязательный заголовок
            var optionalHeaderMagic = headerView.getUint16(24, true);
            // Является-ли исполняемый код PE+
            var isPEPlus = (optionalHeaderMagic == 0x20B);
            // Подсистема
            var subsystem = headerView.getUint16(24 + 68, true);
            // Адрес начала директорий данных
            var dataDirOffset = isPEPlus ? (24 + 112) : (24 + 96);
            // Количество директорий данных
            var numberOfRvaAndSizes = headerView.getUint32(dataDirOffset - 4, true);
            // Получаем список директорий данных
            var dataDirectories = [];
            for (var i = 0; i < Math.min(numberOfRvaAndSizes, 16); i++) {
              dataDirectories.push([headerView.getUint32(dataDirOffset + i * 8, true), headerView.getUint32(dataDirOffset + 4 + i * 8, true)]);
            }
            // Определение возможных типов
            var types = "";
            if (characteristics & 0x2000) {
              types = "DLL / MUI";
            } else if (subsystem == 1) {
              types = "SYS / DRV";
            } else if (subsystem == 2) {
              types = "EXE";
            } else if (subsystem == 3) {
              types = "COM";
            } else if (subsystem == 10) {
              types = "EFI";
            } else if (subsystem == 11 || subsystem == 12) {
              types = "EFI драйвер";
            } else if (subsystem == 13) {
              types = "EFI ROM";
            } else {
              types = "EXE / DLL / MUI / SYS / DRV / EFI / EFI драйвер / EFI ROM";
            }
            // Адрес начала секций
            var sectionsStart = optionalHeaderSize + 24;
            // Получаем список секций
            var sections = [];
            for (var i = 0; i < sectionsCount; i++) {
              // Адрес начала текущий секции
              var sectionOffset = sectionsStart + (i * 40);
              var sectionName = "";
              // Название секции
              for (var j = 0; j < 8; j++) {
                var char = headerView.getUint8(sectionOffset + j);
                if (char === 0) {
                  break;
                }
                sectionName += String.fromCharCode(char);
              }
              sections.push({
                "name": sectionName,
                "virtualAddress": headerView.getUint32(sectionOffset + 20, true),
                "virtualSize": headerView.getUint32(sectionOffset + 16, true)
              });
            }
            // Получение сертификатов
            var certificates = [];
            var fr2 = new FileReader();
            fr2.onload = async () => {
              if (fr2.readyState == 2) {
                var certView = new DataView(fr2.result);
                var currentOffset = 0;
                while (currentOffset < dataDirectories[4][1]) {
                  var length = certView.getUint32(currentOffset, true);
                  var revision = certView.getUint16(currentOffset + 4, true);
                  var certType = certView.getUint16(currentOffset + 6, true);
                  if (certType == 2) {
                    try {
                      var data = new Uint8Array(fr2.result, currentOffset + 8, length - 8);
                      certificates.push({
                        revision, data
                      });
                    } catch {}
                  }
                  currentOffset += length;
                  currentOffset = Math.ceil(currentOffset / 8) * 8;
                }
                currentElement.certificates = certificates;
                var certificatesHtml = `${certificates.length ? `<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Подписи` : ""}${certificates.map((cert, index) => `<br />${"&nbsp;".repeat(tabLevel + 8)}<font style="color: lime;">╰┈➤</font> Цепочка сертификатов ${cert.revision == 512 ? "v2.0" : "v1.0"} <button data-call="downloadCertificate" data-id="${index}">Скачать</button>`).join("")}`;
                if (!detailedScan) {
                  return res({
                    "name": `Исполняемый PE-код (${types})<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Для архитектуры ${targetArch}${creationTimestamp ? `<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Был скомпилирован ${(new Date(creationTimestamp * 1e3)).toLocaleString()}` : ""}${sections.filter(section => section.name == ".rsrc").length ? `<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Ресурсы` : ""}${certificatesHtml}`,
                    "wantsDetailedScan": !!sections.length
                  });
                }
                // Просматриваем все секции ресурсов на файлы внутри
                for (var resource of sections.filter(section => section.name == ".rsrc")) {
                  var fr3 = new FileReader();
                  fr3.onload = async () => {
                    if (fr3.readyState == 2) {
                      // Нужно проверить волшебные числа ещё и здесь
                      var matched = [];
                      var resourceData = new Uint8Array(fr3.result);
                      for (var type of currentElement.types) {
                        if (!type.allowedDeepScan) {
                          continue;
                        }
                        var foundOffset = findBytePattern(resourceData, type.magic);
                        if (foundOffset < 0) {
                          continue;
                        }
                        if (typeof type.name == "function") {
                          matched.push(await type.name(fileObject, resourceData.slice(foundOffset - type.offset), tabLevel + 8, true));
                        } else {
                          matched.push(type.name);
                        }
                      }
                      res(`Исполняемый PE-код (${types})<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Для архитектуры ${targetArch}${creationTimestamp ? `<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Был скомпилирован ${(new Date(creationTimestamp * 1e3)).toLocaleString()}` : ""}${sections.filter(section => section.name == ".rsrc").length ? `<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Ресурсы` : ""}${matched.map(type => `<br />${"&nbsp;".repeat(tabLevel + 8)}<font style="color: lime;">╰┈➤</font> ${type}`).join("")}${certificatesHtml}`);
                    }
                  };
                  fr3.readAsArrayBuffer(fileObject.slice(resource.virtualAddress, resource.virtualAddress + resource.virtualSize));
                }
              }
            };
            if (dataDirectories.length > 4 && dataDirectories[4][0] && dataDirectories[4][1]) {
              fr2.readAsArrayBuffer(fileObject.slice(dataDirectories[4][0], dataDirectories[4][0] + dataDirectories[4][1]));
            }
          }
        };
        fr.readAsArrayBuffer(fileObject.slice(headerPointer, headerPointer + 4096));
      });
    },
    "magic": parseHEX("4D 5A"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Исполняемый PE-код (EXE)",
    "magic": parseHEX("5A 4D"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Архив (ZIP / APK / DOCX / EPUB / IPA / JAR / MSIX / PPTX / XLSX / WHL)",
    "magic": parseHEX("50 4B 03 04"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Архив (ZIP / APK / DOCX / EPUB / IPA / JAR / MSIX / PPTX / XLSX / WHL)",
    "magic": parseHEX("50 4B 05 06"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Архив (ZIP / APK / DOCX / EPUB / IPA / JAR / MSIX / PPTX / XLSX / WHL)",
    "magic": parseHEX("50 4B 07 08"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Архив (RAR v1.50)",
    "magic": parseHEX("52 61 72 21 1A 07 00"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Архив (RAR v5.00)",
    "magic": parseHEX("52 61 72 21 1A 07 01 00"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Исполняемый Linux-код (ELF)",
    "magic": parseHEX("7F 45 4C 46"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Изображение (PNG)",
    "magic": parseHEX("89 50 4E 47 0D 0A 1A 0A"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Java-класс (CLASS)",
    "magic": parseHEX("CA FE BA BE"),
    "offset": 0
  }, {
    "name": "Adobe PostScript",
    "magic": parseHEX("25 21 50 53"),
    "offset": 0
  }, {
    "name": "Документ (PDF)",
    "magic": parseHEX("25 50 44 46 2D"),
    "offset": NaN
  }, {
    "name": "Музыка (OGG)",
    "magic": parseHEX("4F 67 67 53"),
    "offset": 0
  }, {
    "name": "Документ Adobe Photoshop (PSD)",
    "magic": parseHEX("38 42 50 53"),
    "offset": 0
  }, {
    "name": "Музыка (WAV)",
    "magic": parseHEX("52 49 46 46 ?? ?? ?? ?? 57 41 56 45"),
    "offset": 0
  }, {
    "name": "Видео (AVI)",
    "magic": parseHEX("52 49 46 46 ?? ?? ?? ?? 41 56 49 20"),
    "offset": 0
  }, {
    "name": "Музыка (MP3)",
    "magic": parseHEX("FF FB"),
    "offset": 0
  }, {
    "name": "Музыка (MP3)",
    "magic": parseHEX("FF F3"),
    "offset": 0
  }, {
    "name": "Музыка (MP3)",
    "magic": parseHEX("FF F2"),
    "offset": 0
  }, {
    "name": "Музыка (MP3)",
    "magic": parseHEX("49 44 33"),
    "offset": 0
  }, {
    "name": "Изображение (BMP)",
    "magic": parseHEX("42 4D"),
    "offset": 0
  }, {
    "name": "Образ диска (ISO)",
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
    "name": "Описание виртуального разделённого диска VMWare 4 (VMDK)",
    "magic": parseHEX("23 20 44 69 73 6B 20 44 65 73 63 72 69 70 74 6F"),
    "offset": 0
  }, {
    "name": "Ррасширение Google Chrome (CRX)",
    "magic": parseHEX("43 72 32 34"),
    "offset": 0
  }, {
    "name": "Архив (XAR)",
    "magic": parseHEX("78 61 72 21"),
    "offset": 0
  }, {
    "name": "Архив (TAR)",
    "magic": parseHEX("75 73 74 61 72 00 30 30"),
    "offset": 257
  }, {
    "name": "Архив (TAR)",
    "magic": parseHEX("75 73 74 61 72 20 20 00"),
    "offset": 257
  }, {
    "name": "Архив (7z)",
    "magic": parseHEX("37 7A BC AF 27 1C"),
    "offset": 0
  }, {
    "name": "Сжатые даннные (GZ)",
    "magic": parseHEX("1F 8B"),
    "offset": 0
  }, {
    "name": "Архив (XZ)",
    "magic": parseHEX("FD 37 7A 58 5A 00"),
    "offset": 0
  }, {
    "name": "Архив (LZ4)",
    "magic": parseHEX("04 22 4D 18"),
    "offset": 0
  }, {
    "name": "Архив-кабинет Microsoft (CAB)",
    "magic": parseHEX("04 22 4D 18"),
    "offset": 0
  }, {
    "name": "Видео (MKV / WEBM)",
    "magic": parseHEX("1A 45 DF A3"),
    "offset": 0
  }, {
    "name": "Документ (DJVU)",
    "magic": parseHEX("41 54 26 54 46 4F 52 4D ?? ?? ?? ?? 44 4A 56"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Сертификат (CRT / PEM)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 2D 2D 2D 2D 2D"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Запрос на сертификат (CSR / PEM)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 20 52 45 51 55 45 53 54 2D 2D 2D 2D 2D"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Приватный ключ (KEY / PEM)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Приватный ключ DSA (KEY / PEM)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 44 53 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Приватный ключ RSA (KEY / PEM)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 52 53 41 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Приватный ключ Putty v2 (PPK)",
    "magic": parseHEX("50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 32 3A"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Приватный ключ Putty v3 (PPK)",
    "magic": parseHEX("50 75 54 54 59 2D 55 73 65 72 2D 4B 65 79 2D 46 69 6C 65 2D 33 3A"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Приватный ключ OpenSSH",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 4F 50 45 4E 53 53 48 20 50 52 49 56 41 54 45 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Публичный ключ OpenSSH (PUB)",
    "magic": parseHEX("2D 2D 2D 2D 2D 42 45 47 49 4E 20 53 53 48 32 20 4B 45 59 2D 2D 2D 2D 2D"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": (_, _2, tabLevel) => `Шрифт (WOFF)<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Версия v1.0`,
    "magic": parseHEX("77 4F 46 46"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Шрифт (WOFF)<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Версия v2.0`,
    "magic": parseHEX("77 4F 46 32"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `XML<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Кодировка UTF-8`,
    "magic": parseHEX("3C 3F 78 6D 6C 20"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `XML<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Кодировка UTF-16LE`,
    "magic": parseHEX("3C 00 3F 00 78 00 6D 00 6C 00 20"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `XML<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Кодировка UTF-16BE`,
    "magic": parseHEX("00 3C 00 3F 00 78 00 6D 00 6C 00 20"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `XML<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Кодировка UTF-32LE`,
    "magic": parseHEX("3C 00 00 00 3F 00 00 00 78 00 00 00 6D 00 00 00 6C 00 00 00 20 00 00 00"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `XML<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Кодировка UTF-32BE`,
    "magic": parseHEX("00 00 00 3C 00 00 00 3F 00 00 00 78 00 00 00 6D 00 00 00 6C 00 00 00 20"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `XML<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Кодировка EBCDIC`,
    "magic": parseHEX("4C 6F A7 94 93 40"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "WebAssembly (WASM)",
    "magic": parseHEX("00 61 73 6D"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Adobe Flash (SWF)",
    "magic": parseHEX("43 57 53"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Adobe Flash (SWF)",
    "magic": parseHEX("46 57 53"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Пакет Linux (DEB)",
    "magic": parseHEX("21 3C 61 72 63 68 3E 0A"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Изображение (WEBP)",
    "magic": parseHEX("52 49 46 46 ?? ?? ?? ?? 57 45 42 50"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "U-Boot",
    "magic": parseHEX("27 05 19 56"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Документ (RTF)",
    "magic": parseHEX("7B 5C 72 74 66 31"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Видео (MP4)",
    "magic": parseHEX("66 74 79 70 69 73 6F 6D"),
    "offset": 4,
    "allowedDeepScan": false
  }, {
    "name": "Видео (MP4)",
    "magic": parseHEX("66 74 79 70 4D 53 4E 56"),
    "offset": 4,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Без сжатия<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Без словаря`,
    "magic": parseHEX("78 01"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Минимальное сжатие<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Без словаря`,
    "magic": parseHEX("78 5E"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Стандартное сжатие<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Без словаря`,
    "magic": parseHEX("78 9C"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Максимальное сжатие<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> Без словаря`,
    "magic": parseHEX("78 DA"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Без сжатия<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> С словарём`,
    "magic": parseHEX("78 20"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Минимальное сжатие<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> С словарём`,
    "magic": parseHEX("78 7D"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Стандартное сжатие<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> С словарём`,
    "magic": parseHEX("78 BB"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, _2, tabLevel) => `Сжатые даннные (ZLIB)<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Максимальное сжатие<br />${"&nbsp;".repeat(tabLevel)}<font style="color: lime;">╰┈➤</font> С словарём`,
    "magic": parseHEX("78 F9"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Символическая ссылка MacOS (ALIAS)",
    "magic": parseHEX("62 6F 6F 6B 00 00 00 00 6D 61 72 6B 00 00 00 00"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Закладка MacOS",
    "magic": parseHEX("62 6F 6F 6B"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Зашифрованные данные (PGP)",
    "magic": parseHEX("85 ?? ?? 03"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Сжатые даннные (ZST)",
    "magic": parseHEX("28 B5 2F FD"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Виртуальный жёсткий диск VirtualBox (VDI)",
    "magic": parseHEX("3C 3C 3C 20 4F 72 61 63 6C 65 20 56 4D 20 56 69 72 74 75 61 6C 42 6F 78 20 44 69 73 6B 20 49 6D 61 67 65 20 3E 3E 3E"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "Виртуальный жёсткий диск Windows (VHD)",
    "magic": parseHEX("63 6F 6E 65 63 74 69 78"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Виртуальный жёсткий диск Windows 8 (VHDX)",
    "magic": parseHEX("76 68 64 78 66 69 6C 65"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Проект Blender (BLEND)",
    "magic": parseHEX("42 4C 45 4E 44 45 52"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Шрифт (TTF)",
    "magic": parseHEX("00 01 00 00 00"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Шрифт (OTF)",
    "magic": parseHEX("4F 54 54 4F"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Архив образа Windows (WIM / ESD)",
    "magic": parseHEX("4F 54 54 4F"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": (_, result, tabLevel) => {
      var view = new DataView(result.buffer);
      // Читаем размер WIM
      var size = view.getUint32(56, true);
      return `Архив образа Windows (WIM)<br />${"&nbsp;".repeat(tabLevel + 4)}<font style="color: lime;">╰┈➤</font> Размер данных ${currentElement.renderSize(size)}`;
    },
    "magic": parseHEX("4D 53 57 49 4D 00 00 00"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "База данных Microsoft Access 2007 (ACCDB)",
    "magic": parseHEX("00 01 00 00 53 74 61 6E 64 61 72 64 20 41 43 45 20 44 42"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "База данных Microsoft Access (MDB)",
    "magic": parseHEX("00 01 00 00 53 74 61 6E 64 61 72 64 20 4A 65 74 20 44 42"),
    "offset": 0,
    "allowedDeepScan": true
  }, {
    "name": "HDR",
    "magic": parseHEX("23 3F 52 41 44 49 41 4E 43 45 0A"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Зашифрованный VBScript (VBE)",
    "magic": parseHEX("23 40 7E 5E"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Плейлист (M3U / M3U8)",
    "magic": parseHEX("23 45 58 54 4D 33 55"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "HDR",
    "magic": parseHEX("6E 69 31 00"),
    "offset": 344,
    "allowedDeepScan": false
  }, {
    "name": "База данных DuckDB",
    "magic": parseHEX("44 55 43 4B"),
    "offset": 8,
    "allowedDeepScan": false
  }, {
    "name": "Загрузочный образ Android (BOOT.IMG)",
    "magic": parseHEX("41 4E 44 52 4F 49 44 21"),
    "offset": 0,
    "allowedDeepScan": false
  }, {
    "name": "Образ Android Sparse",
    "magic": parseHEX("3A FF 26 ED"),
    "offset": 0,
    "allowedDeepScan": false
  }],
  "scan": ({ file, content }, _, detailedScan) => {
    var fileObject = file.files[0];
    if (!fileObject) {
      return;
    }
    var fr = new FileReader;
    var matched = [];
    fr.onload = async () => {
      if (fr.readyState == 2) {
        var result = new Uint8Array(fr.result);
        var detailedScanPossible = false;
        for (var type of currentElement.types) {
          var foundOffset = findBytePattern(result, type.magic);
          if (foundOffset != type.offset && (foundOffset < 0 || !isNaN(type.offset))) {
            continue;
          }
          if (typeof type.name === "function") {
            var result = await type.name(fileObject, result, 1, detailedScan);
            if (typeof result === "object") {
              var { name, wantsDetailedScan } = result;
              if (!detailedScan && wantsDetailedScan) {
                detailedScanPossible = true;
              }
              matched.push(name);
            } else {
              matched.push(result);
            }
          } else {
            matched.push(type.name);
          }
        }
        if (!matched.length) {
          matched = ["Неизвестный файл"];
        }
        content.innerHTML = `<h2 style="color: white;"><i class="fa-solid fa-file"></i> ${fileObject.name}</h2><h3 style="color: white;">${currentElement.renderSize(fileObject.size)}</h3>${detailedScanPossible ? `<br /><p style="color: white;">Используйте детальное сканирование ниже.<br />Оно может выявить скрытые данные внутри файлов или определить тип точнее.<br />Учтите, детальное сканирование загрузит весь файл в оперативную память!</p><button data-call="detailedScan">Детальное сканирование</button>` : ""}<br /><br /><br /><h3 style="color: white; text-align: left; width: fit-content;"><font style="color: lime;">✦</font> ${fileObject.name}<br />${matched.map(type => `&nbsp;<font style="color: lime;">╰┈➤</font> ${type}<br />`).join("")}</h3>`;
        updateCalls();
      }
    };
    fr.readAsArrayBuffer(fileObject.slice(0, 1024));
  },
  "detailedScan": ({ file, content }, event) => {
    currentElement.scan({ file, content }, event, true);
  },
  "downloadCertificate": (_, event) => {
    var id = parseInt(event.target.dataset.id);
    var blob = new Blob([currentElement.certificates[id].data], {
      "type": "application/x-pkcs7-certificates"
    });
    var url = URL.createObjectURL(blob);
    var link = document.createElement("a");
    link.href = url;
    link.download = `comet_installer_latest.exe_cert${id + 1}.p7b`;
    link.click();
    URL.revokeObjectURL(url);
  }
})