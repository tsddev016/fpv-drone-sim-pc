# FPV Drone Sim — PC

Versão **desktop** do simulador FPV para Windows, macOS e Linux.

**Repositório:** https://github.com/tsddev016/fpv-drone-sim-pc  
**Jogo web:** https://fpvdronesimecru.vercel.app/  
**Código web:** https://github.com/tsddev016/fpv-drone-sim

---

## Como jogar (mais fácil)

### 1. App Electron (recomendado)

Precisa do [Node.js](https://nodejs.org/) instalado.

```bash
git clone https://github.com/tsddev016/fpv-drone-sim-pc.git
cd fpv-drone-sim-pc
npm install
npm start
```

Abre uma **janela de aplicativo**.  
Se a pasta `www/` tiver o jogo, joga offline; senão, abre a versão **online** automaticamente.

No menu **Arquivo** você pode alternar:
- Jogar offline (local)
- Jogar online (Vercel)

### 2. Gerar instalador Windows (.exe)

```bash
npm install
npm run dist:win
```

O instalador sai em `dist/`. Instala atalho na área de trabalho.

### 3. Só o navegador (sem Electron)

Baixe o repo web e sirva a pasta:

```bash
git clone https://github.com/tsddev016/fpv-drone-sim.git
cd fpv-drone-sim
python -m http.server 8080
```

Abra http://localhost:8080

Ou no Windows use o `JOGAR.bat` se a pasta `www/` estiver completa.

---

## Controles

| Ação | Teclado | Gamepad |
|------|---------|---------|
| Subir | PageUp | R1 |
| Pairar | Home | L3 |
| Descer | PageDown | R2 |
| Freio | Q | L1 |
| Turbo | E | L2 |
| Reset | R | — |
| Câmera | C | — |
| Modo Acro/Angle | M | — |

---

## Estrutura

```text
fpv-drone-sim-pc/
├── main.js          # Janela Electron
├── preload.js
├── package.json     # npm start / dist:win
├── JOGAR.bat        # Atalho Windows (servidor local)
├── JOGAR.sh
├── www/             # Cópia do jogo (quando presente)
└── README.md
```

Para sincronizar o jogo offline com a versão web mais nova:

```bash
# na pasta do repo PC
rm -rf www
git clone --depth 1 https://github.com/tsddev016/fpv-drone-sim.git _web
mkdir -p www
cp _web/*.js _web/index.html _web/manifest.json www/ 2>/dev/null
rm -rf _web
```

---

## Requisitos

| Modo | Precisa |
|------|---------|
| `npm start` | Node.js 18+ |
| Instalador | Node.js + `npm run dist:win` |
| Só browser | Python ou Node |

---

Feito para **tsddev016**.
