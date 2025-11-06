# API de Productos - NestJS y PostgreSQL

Esta es una API REST construida con NestJS, TypeORM y PostgreSQL. Provee endpoints CRUD (Crear, Leer, Actualizar, Eliminar) para una entidad de `Productos`.

## Requisitos Previos

* [Node.js](https://nodejs.org/) (v18 o superior)
* [PostgreSQL](https://www.postgresql.org/) (corriendo localmente o en Docker)

## 1. Instalación

Clona el repositorio e instala las dependencias:

```bash
npm install
2. Configuración de la Base de Datos
Asegúrate de que tu servidor de PostgreSQL esté corriendo.

Crea una base de datos. Por defecto, la aplicación buscará db_productos.

SQL

CREATE DATABASE db_productos;
Copia el archivo .env.example (o crea uno nuevo) como .env en la raíz del proyecto.

Modifica el archivo .env con tus credenciales de PostgreSQL:

Fragmento de código

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres123
DB_NAME=db_productos

# App Configuration
PORT=3000
3. Ejecutar la Aplicación
La aplicación usará la configuración de synchronize: true de TypeORM para crear automáticamente la tabla productos la primera vez que se conecte.

Bash

# Modo de desarrollo (con recarga automática)
npm run start:dev
La API estará disponible en http://localhost:3000.

Endpoints de la API
Todas las rutas tienen el prefijo /api/v1.

POST /productos - Crea un nuevo producto.

GET /productos - Obtiene una lista de todos los productos.

GET /productos/:id - Obtiene un producto por su ID.

PATCH /productos/:id - Actualiza un producto por su ID.

DELETE /productos/:id - Elimina (lógicamente) un producto por su ID.


---

### 2. Para el Frontend (`paginaapi/README.md`)

Este README explica cómo correr el frontend y cómo se conecta al backend.

```markdown
# Frontend de Administración de Productos (React + Vite)

Esta es una aplicación de React construida con Vite y React Router que sirve como interfaz de usuario (UI) para la `api-productos`.

Permite al usuario crear, listar, editar y eliminar productos conectándose a la API de NestJS.

# Requisitos Previos

* [Node.js](https://nodejs.org/) (v18 o superior)
* **API Backend Corriendo:** Esta aplicación *requiere* que el proyecto `api-productos` esté ejecutándose en `http://localhost:3000`.

# 1. Instalación

Instala las dependencias:

```bash
npm install
2. Ejecutar la Aplicación
Inicia el servidor de desarrollo de Vite:

Bash

npm run dev
La aplicación estará disponible en http://localhost:5173.

Conexión con el Backend
Asegúrate de que la API (api-productos) esté corriendo en http://localhost:3000.

El frontend (este proyecto) se conectará automáticamente a http://localhost:3000/api/v1 para obtener y modificar los datos (configurado en app/api.ts).