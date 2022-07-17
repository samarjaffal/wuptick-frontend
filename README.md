# Wuptick App 
Wuptick es una aplicación web pensada para la gestión de proyectos, tareas y equipos, con el fin de aumentar la productividad de sus usuarios. 
Este repositorio contiene el código perteneciente al front de la app.

## Tecnologías usadas
Fue desarrollado basado en el stack MERN. En el front se utilizó lo siguiente:
  - React
  - Styled components
  - Apollo
  - React-beautiful-dnd: Para el manejo del drag and drop de los elementos en la interfaz.
  - Editor.js: Una librería que permite implementar un editor de texto enriquecido, con diferentes plugins.

## Un video vale más que mil palabras
[Aquí puedes ver la app en acción.](https://www.youtube.com/watch?v=vYwXZ9VzeRs)

## Algunas visuales de la app

### Home
![2022-07-16_20-01](https://user-images.githubusercontent.com/48697305/179375579-d2eeaa79-d3b5-486c-b80d-a1d192b3be16.png)
La página principal de la app. Donde se puede apreciar un timeline con los últimos proyectos.

### Perfil del usuario
![2022-07-16_20-09](https://user-images.githubusercontent.com/48697305/179375691-0e5f7d51-bf56-4c54-940b-51aeea43ee7e.png)
En el perfil el usuario tiene acceso a los equipos a los que pertenece, al igual que los proyectos asociados a los mismos. También tiene acceso a la edición de su información de contacto.

### Perfil de un proyecto
![2022-07-16_20-13](https://user-images.githubusercontent.com/48697305/179375769-f0de9abf-afe4-4bd1-a402-2607748b4661.png)
Aquí se muestra la información básica del proyecto, al igual que los módulos/secciones que lo componen. También tenemos una visualización de los miembros con la posibilidad de agregar nuevos.

### Página de un módulo
![2022-07-16_20-16](https://user-images.githubusercontent.com/48697305/179375844-3cf70e7b-8b58-45df-968e-eddc13c6789b.png)
En esta página encontramos las listas y tareas referentes al módulo al que entramos. Podemos crear nuevas listas, mover las listas, crear nuevas tareas, moverlas, etc. 
También tenemos accesos rápidos para asignar una tarea, poner un deadline, y marcar como favorita.

## Preview de una tarea
![2022-07-16_20-50](https://user-images.githubusercontent.com/48697305/179379493-dfdc2e44-51e2-4ca7-b80c-4bd2a122f87b.png)

Este corresponde a uno de los módulos más complejos ya que abarca varias cosas en una. En el preview de una tarea podemos ver la integración que se hizo con Editor.js para la parte del cuerpo de la tarea.
En el preview de la tarea podemos:
- Marcar tarea como finalizada
- Marcar tarea como favorita
- Eliminar la tarea
- Agregar una descripción a la tarea. En la descripción se pueden agregar varios elementos desde imágenes, citas, diferentes tipos de heading, etc. Incluso se creó un propio plugin para gestionar las menciones en una tarea. Cuando mencionas a @alguien, a esa persona le llega un correo con el enlace de la tarea a donde fué mencionado.
- Podemos agregar colaboradores en la tarea
- Asigar la tarea a un miembro
- Cambiar la tarea de un listado a otro 
- También podemos agregarle tags a la tarea

![2022-07-16_20-51](https://user-images.githubusercontent.com/48697305/179379502-9c90e460-42c2-4a8b-8fd5-948294ea3da2.png)

**Adicionalmente se desarrolló el apartado de comentarios**  
En los comentarios se utiliza el mismo componente de Editor.js para agregar cualquier elemento en el cuerpo del comentario. De igual forma están habilitadas las menciones y cada vez que se realiza un comentario, se hace el envió de un correo a todos los colaboradores de la tarea.

### Gestión de notificaciones
![2022-07-16_21-04](https://user-images.githubusercontent.com/48697305/179379754-cb3b6f0d-9abe-4b5d-b253-9279775187ce.png)
Por último se desarrolló la opción de gestión de notificaciones, cada vez que se crean proyectos, cuando se asignan tareas o alguién comenta en una tarea a la que pertenece el usuario como colaborador.

## Motivo de creación del proyecto
El proyecto fue desarrollado con fines de aprendizaje para las diferentes tecnologías en el area de front. Fue una excelente experiencia su desarrollo, el cual tomó alrededor de un año en mis tiempos libres.

## Agradecimientos
Gracias al apoyo de [@juanpgarciac](https://github.com/juanpgarciac), quien contribuyó en el desarollo del proyecto a través de sus asesorías y despliegue del proyecto en servidores.

