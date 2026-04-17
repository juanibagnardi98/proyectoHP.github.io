# ⚡ GUÍA RÁPIDA: SUBIR A GITHUB AHORA MISMO

## 3 PASOS SIMPLES

### PASO 1: Crear repositorio en GitHub (2 minutos)
1. Ve a https://github.com/new
2. Nombre: `proyectoHP`
3. Haz clic en **Create repository**

---

### PASO 2: Configurar el remote (1 minuto)
Abre **CMD** y ejecuta (reemplaza `TU_USUARIO`):
```bash
cd C:\Users\juani\OneDrive\Escritorio\html\proyectoHP
git remote add origin https://github.com/TU_USUARIO/proyectoHP.git
git branch -M main
```

---

### PASO 3: Hacer push (1 minuto)
**OPCIÓN A - Automático (Recomendado):**
```
Haz doble clic en: push-to-github.bat
```

**OPCIÓN B - Manual:**
```bash
git add .
git commit -m "Proyecto Hogwarts completo - 5 páginas, SASS, Bootstrap, animaciones"
git push -u origin main
```

---

## ✅ ¡LISTO!

Verifica en: https://github.com/TU_USUARIO/proyectoHP

---

## 🚀 OPCIONAL: Desplegar en Vercel (1 minuto más)

1. Ve a https://vercel.com
2. **New Project** → Selecciona `proyectoHP` de GitHub
3. **Deploy**

**Tu sitio estará en**: `https://proyectoHP.vercel.app`

---

## 📚 Si necesitas ayuda
Lee: [SUBIR_A_GITHUB.md](SUBIR_A_GITHUB.md) (Guía completa)