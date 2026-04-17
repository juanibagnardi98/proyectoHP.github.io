# 🚀 CÓMO SUBIR LOS CAMBIOS A GITHUB

## Requisitos ANTES de hacer push
✅ Tener Git instalado (https://git-scm.com)
✅ Haber creado el repositorio en GitHub (https://github.com/new)
✅ Haber configurado el remote del repositorio

---

## 📋 CHECKLIST PREVIO

### 1️⃣ Verificar que Git está instalado
Abre **CMD** o **PowerShell** y ejecuta:
```bash
git --version
```
Deberías ver algo como: `git version 2.x.x...`

### 2️⃣ Crear repositorio en GitHub
1. Ve a https://github.com/new
2. **Repository name**: `proyectoHP`
3. **Description**: Sitio web institucional sobre Harry Potter
4. Elige **Public** o **Private**
5. **NO** marques "Add a README file"
6. Haz clic en **Create repository**

### 3️⃣ Configurar el remote (IMPORTANTE)
Reemplaza `TU_USUARIO` con tu usuario de GitHub y ejecuta en CMD:

```bash
cd C:\Users\juani\OneDrive\Escritorio\html\proyectoHP
git remote add origin https://github.com/TU_USUARIO/proyectoHP.git
git branch -M main
```

---

## ✅ OPCIÓN 1: Usar el Script Automatizado (RECOMENDADO)

### Solo para Windows:
1. Navega a la carpeta del proyecto
2. Haz doble clic en **`push-to-github.bat`**
3. El script hará automáticamente:
   - ✅ Agregar todos los cambios
   - ✅ Crear un commit
   - ✅ Hacer push a GitHub

---

## ✅ OPCIÓN 2: Hacer Push Manual

Abre **CMD** o **PowerShell** en la carpeta del proyecto:

```bash
cd C:\Users\juani\OneDrive\Escritorio\html\proyectoHP
```

Ejecuta estos comandos en orden:

```bash
# Ver cambios pendientes
git status

# Agregar todos los archivos
git add .

# Crear commit
git commit -m "Proyecto Hogwarts: web estática con 5 páginas, SASS, Bootstrap y Animate.css"

# Hacer push a GitHub
git push -u origin main
```

---

## 🔍 VERIFICAR QUE TODO FUNCIONÓ

### Comando para verificar:
```bash
git log --oneline
```

Deberías ver tu(s) commit(s) en la lista.

### En GitHub:
1. Ve a https://github.com/TU_USUARIO/proyectoHP
2. Verifica que los archivos estén ahí
3. Verifica el historial de commits

---

## ⚠️ ERRORES COMUNES Y SOLUCIONES

### ❌ "fatal: 'origin' does not appear to be a 'git' repository"
**Solución**: Configurar el remote
```bash
git remote add origin https://github.com/TU_USUARIO/proyectoHP.git
```

### ❌ "fatal: The current branch main has no upstream branch"
**Solución**: Ejecutar push con -u
```bash
git push -u origin main
```

### ❌ "Permission denied (publickey)"
**Solución**: Usar HTTPS en lugar de SSH o configurar claves SSH
```bash
git remote set-url origin https://github.com/TU_USUARIO/proyectoHP.git
```

### ❌ "fatal: Not a git repository"
**Solución**: Inicializar Git
```bash
cd C:\Users\juani\OneDrive\Escritorio\html\proyectoHP
git init
git add .
git commit -m "Initial commit"
```

### ❌ "error: Your local changes to 'file.txt' would be overwritten by merge"
**Solución**: Agregar y hacer commit primero
```bash
git add .
git commit -m "Tu mensaje"
git push
```

---

## 📊 DESPUÉS DE SUBIR: DESPLEGAR EN VERCEL O NETLIFY

### 🚀 Vercel (Recomendado)
1. Ve a https://vercel.com
2. Haz clic en **New Project**
3. Importa tu repositorio de GitHub (`proyectoHP`)
4. Haz clic en **Deploy**
5. Tu sitio estará en: `https://proyectoHP-RANDOMID.vercel.app`

### 🌐 Netlify (Alternativa)
1. Ve a https://netlify.com
2. Haz clic en **New site from Git**
3. Conecta tu repositorio de GitHub
4. **Build command**: (dejar vacío)
5. **Publish directory**: `.` o `/`
6. Haz clic en **Deploy site**

---

## 📝 COMMITS POSTERIORES

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

O usa el script:
```bash
push-to-github.bat
```

---

## 💡 TIPS

- **Siempre haz commits pequeños** con mensajes claros
- **Usa descriptores**: "Agregar", "Corregir", "Mejorar", "Actualizar"
- Ejemplo: `git commit -m "Corregir estilos navbar en mobile"`
- **Haz push frecuentemente** para no perder cambios

---

## ✨ ESTRUCTURA FINAL EN GITHUB

```
proyectoHP/
├── 5 páginas HTML (index, personajes, hechizos, casas, historia)
├── Estructura SASS completa en /sass
├── CSS compilado en /css
├── Scripts JavaScript en /jib
├── Imagen de fondo (ESCUDO.JPG)
├── Documentación (README.md, etc.)
└── .gitignore
```

---

**¡Listo para publicar tu proyecto! 🎉**