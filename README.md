# Todo List API

Esta es una API RESTful construida con NestJS para gestionar una lista de tareas (To-Do list). Incluye funcionalidades para el registro de usuarios, autenticación mediante JWT y operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las tareas.

## Tecnologías y Herramientas

*   **[NestJS](https://nestjs.com/):** Framework progresivo de Node.js para construir aplicaciones eficientes y escalables del lado del servidor.
*   **[TypeScript](https://www.typescriptlang.org/):** Superconjunto de JavaScript que añade tipado estático.
*   **[Prisma](https://www.prisma.io/):** ORM de próxima generación para Node.js y TypeScript.
*   **[SQLite](https://www.sqlite.org/):** Base de datos SQL ligera y autocontenida, usada para desarrollo.
*   **[Passport.js](http://www.passportjs.org/):** Middleware de autenticación para Node.js, utilizado para la estrategia de JWT.
*   **[Swagger](https://swagger.io/):** Herramienta para diseñar, construir, documentar y consumir servicios RESTful.
*   **[Class-Validator](https://github.com/typestack/class-validator):** Librería para la validación de DTOs basada en decoradores.
*   **[Class-Transformer](https://github.com/typestack/class-transformer):** Librería para transformar objetos planos a objetos de clase y viceversa.

## Arquitectura del Proyecto

El proyecto sigue una **arquitectura modular**, que es una de las fortalezas clave de NestJS. Esta arquitectura se eligió por las siguientes razones:

*   **Separación de Responsabilidades (SoC):** La aplicación está dividida en módulos cohesivos por funcionalidad (`Users`, `Auth`, `Tasks`). Cada módulo encapsula su propia lógica de negocio, controladores, servicios y modelos de datos (DTOs), haciendo que el código sea más fácil de entender, mantener y escalar.
*   **Alta Cohesión y Bajo Acoplamiento:** Los módulos están diseñados para ser independientes entre sí. Por ejemplo, el `TasksModule` no necesita conocer los detalles de implementación del `AuthModule`; simplemente confía en los mecanismos de autenticación que NestJS provee (como los Guards).
*   **Reusabilidad:** Módulos como `PrismaModule` y `ConfigModule` están diseñados para ser compartidos y reutilizados a lo largo de toda la aplicación, proveyendo una única fuente de verdad para la conexión a la base de datos y la gestión de la configuración.

Este enfoque modular no solo organiza el código de manera lógica, sino que también facilita las pruebas unitarias y de integración, y permite que diferentes desarrolladores puedan trabajar en distintas funcionalidades de forma paralela con un menor riesgo de conflictos.

## Getting Started

Sigue estas instrucciones para tener una copia del proyecto funcionando en tu máquina local.

### 1. Instalación

Clona el repositorio e instala las dependencias usando npm:

```bash
npm install
```

### 2. Configuración del Entorno

El proyecto utiliza variables de entorno para su configuración. Crea un archivo `.env` en la raíz del proyecto, puedes usar el archivo `.env.example` como guía.

```bash
cp .env.example .env
```

El archivo `.env` contendrá las siguientes variables:

*   `PORT`: El puerto en el que correrá la aplicación (ej. 3000).
*   `DATABASE_URL`: La URL de conexión a la base de datos Prisma.
*   `JWT_SECRET`: Una clave secreta larga y compleja para firmar los tokens JWT.
*   `JWT_EXPIRES_IN`: El tiempo de expiración para los tokens (ej. `1h`, `7d`).

## Ejecución de la Aplicación

Una vez instalado y configurado, puedes ejecutar la aplicación en diferentes modos:

```bash
# Modo de desarrollo con auto-recarga
npm run start:dev
```

```bash
# Modo de producción (requiere compilación previa con npm run build)
npm run start:prod
```

### Usuario de Pruebas

Para probar la funcionalidad de login y los endpoints protegidos, puedes registrar un nuevo usuario. El endpoint de registro espera un `email`.

Para facilitar las pruebas, puedes registrar y usar el siguiente email:
*   **Email:** `test@example.com`

## Documentación de la API (Swagger)

Una vez que la aplicación esté en ejecución, la documentación interactiva de la API estará disponible en la siguiente ruta:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Desde esta interfaz podrás ver todos los endpoints, sus descripciones, los datos que esperan y las respuestas que devuelven. También podrás probar los endpoints protegidos añadiendo tu token de acceso JWT en el botón "Authorize".