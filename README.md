#Coder React Flex JS App

Este proyecto fue realizado para el curso de React Flex JS en CoderHouse.
El proyecto es un E-commerce de ropa streetwear construido con React y Firebase, con un diseño UI moderno y urbano.

![app](https://i.postimg.cc/DygSThKt/Captura-de-pantalla-2026-02-18-133039.png)

## Version Host 💻

Para ver el proyecto online, debe ingresar al siguiene link:[Coder App](https://tienda-react-js-pc.vercel.app/)

## 📋 Tabla de Contenido

- [Características](#-características)
- [Stack Tecnológico](#️-stack-tecnológico)
- [Instalación](#-instalación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Autor](#-autor)

## ✨ Características

- ✅ **Catálogo de productos** con filtros por categoría (Men, Women, Kids)
- ✅ **Detalle de productos** con información completa y control de stock
- ✅ **Carrito de compras** con Context API para gestión de estado global
- ✅ **Proceso de checkout** con validaciones avanzadas usando React Hook Form
- ✅ **Integración con Firebase Firestore** para almacenamiento de productos y órdenes
- ✅ **Diseño responsive** optimizado para mobile, tablet y desktop
- ✅ **Animaciones y micro-interacciones** para mejor experiencia de usuario
- ✅ **Navegación con React Router** para SPA fluida
- ✅ **Confirmaciones visuales** con SweetAlert2

## 🛠️ Stack Tecnológico

### Frontend

-[React Bootstrap](https://react-bootstrap.netlify.app/): utilizada para el estilo en la app

-[BootStrap](https://getbootstrap.com/): utilizado para el estilo en la app

-[React Icons](https://react-icons.github.io/react-icons/): utilizada para los iconos.

-[Firebase](https://firebase.google.com): utilizada para base de datos.

-[React Router Dom](https://reactrouter.com/): utilizada para implementar la navegacion por rutas.

-[React Spinner](https://www.davidhu.io/react-spinners/): utilizado para la implementacicon de spinner

-[React Hook Form](https://react-hook-form.com/): utilizado para la implementacion de formularios.

-[Sweet Alert2](https://sweetalert2.github.io/): utilizado para la implementacion de alertas.

### Backend & Database

-[Firebase Firestore](https://firebase.google.com/): Base de datos NoSQL en tiempo real

### Estilos

-[CSS3 puro](https://developer.mozilla.org/es/docs/Web/CSS): Diseño custom sin frameworks.

-[Google Fonts](https://fonts.google.com/specimen/Bebas+Neue): Bebas Neue y Archivo.

-[Animaciones CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/animation): Transiciones y efectos personalizados.

### Build y Deploy

-[Vite](https://vite.dev/): Build tool y dev server -[Vercel](): Hosting y deployment continuo

## 🔧 Instalación

### Prerrequisitos

- Node.js v24.13.0
- npm o yarn
- Cuenta de Firebase

### Pasos

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/OnofreDavila/ProyectoFinal-Davila
   cd ProyectoFinal-Davila
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

   ```bash
   cp .env.example .env
   ```

   Edita `.env` con tus credenciales de Firebase (ver siguiente sección).

4. **Iniciar servidor de desarrollo**

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
ProyectoFinal-Davila/
├── public/
│   └── logoPC.png           # Logo de la marca
├── src/
│   ├── components/          # Componentes React
│   │   ├── App.jsx
│   │   ├── NavBar.jsx
│   │   ├── Item.jsx
│   │   ├── ItemList.jsx
│   │   ├── ItemListContainer.jsx
│   │   ├── ItemDetail.jsx
│   │   ├── ItemDetailContainer.jsx
│   │   ├── ItemCount.jsx
│   │   ├── CartWidget.jsx
│   │   ├── CartContainer.jsx
│   │   ├── CartView.jsx
│   │   ├── Checkout.jsx
│   │   ├── EmptyCart.jsx
│   │   ├── Error.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   └── [archivos .css correspondientes]
│   ├── context/
│   │   └── CartContext.jsx  # Context API para carrito
│   ├── service/
│   │   └── firebase.js      # Configuración de Firebase
│   └── main.jsx             # Punto de entrada
├── .env                     # Plantilla de variables de entorno
├── .gitignore               # Archivos ignorados por Git
├── package.json             # Dependencias y scripts
├── vite.config.js           # Configuración de Vite
└── README.md                # Este archivo
```

## 🎨 Diseño y Estética

El diseño está inspirado en la estética **streetwear urbana** con:

- **Paleta de colores oscura**: Negro profundo con acentos amarillo (#f4e04d) y naranja (#ff6b35)
- **Tipografía bold**: Bebas Neue para títulos y Archivo para texto
- **Animaciones suaves**: Fade in, slide in, hover effects
- **Micro-interacciones**: Feedback visual en todas las acciones

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 👤 Autor

**Onofre Davila**

- Portfolio: [Portafolio Onofre Davila](https://portafolioonofredavila.netlify.app/)
- GitHub: [Onofre Davila](https://github.com/OnofreDavila)
- LinkedIn: [Onofre Davila](www.linkedin.com/in/onofredavila)

---

⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub
