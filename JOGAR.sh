#!/usr/bin/env bash
cd "$(dirname "$0")/www"
echo "FPV Drone Sim — http://localhost:8080"
(command -v python3 >/dev/null && python3 -m http.server 8080) || (command -v python >/dev/null && python -m http.server 8080) || npx --yes serve -p 8080
