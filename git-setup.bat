@echo off
REM Inicializar repositorio Git
git init

REM Agregar todos los archivos
git add .

REM Hacer commit inicial
git commit -m "Initial commit: Proyecto Hogwarts - web estática con 5 páginas, SASS, Bootstrap y Animate.css"

REM Agregar remoto (reemplaza TU_USUARIO y TU_REPO con los valores correctos)
REM git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

REM Cambiar rama a main (opcional, depende de GitHub)
REM git branch -M main

REM Hacer push al repositorio remoto
REM git push -u origin main

echo.
echo Para completar el proceso:
echo 1. Crea un repositorio en GitHub (https://github.com/new)
echo 2. Reemplaza TU_USUARIO/TU_REPO en las líneas de arriba
echo 3. Descomenta y ejecuta esas líneas
echo 4. O ejecuta manualmente los comandos git remote, branch y push