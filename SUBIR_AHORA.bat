@echo off
chcp 65001 >nul
color 0A
title Subiendo Proyecto Hogwarts a GitHub

echo.
echo ========================================
echo   SUBIENDO A GITHUB: juanbagnardi98
echo ========================================
echo.

cd /d C:\Users\juani\OneDrive\Escritorio\html\proyectoHP

if errorlevel 1 (
    echo ERROR: No se pudo acceder a la carpeta
    pause
    exit /b 1
)

echo [1/6] Verificando Git...
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git no está instalado
    echo Descárgalo desde: https://git-scm.com
    pause
    exit /b 1
)
echo ✓ Git encontrado
echo.

echo [2/6] Configurando repositorio remoto...
git remote add origin https://github.com/juanbagnardi98/proyectoHP.git 2>nul
echo ✓ Repositorio remoto configurado
echo.

echo [3/6] Actualizando rama a main...
git branch -M main
echo ✓ Rama configurada
echo.

echo [4/6] Agregando archivos...
git add .
echo ✓ Archivos agregados
echo.

echo [5/6] Creando commit...
git commit -m "Proyecto Hogwarts: web estática con 5 páginas, SASS, Bootstrap y Animate.css - %date% %time%"
echo ✓ Commit creado
echo.

echo [6/6] Haciendo push a GitHub...
git push -u origin main

if errorlevel 0 (
    echo.
    echo ========================================
    echo   ✅ ÉXITO - Cambios subidos a GitHub
    echo ========================================
    echo.
    echo Tu proyecto está en:
    echo https://github.com/juanbagnardi98/proyectoHP
    echo.
) else (
    echo.
    echo ❌ ERROR en el push
    echo Por favor verifica:
    echo - Que tengas conexión a Internet
    echo - Que el repositorio exista en GitHub
    echo.
)

pause