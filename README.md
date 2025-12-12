# 📝 TaskAPI – API RESTful de Gestión de Tareas (CRUD + Auth)

Esta es una API RESTful creada para gestionar tareas con operaciones CRUD, autenticación con JWT y conexión a una base de datos MongoDB. El proyecto utiliza validaciones, middleware y una arquitectura modular para un desarrollo escalable.

---

## 🚀 Características

- CRUD completo de tareas (Create, Read, Update, Delete)
- Autenticación de usuarios con JWT
- Validación de datos
- Middleware de protección de rutas
- Base de datos MongoDB con Mongoose
- Estructura modular y profesional

---

## 📂 Estructura del proyecto

```bash
src/
│── config/
│   └── db.js
│── controllers/
│   ├── authController.js
│   └── taskController.js
│── middlewares/
│   └── authMiddleware.js
│── models/
│   ├── Task.js
│   └── User.js
│── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
└── index.js


---

## 🛠️ Requisitos

- Node.js 18 o superior  
- MongoDB (local o Atlas)  
- npm  

---

## 📥 Instalación

Clonar el repositorio:

```bash
git https://github.com/DavidFig19/taskapi



## Instlar dependencias

npm install

## Crear archivo .env en la raíz del proyecto:

PORT=3000
MONGO_URI=TU_CONEXION_A_MONGODB
JWT_SECRET=CLAVE_SECRETA

## Ejemplo para MongoDB local:

MONGO_URI=mongodb://127.0.0.1:27017/tareasdb

## Ejecutar aplicacion

npm run dev

## Si todo esta bien veras

Servidor corriendo en el puerto 3000
Conectado a MongoDB

🔐 Autenticación

La API usa autenticación con Bearer Token (JWT).

Registro

POST /api/auth/register

Body:
{
  "username": "david",
  "password": "123456"
}

Login

POST /api/auth/login

Respuesta:

{
  "token": "ey..."
}

Usar en headers:

Authorization: Bearer TU_TOKEN

📌 Endpoints de Tareas (Protegidos)
Obtener todas las tareas

GET /api/tasks

Obtener una tarea

GET /api/tasks/:id

Crear una tarea

POST /api/tasks

Body:

{
  "title": "Comprar comida",
  "description": "Leche, pan y huevos",
  "status": "pendiente"
}

Actualizar una tarea

PUT /api/tasks/:id

Eliminar una tarea

DELETE /api/tasks/:id

🧪 Pruebas

Puedes utilizar:

Postman

Thunder Client

Pasos:

Registrar usuario

Iniciar sesión

Copiar token