@echo off
cd /d "%~dp0"
title Sneha Birthday Surprise Website
echo ========================================================
echo   Launching Birthday Website for Sneha...
echo ========================================================
start "" http://localhost:8080/index.html
python -m http.server 8080
pause
