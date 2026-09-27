# FPV Drone Sim — PC (Desktop)

Versão **desktop** do [FPV Drone Sim](https://github.com/tsddev016/fpv-drone-sim) para **Windows**, **macOS** e **Linux**, usando **Electron**.

Jogo online: https://fpvdronesimecru.vercel.app/

---

## Como jogar no PC

### Opção A — Mais fácil (sem Electron)

**Windows:** dê dois cliques em `JOGAR.bat` (precisa de Python instalado).

Ou no terminal:

```bash
cd www
python -m http.server 8080
# abra http://localhost:8080 no Chrome
```

### Opção B — App com janela própria (Electron)

```bash
npm install
npm start
```

### Opção C — Gerar instalador (.exe)

```bash
npm install
npm run dist:win
```

O instalador fica na pasta `dist/` e cria atalho na área de trabalho.

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
| Modo | M | — |

---

## Estrutura

```text
fpv-drone-sim-pc/
├── main.js / preload.js / package.json
├── JOGAR.bat / JOGAR.sh
└── www/          ← o jogo completo
```

## Relacionado

- Web: https://github.com/tsddev016/fpv-drone-sim
- PC: https://github.com/tsddev016/fpv-drone-sim-pc
