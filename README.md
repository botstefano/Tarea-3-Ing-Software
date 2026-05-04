# Sistema de Gestión de Prácticas y Tesis - UNT

Este es un sistema web completo desarrollado para la Universidad Nacional de Trujillo (UNT) utilizando un stack moderno y escalable.

## 🧱 Stack Tecnológico

- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS, shadcn/ui.
- **Backend**: NestJS, tRPC para API Type-Safe.
- **Base de Datos**: PostgreSQL con Prisma ORM.
- **Contenedores**: Docker & Docker Compose.
- **CI/CD**: GitHub Actions.

## 🚀 Instrucciones de Despliegue

### Entorno de Desarrollo (Local con Docker)

1.  **Clonar el repositorio**.
2.  **Configurar variables de entorno**:
    - Crear un archivo `.env` en la raíz (ver `docker-compose.yml` para referencias).
3.  **Levantar el sistema**:
    ```bash
    docker-compose up --build
    ```
4.  **Acceso**:
    - Frontend: `http://localhost:3000`
    - Backend (tRPC): `http://localhost:3001/trpc`
    - Base de Datos: `localhost:5432`

### Despliegue en Producción

#### Frontend (Vercel)
1. Conectar el repositorio de GitHub a Vercel.
2. Configurar la variable de entorno `NEXT_PUBLIC_API_URL` apuntando a la URL del backend.
3. Vercel detectará automáticamente el workspace `apps/web`.

#### Backend (Cloudflare / VPS / Railway)
1. El backend puede ser desplegado en un servicio que soporte Node.js o Docker.
2. Configurar `DATABASE_URL` con la cadena de conexión de PostgreSQL.
3. Se recomienda usar Cloudflare Tunnel para exponer el puerto del backend de forma segura.

## 📂 Estructura del Proyecto

- `apps/api`: Servidor NestJS con lógica de negocio y tRPC routers.
- `apps/web`: Aplicación Next.js con componentes React y cliente tRPC.
- `docs/`: Contiene el diagrama de arquitectura, modelo ER y script SQL inicial.
- `packages/`: (Opcional) Paquetes compartidos para tipos y configuraciones.

## ✅ Requisitos Implementados

- **Autenticación**: Estructura lista en el módulo `auth`.
- **Prácticas**: Gestión de ofertas y postulaciones.
- **Tesis**: Modelo de datos para proyectos y jurados.
- **Dashboard**: Vista con métricas y gráficos interactivos (simulados).
- **Reportes**: Estructura para generación de PDF en el backend.
