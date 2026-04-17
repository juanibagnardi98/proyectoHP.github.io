# Referencia Rápida - Comandos Git

## Inicializar el repositorio (primera vez)
```bash
cd c:\Users\juani\OneDrive\Escritorio\html\proyectoHP
git init
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
git add .
git commit -m "Initial commit: Proyecto Hogwarts completo"
```

## Crear repo en GitHub
1. https://github.com/new
2. Name: `proyectoHP`
3. Create repository

## Conectar y hacer push
```bash
git remote add origin https://github.com/TU_USUARIO/proyectoHP.git
git branch -M main
git push -u origin main
```

## Después de cambios
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

## Ver estado
```bash
git status      # Ver cambios
git log         # Ver commits
git remote -v   # Ver repositorio remoto
```

## Desplegar en Vercel
```bash
npm install -g vercel
vercel
```

## Desplegar en Netlify
1. Conectar en https://netlify.com
2. Seleccionar repo de GitHub
3. Deploy

---
Reemplaza `TU_USUARIO` con tu usuario de GitHub