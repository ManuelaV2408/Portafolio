# 🌱 Semillero M Portfolio 2025

Este proyecto es un **portafolio web** creado por el semillero como práctica de desarrollo frontend con **React + Vite**.  
Aquí aprenderás a estructurar un proyecto moderno, modular y fácil de mantener.

---

## 🚀 Estructura del proyecto

La organización de carpetas sigue un enfoque por **features** y **pantallas** para que todo lo relacionado con una página esté junto:

```
semillero-m-portfolio-2025/
│── public/               # Archivos estáticos (imágenes, íconos, etc.)
│── src/
│   ├── assets/           # Recursos globales (imágenes, fuentes, estilos globales)
│   ├── components/       # Componentes reutilizables (botones, cards, navbar, etc.)
│   ├── pages/            # Páginas principales del portafolio
│   │   ├── home/         # Carpeta de la página Home
│   │   │   ├── index.jsx # Punto de entrada de Home (renderiza los demás componentes)
│   │   │   ├── Skills.jsx
│   │   │   ├── Hobbies.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   └── about/        # Ejemplo de otra página (About)
│   │       ├── index.jsx
│   │       └── Team.jsx
│   ├── App.jsx           # Componente raíz de la aplicación
│   ├── main.jsx          # Punto de entrada con ReactDOM
│   └── styles/           # Estilos globales (CSS o Tailwind config)
│── package.json          # Configuración y dependencias del proyecto
│── vite.config.js        # Configuración de Vite
│── README.md             # Documentación del proyecto
```

👉 **Decisión de estructura**:  
En lugar de tener todos los componentes en una sola carpeta, los **componentes propios de cada pantalla** se agrupan dentro de su carpeta (`pages/home`, `pages/about`, etc.).  
Esto hace que el código sea **más fácil de mantener** y cada equipo pueda trabajar en su pantalla sin confundirse.

---

## 🛠️ Instalación y configuración

### 1. Clonar el repositorio
Abre tu terminal y ejecuta:

```bash
git clone https://github.com/Jhonsebastianas/semillero-m-portfolio-2025.git
cd semillero-m-portfolio-2025
```

### 2. Instalar dependencias
Este proyecto usa **npm** (Node Package Manager).  
Ejecuta el siguiente comando para instalar todas las librerías necesarias:

```bash
npm install
```

📌 Si no tienes instalado Node.js y npm, descárgalo desde 👉 [nodejs.org](https://nodejs.org/).

### 3. Ejecutar en modo desarrollo
Para levantar el servidor local:

```bash
npm run dev
```

Esto abrirá el proyecto en tu navegador en la dirección:  
👉 `http://localhost:5173`

### 4. Scripts disponibles
Puedes ver los scripts definidos en `package.json`. Los más importantes son:

- **`npm run dev`** → Levanta el servidor de desarrollo
- **`npm run build`** → Genera la versión optimizada para producción
- **`npm run preview`** → Previsualiza la app como si estuviera en producción

---

## 📚 Buenas prácticas

- Cada componente debe estar en su propia carpeta si crece mucho.
- Usar nombres claros y en inglés para los componentes.
- Mantener los estilos consistentes (usar Tailwind o CSS Modules).
- Documentar cambios importantes en el README.

---

## 👥 Créditos

Proyecto realizado por el profesor **Jhon Sebastian Agudelo Sierra** para el **Semillero Quipux** con fines de aprendizaje 🚀.
