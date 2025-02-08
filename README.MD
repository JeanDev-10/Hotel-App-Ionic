# Hotel Management App - Ionic + Node.js API

Esta es una aplicación móvil desarrollada en Ionic que consume una API REST construida con Node.js, Express y MySQL. La aplicación permite gestionar reservaciones de habitaciones, autenticación de usuarios (Admin y Cliente), y administración de habitaciones.

## Requisitos Previos

- Node.js (v16 o superior)
- Ionic CLI (`npm install -g @ionic/cli`)
- MySQL (local o remoto)
- Git

## Instalación y Configuración

### 1. Clonar el Repositorio

Clonar el repositorio de la API y la aplicación Ionic:

```bash
# Clonar la API
git clone https://github.com/JeanDev-10/API-REST-NodeJS-Hotel.git
cd API-REST-NodeJS-Hotel

# Clonar la aplicación Ionic
git clone https://github.com/JeanDev-10/Hotel-App-Ionic.git
cd Hotel-App-Ionic
```

### 2. Configurar la API

Instalar dependencias:

```bash
npm install
```

Configurar la base de datos:

1. Crear una base de datos MySQL.
2. Configurar las credenciales en el archivo `.env`:

```env
DB_NAME=nombre_de_tu_base_de_datos
DB_USER=tu_usuario_mysql
DB_PASSWORD=tu_contraseña_mysql
DB_HOST=localhost
JWT_SECRET=tu_secreto_jwt
CLOUDINARY_CLOUD_NAME=yourkey
CLOUDINARY_API_KEY=yourkey
CLOUDINARY_API_SECRET=yourkey
```

Ejecutar migraciones y seeders:

```bash
npm run seed
```

Iniciar el servidor:

```bash
npm run dev
```

### 3. Configurar la Aplicación Ionic

Instalar dependencias:

```bash
npm install
```

Configurar la URL de la API:

1. Abrir el archivo `src/environments/environment.ts`.
2. Actualizar la URL de la API:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/v1'
};
```

Iniciar la aplicación:

```bash
ionic serve
```

## Datos de Prueba

### Usuarios por Defecto

- **Admin:**

  - Email: [admin@hotmail.com](mailto\:admin@hotmail.com)
  - Password: admin123

- **Cliente:**

  - Email: [juan@hotmail.com](mailto\:juan@hotmail.com)
  - Password: juan123

### Tipos de Habitación

- Suite
- Familiar
- Estándar

### Estados de Reservación

- Pendiente
- Confirmada
- Cancelada

## QA - Quality Assurance

El documento de QA detalla los casos de uso exitosos y errores comunes. Puede encontrarse en:

```bash
src/assets/QA/QA.pdf
```

## Supuestos

- Los roles (Admin/Cliente) están correctamente configurados.
- Los toast muestran mensajes claros y profesionales.
- Existe validación en tiempo real en formularios.
- Los botones contextuales solo son visibles para usuarios autorizados.

## Reglas de Negocio Destacadas

- Las fechas de reservas canceladas se liberan automáticamente.
- El Admin no puede eliminar habitaciones con reservas activas.
- El estado de la reservación comienza en "Pendiente" y cambia a "Confirmada" con una tarea programada que se ejecuta cada minuto.

## Casos de Uso

### 1. Autenticación - Login

#### Caso Exitoso (AUTH-LG-01)

- **Descripción:** Usuario inicia sesión con credenciales válidas.
- **Resultado Esperado:** Redirección a dashboard y toast: "Sesión iniciada correctamente".

#### Caso Erróneo (AUTH-LG-02)

- **Descripción:** Credenciales inválidas.
- **Resultado Esperado:** Mensaje de error: "Credenciales incorrectas".

### 2. Autenticación - Registro

#### Caso Exitoso (AUTH-REG-01)

- **Descripción:** Registro exitoso con datos nuevos.
- **Resultado Esperado:** Redirección a login y toast: "¡Credenciales creadas exitosamente!".

#### Caso Erróneo (AUTH-REG-02)

- **Descripción:** Correo ya registrado.
- **Resultado Esperado:** Mensaje de error: "Este correo ya está en uso".

### 3. Cambiar Contraseña

#### Caso Exitoso (PASS-01)

- **Descripción:** Cambio de contraseña exitoso.
- **Resultado Esperado:** Toast: "Contraseña actualizada".

#### Caso Erróneo (PASS-02)

- **Descripción:** Contraseña actual incorrecta.
- **Resultado Esperado:** Mensaje: "La contraseña es incorrecta".

### 4. Habitaciones (Room)

#### Caso Exitoso (ROOM-01)

- **Descripción:** Listar todas las habitaciones.
- **Resultado Esperado:** Grid con tarjetas de habitaciones (imagen, nombre, precio).

#### Caso Erróneo (ROOM-02)

- **Descripción:** Admin intenta eliminar habitación con reservas pendientes.
- **Resultado Esperado:** Mensaje de error: "No se puede eliminar: existen reservas pendientes".

### 5. Reservaciones (Reservation)

#### Caso Exitoso (RES-01)

- **Descripción:** Cliente crea una reserva.
- **Resultado Esperado:** Toast: "Reservación creada correctamente!".

#### Caso Erróneo (RES-02)

- **Descripción:** Fechas inválidas al crear reserva.
- **Resultado Esperado:** Mensaje de error: "La fecha final debe ser posterior a la inicial".

### 6. Perfil (Profile)

#### Caso Exitoso (PROF-01)

- **Descripción:** Usuario ve su propio perfil.
- **Resultado Esperado:** Muestra datos personales (nombre, apellido, correo).

#### Caso Exitoso (PROF-02)

- **Descripción:** Admin ve perfil de cliente con reservas.
- **Resultado Esperado:** Muestra datos del cliente + lista de reservas.

## Ejecución de la Aplicación

Asegurarse de que la API esté corriendo:

```bash
npm run dev
```

Clonar y ejecutar la aplicación Ionic:

```bash
git clone https://github.com/JeanDev-10/Hotel-App-Ionic.git
cd Hotel-App-Ionic
npm install
ionic serve
```

Abrir la aplicación en el navegador:

```bash
http://localhost:8100
```

## Contribución

Si se desea contribuir a este proyecto, seguir estos pasos:

1. Hacer un fork del repositorio.
2. Crear una rama para la nueva funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realizar los cambios y hacer commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Hacer push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abrir un Pull Request.

## Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consultar el archivo `LICENSE`.

## Contacto

- **Autor:** JeanDev-10
- **Correo:** [jeanrodriguez060420@gmail.com](mailto\:jeanrodriguez060420@gmail.com)
- **GitHub:** [JeanDev-10](https://github.com/JeanDev-10)
- **Linkedin:** [Jean Rodríguez](https://www.linkedin.com/in/jean-rodriguez-dev/)

¡Gracias por usar esta aplicación! 🚀

