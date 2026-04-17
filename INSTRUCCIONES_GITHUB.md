# INSTRUCCIONES FINALES - Subir a GitHub

## ✅ CAMBIOS REALIZADOS

### Correcciones de Errores
- ✅ Agregado color de navbar a todas las páginas secundarias
- ✅ Validada estructura HTML en todos los archivos
- ✅ Verificada integridad de Bootstrap y Animate.css

### Archivos Nuevos
- ✅ Estructura SASS completa (`sass/` carpeta)
- ✅ CSS compilado (`css/styles.css`)
- ✅ Configuración `.gitignore`
- ✅ Scripts de setup (`git-setup.bat`, `git-setup.sh`)
- ✅ Documentación completa

## 🚀 PASOS PARA SUBIR A GITHUB (WINDOWS)

### Paso 1: Abre PowerShell o CMD
```
Presiona: Windows + R
Escribe: cmd
Presiona: Enter
```

### Paso 2: Navega a la carpeta del proyecto
```bash
cd C:\Users\juani\OneDrive\Escritorio\html\proyectoHP
```

### Paso 3: Configura Git (solo primera vez)
```bash
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu.email@gmail.com"
```

### Paso 4: Inicializa el repositorio local
```bash
git init
git add .
git commit -m "Initial commit: Proyecto Hogwarts - web estática con 5 páginas, SASS, Bootstrap y Animate.css"
```

### Paso 5: Crea un repositorio en GitHub
1. Ve a https://github.com/new
2. **Repository name**: `proyectoHP`
3. **Description**: Sitio web institucional sobre Harry Potter
4. Elige **Public** o **Private**
5. NO marques "Add a README file"
6. Haz clic en **Create repository**

### Paso 6: Conecta tu repositorio local con GitHub
Reemplaza `TU_USUARIO` con tu usuario de GitHub:

```bash
git remote add origin https://github.com/TU_USUARIO/proyectoHP.git
git branch -M main
git push -u origin main
```

### Paso 7: Verifica que funcionó
```bash
git log --oneline
```

Deberías ver tu commit inicial.

---

## 🌐 DESPLEGAR EN VERCEL (Recomendado)

### Opción A: Desde GitHub
1. Ve a https://vercel.com
2. Haz clic en **New Project**
3. Importa tu repositorio de GitHub
4. Haz clic en **Deploy**
5. Tu sitio estará en: `tuproyecto.vercel.app`

### Opción B: Desde CLI
```bash
npm install -g vercel
vercel
```

---

## 🌐 DESPLEGAR EN NETLIFY

1. Ve a https://netlify.com
2. Haz clic en **New site from Git**
3. Conecta tu repositorio GitHub
4. **Build command**: (dejar vacío - es un sitio estático)
5. **Publish directory**: `.` o `/`
6. Haz clic en **Deploy site**
7. Tu sitio estará en: `tuproyecto.netlify.app`

---

## 📝 DESPUÉS DE HACER CAMBIOS

Cada vez que modifiques archivos:

```bash
git add .
git commit -m "Descripción clara del cambio"
git push
```

El cambio se actualizará automáticamente en Vercel/Netlify.

---

## ✨ ESTRUCTURA DEL PROYECTO

```
proyectoHP/
├── index.html                 (Quiz interactivo)
├── personajes.html            (Página de personajes)
├── hechizos.html              (Página de hechizos)
├── casas.html                 (Página de casas)
├── historia.html              (Página de historia)
├── css/
│   └── styles.css             (CSS compilado)
├── sass/
│   ├── main.scss
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _layout.scss
│   └── _components.scss
├── jib/
│   ├── MAIN.JS                (Script del quiz)
│   └── package.json
├── README.md                  (Documentación)
├── .gitignore                 (Archivos a ignorar)
└── ESCUDO.JPG                 (Imagen de fondo)
```

---

## ⚠️ IMPORTANTE

1. **NO** ejecutes los comandos en PowerShell como administrador sin necesidad
2. Si ves errores de "git: command not found", instala Git desde https://git-scm.com
3. Si ves errores de autenticación, usa tokens PAT: https://github.com/settings/tokens
4. Reemplaza `TU_USUARIO` con tu usuario de GitHub real

---

## 🆘 SOLUCIÓN DE PROBLEMAS

### "fatal: No url passed to submodule command"
```bash
git remote -v
```
Asegúrate de haber ejecutado el comando `git remote add origin ...`

### "Permission denied"
Posiblemente necesitas usar HTTPS en lugar de SSH

### "Branch main not found"
```bash
git branch -M main
git push -u origin main
```

---

## 📚 RECURSOS

- Documentación: [README.md](README.md)
- Cambios realizados: [CAMBIOS.md](CAMBIOS.md)
- Referencia rápida: [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
- Guía detallada: [GITHUB_SETUP.md](GITHUB_SETUP.md)

---

**¡Proyecto listo para publicar! 🎉**