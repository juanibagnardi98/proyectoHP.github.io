@echo off
REM Script para subir cambios a GitHub - Proyecto Hogwarts
REM Este script automatiza todo el proceso de commit y push

echo ========================================
echo   SUBIENDO PROYECTO A GITHUB
echo ========================================
echo.

REM Verificar si Git está instalado
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git no está instalado
    echo Descárgalo desde: https://git-scm.com
    pause
    exit /b 1
)

REM Verificar si hay cambios
echo Verificando cambios...
git status
echo.

REM Preguntar si continuar
set /p continue="¿Continuar con el commit y push? (S/N): "
if /i not "%continue%"=="S" (
    echo Operación cancelada.
    pause
    exit /b 0
)

echo.
echo Agregando archivos...
git add .

echo.
echo Haciendo commit...
git commit -m "Actualización: Proyecto Hogwarts corregido y optimizado - %date%"

REM Verificar si el remote está configurado
git remote -v >nul 2>&1
if errorlevel 1 (
    echo.
    echo ERROR: No hay repositorio remoto configurado
    echo Ejecuta primero:
    echo   git remote add origin https://github.com/TU_USUARIO/proyectoHP.git
    pause
    exit /b 1
)

echo.
echo Haciendo push a GitHub...
git push -u origin main

if errorlevel 0 (
    echo.
    echo ========================================
    echo   ✅ ÉXITO - Cambios subidos a GitHub
    echo ========================================
    echo.
    echo Verifica en: https://github.com/TU_USUARIO/proyectoHP
    echo.
) else (
    echo.
    echo ❌ ERROR en el push
    echo Verifica tu conexión a Internet y que el remote esté configurado
)

pause