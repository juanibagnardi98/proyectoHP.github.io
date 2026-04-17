# Guía para Subir el Proyecto a GitHub

## Paso 1: Verificar instalación de Git
Abre la terminal (CMD o PowerShell en Windows) y ejecuta:
```bash
git --version
```

## Paso 2: Configurar Git (primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## Paso 3: Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `proyectoHP` (o el que prefieras)
3. Descripción: "Sitio web institucional sobre Harry Potter con 5 páginas, SASS, Bootstrap y animaciones"
4. Elige público o privado
5. NO inicialices con README (lo tenemos ya)
6. Haz clic en "Create repository"

## Paso 4: Navega a la carpeta del proyecto
```bash
cd c:\Users\juani\OneDrive\Escritorio\html\proyectoHP
```

## Paso 5: Inicializar repositorio local
```bash
git init
git add .
git commit -m "Initial commit: Proyecto Hogwarts - web estática con 5 páginas, SASS, Bootstrap y Animate.css"
```

## Paso 6: Conectar con el repositorio remoto
Reemplaza `TU_USUARIO` con tu usuario de GitHub:
```bash
git remote add origin https://github.com/TU_USUARIO/proyectoHP.git
git branch -M main
git push -u origin main
```

## Paso 7: Desplegar en Vercel o Netlify

### Opción A: Vercel
1. Ve a https://vercel.com
2. Haz clic en "New Project"
3. Conecta tu repositorio GitHub
4. Haz clic en "Deploy"
5. Tu sitio estará en: `tuproyecto.vercel.app`

### Opción B: Netlify
1. Ve a https://netlify.com
2. Haz clic en "New site from Git"
3. Conecta tu repositorio GitHub
4. Configura:
   - Build command: (dejar vacío, es una web estática)
   - Publish directory: / (raíz)
5. Haz clic en "Deploy site"
6. Tu sitio estará en: `tuproyecto.netlify.app`

## Commits posteriores
Cuando hagas cambios, ejecuta:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

## Verificar cambios
```bash
git status          # Ver archivos modificados
git log             # Ver historial de commits
```