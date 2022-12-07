## BACKEND

---

1. ### Setup del backend NestJS+GraphQL en ambiente Dev:
   > Tiempo aprox.: 3 horas
   - Instalacion de Node, Nest, GraphQL, Docker, MySQL etc
   - Instalacion de dependencias npm
   - Testing de conexion y "Hello World"
   - Funciones Common:
     - ConfigModule para variables de entorno
     - MySQLModule para conexion a DB
     - GraphQLModule para parametros de GraphQL en proyecto
     - CommonModule para funcionalidades proximas

---

2. ### Usuarios:
   > Tiempo aprox.: 5 horas
   - Entity Usuario (model)
   - nombre, apellido, telefono, fecha_nacimiento, resto del contacto..., usuario, contraseña, rol, ciudad, estado,
   - Input DTO Usuarios (model para crear)
   - Update DTO Usuarios (model para actualizar)
   - Service CRUD (metodos funcionales para CRUD):
     - Metodo Create
     - Metodo ReadAll
     - Metodo ReadOne
     - Metodo Update
     - Metodo Delete (soft delete)
   - Resolver CRUD (call al metodo, con validacion de los DTOs):
     - Un Resolver para cada metodo (5 total) al Service + validacion de CRUD

---

3. ### Setup de Autenticacion/login:
   > Tiempo aprox.: 6 horas
   - Cifrado de autenticacion
   - Decorators para pasar el Payload del usuario Logueado en cada llamada
   - Entity para Login (User/Pass unicamente, por ahora)
   - Input DTO para dicho Login
   - Guards:
     - Implementacion de Json WebToken
     - Validacion del cifrado de autenticacion para generar un Token que expira
   - Estrategia de validacion de Token ya pasando el Guard:
     - Validacion de credenciales de Usuario
     - Validacion de Usuario existente
     - Validacion de Usuario activo/inactivo
     - Validacion de Rol de Usuario

---

4. ### Articulos:
   > Tiempo aprox.: 3 horas
   - Entity Articulo (model)
   - SKU, nombre, almacen, estado, existencias,
   - Input DTO Articulos (model para crear)
   - Update DTO Articulos (model para actualizar)
   - Service CRUD (metodos funcionales para CRUD):
     - Metodo Create
     - Metodo ReadAll
     - Metodo ReadOne
     - Metodo Update
     - Metodo Delete (soft delete)
   - Resolver CRUD (call al metodo, con validacion de los DTOs):
     - Un Resolver para cada metodo (5 total) al Service + validacion de CRUD
   - Metodo Guard aplicado para validar el rol y si se permite la accion en el Resolver

---

5. ### Kits:
   > Tiempo aprox.: 3 horas
   - Entity Kit (model)
   - SKU, nombre, almacen, estado, existencias,
   - Input DTO Kits (model para crear)
   - Update DTO Kits (model para actualizar)
   - Service CRUD (metodos funcionales para CRUD):
     - Metodo Create
     - Metodo ReadAll
     - Metodo ReadOne
     - Metodo Update
     - Metodo Delete (soft delete)
   - Resolver CRUD (call al metodo, con validacion de los DTOs):
     - Un Resolver para cada metodo (5 total) al Service + validacion de CRUD
   - Metodo Guard aplicado para validar el rol y si se permite la accion en el Resolver

---

6. ### Existencias:
   > Tiempo aprox.: 3 horas
   - Entity Existencias (model)
   - SKU articulo / kit, almacen, estado, existencias,
   - Input DTO Existencias (model para crear)
   - Update DTO Existencias (model para actualizar)
   - Services (metodos funcionales):
     - Metodo AddItem
     - Metodo SubstractItem
   - Resolvers para los services:
     - Un Resolver para cada metodo (2 total) al Service + validaciones
   - Metodo Guard aplicado para validar el rol y si se permite la accion en el Resolver

---

7. ### Almacenes:
   > Tiempo aprox.: 3 horas
   - Entity Almacen (model)
   - nombre, estado, estatus,
   - Input DTO Almacenes (model para crear)
   - Update DTO Almacenes (model para actualizar)
   - Service CRUD (metodos funcionales para CRUD):
     - Metodo Create
     - Metodo ReadAll
     - Metodo ReadOne
     - Metodo Update
     - Metodo Delete (soft delete)
   - Resolver CRUD (call al metodo, con validacion de los DTOs):
     - Un Resolver para cada metodo (5 total) al Service + validacion de CRUD
   - Metodo Guard aplicado para validar el rol y si se permite la accion en el Resolver

---

8. ### Transferencias de Articulos:
   > Tiempo aprox.: 8 horas
   - Entity Transferencia_Articulo (model)
   - almacen_origen, almacen_destino, SKU articulos / kits, fecha_solicitud, fecha_finalizado,
   - Input DTO Transferencia_Articulo (model para crear)
   - Update DTO Transferencia_Articulo (model para actualizar)
   - Service tipo "CRUD" (metodos funcionales):
     - Metodo NewTransfer
     - Metodo EditTransfer
     - Metodo EndTransfer
     - Metodo CancelTransfer
   - Actualizacion de Existencias en el Almacen destino para cada uno de los 4
   - Resolver CRUD (call al metodo, con validacion de los DTOs):
     - Un Resolver para cada metodo (4 total) al Service + validacion de CRUD
   - Metodo Guard aplicado para validar el rol y si se permite la accion en el Resolver

---

9. ### Transferencias de Empleados:
   > Tiempo aprox.: 6 horas
   - Entity Transferencia_Empleado (model)
   - almacen_origen, almacen_destino, ID empleado, fecha_solicitud, fecha_finalizado,
   - Input DTO Transferencia_Empleado (model para crear)
   - Update DTO Transferencia_Empleado (model para actualizar)
   - Service tipo "CRUD" (metodos funcionales):
     - Metodo NewTransfer
     - Metodo EditTransfer
     - Metodo EndTransfer
     - Metodo CancelTransfer
   - Actualizacion de lista de Usuarios en el Almacen destino para cada uno de los 4
   - Resolver CRUD (call al metodo, con validacion de los DTOs):
     - Un Resolver para cada metodo (4 total) al Service + validacion de CRUD
   - Metodo Guard aplicado para validar el rol y si se permite la accion en el Resolver
