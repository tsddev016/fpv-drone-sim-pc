#!/usr/bin/env bash
# Copia a versão web mais recente para www/ (modo offline)
set -e
ROOT="$(cd "$(dirname "$0")" && pwd)"
TMP="$ROOT/_web_tmp"
rm -rf "$TMP"
git clone --depth 1 https://github.com/tsddev016/fpv-drone-sim.git "$TMP"
mkdir -p "$ROOT/www"
cp "$TMP"/*.js "$ROOT/www/" 2>/dev/null || true
cp "$TMP/index.html" "$TMP/manifest.json" "$ROOT/www/" 2>/dev/null || true
rm -rf "$TMP"
echo "www/ atualizado a partir de fpv-drone-sim"
