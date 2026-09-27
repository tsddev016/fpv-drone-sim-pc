@echo off
title FPV Drone Sim
cd /d "%~dp0www"
echo.
echo  FPV Drone Sim — abrindo no navegador...
echo  Se nao abrir sozinho, va em: http://localhost:8080
echo.
start "" http://localhost:8080
python -m http.server 8080 2>nul
if errorlevel 1 (
  where py >nul 2>nul && py -m http.server 8080
  if errorlevel 1 (
    echo Python nao encontrado. Instale Node.js e use: npx serve -p 8080
    pause
  )
)
