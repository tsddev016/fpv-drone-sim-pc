@echo off
cd /d "%~dp0"
echo Baixando jogo web para pasta www...
if exist _web_tmp rmdir /s /q _web_tmp
git clone --depth 1 https://github.com/tsddev016/fpv-drone-sim.git _web_tmp
if not exist www mkdir www
copy /Y _web_tmp\*.js www\ >nul 2>&1
copy /Y _web_tmp\index.html www\ >nul 2>&1
copy /Y _web_tmp\manifest.json www\ >nul 2>&1
rmdir /s /q _web_tmp
echo Pronto. www/ atualizado.
pause
