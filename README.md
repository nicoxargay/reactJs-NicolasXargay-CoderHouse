# 🌸 Nx Perfumerie

E-commerce de perfumes desarrollado como proyecto final de curso. Permite explorar un catálogo de fragancias, agregar productos al carrito y completar una orden de compra.

---

## 🚀 Demo

> Podés correr el proyecto localmente siguiendo los pasos de instalación.

---

## 🌐 Dominio

🔗 [https://nxperfumerie.vercel.app](https://nxperfumerie.vercel.app)

---

## 🛠️ Tecnologías

| Tecnología | Uso |
|---|---|
| [React 19](https://react.dev/) | Biblioteca principal de UI |
| [Vite 7](https://vitejs.dev/) | Bundler y entorno de desarrollo |
| [React Router DOM 7](https://reactrouter.com/) | Navegación entre páginas |
| [Firebase 12](https://firebase.google.com/) | Base de datos (Firestore) y backend |

---

## ✨ Features

- 🗂️ Catálogo de productos con filtro por categoría (Masculino, Femenino, Unisex)
- 🔍 Página de detalle por producto
- 🛒 Carrito de compras con agregar, eliminar y vaciar productos
- 💳 Checkout con formulario de datos y validación
- 📦 Generación de orden de compra guardada en Firestore
- 📱 Diseño responsive con menú hamburguesa en mobile

---

## 📁 Estructura del proyecto

```
src/
├── Cart/               # Componente carrito
├── CartItem/           # Item individual del carrito
├── CartWidget/         # Ícono del carrito en el navbar
├── Checkout/           # Formulario de compra
├── context/            # CarritoContext (estado global)
├── Item/               # Card de producto
├── ItemCount/          # Selector de cantidad
├── ItemDetail/         # Detalle de producto
├── ItemDetailContainer/
├── itemListContainer/  # Listado de productos
├── navbar/             # Navegación
└── service/            # Configuración Firebase
```
---

## 📚 Curso

Proyecto desarrollado como entrega final del curso de **React JS** en [Coderhouse](https://www.coderhouse.com/).