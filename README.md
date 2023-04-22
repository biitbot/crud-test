
# Prueba técnica para programador backend en NestJS

## Descripción general

La prueba técnica consiste en implementar una API REST para un sistema de administración de empleados utilizando NestJS y TypeORM. La aplicación permitirá a los usuarios realizar operaciones CRUD en una base de datos de empleados.

## Requisitos

1.  Crear un modelo de datos de empleado con las siguientes propiedades:
    
    -   ID: número entero único (clave primaria)
    -   Nombre: cadena de texto
    -   Cargo: cadena de texto
    -   Edad: número entero
    -   Salario: número decimal
2.  Crear una ruta que permita obtener una lista de todos los empleados en formato JSON. La ruta deberá responder a una solicitud HTTP GET en la URL `/employees`.
    
3.  Crear una ruta que permita obtener un empleado por ID en formato JSON. La ruta deberá responder a una solicitud HTTP GET en la URL `/employees/:id`, donde `:id` es el ID del empleado.
    
4.  Crear una ruta que permita agregar un nuevo empleado a la base de datos. La ruta deberá responder a una solicitud HTTP POST en la URL `/employees`. La solicitud deberá incluir los datos del empleado en formato JSON en el cuerpo de la solicitud.
    
5.  Crear una ruta que permita actualizar la información de un empleado existente. La ruta deberá responder a una solicitud HTTP PUT en la URL `/employees/:id`, donde `:id` es el ID del empleado a actualizar. La solicitud deberá incluir los datos del empleado actualizados en formato JSON en el cuerpo de la solicitud.
    
6.  Crear una ruta que permita eliminar un empleado de la base de datos. La ruta deberá responder a una solicitud HTTP DELETE en la URL `/employees/:id`, donde `:id` es el ID del empleado a eliminar.
    
7.  Configurar la conexión a la base de datos utilizando TypeORM.
    

## Instrucciones

1.  Clonar este repositorio a tu máquina local.
2.  Implementar la aplicación en NestJS y TypeORM según los requisitos mencionados anteriormente.
3.  Ejecutar la aplicación y verificar que todas las rutas funcionen correctamente.
4.  Agregar cualquier mejora o funcionalidad adicional que se desee.
5.  Subir los cambios al repositorio y enviar el enlace del repositorio al evaluador.

## Evaluación

La prueba será evaluada en base a los siguientes criterios:

-   Cumplimiento de los requisitos mencionados anteriormente.
-   Funcionamiento correcto de todas las rutas.
-   Correcta implementación de la conexión a la base de datos utilizando TypeORM.
-   Calidad del código y buenas prácticas de programación.
-   Creatividad y habilidad para agregar funcionalidades adicionales.

## Retroalimentación

Se proporcionará una retroalimentación constructiva y clara sobre la prueba técnica, incluyendo los puntos fuertes y áreas de mejora identificados en la implementación de la aplicación.
