# Tekman

Este proyecto ha sido realizado con [Angular CLI](https://github.com/angular/angular-cli) versión 15.2.1.

![application screenshot](src/assets/tekman.png)

## Aplicación

Esta aplicación es una prueva tecnica para la empresa Tekman.

En ella hay en primer luga una página inicial con los siguientes componentes:

- Header: En este componente podemos ver un titulo y tres botones en la parte derecha, el segundo botón es funcional y abre la parte de configuración en la que es posible cambiar el idioma de la aplicación entre el catalán y el castellano.

- Last session: En este componente el usuario puede ver el título de la ultima sesión visitada y puede hacer clic en algún botón para acceder a la página previa de entrada a las sesiones.

- Syllabus: Aqui el usuario puede ver los tres trimestres y la cantidad de sesiones completadas de cada uno, hay tres imagenes segun las sesiones que ha visto el usuario, una cuando aun no ha empezado, una cuando ha visto alguna de la sesiones del trimestre y finalmente cuando las ha visto todas.

- Trimester: Si el usuario hace clic en alguno de los trimestres puede acceder al mismo para ver todas las sesiónes disponibles, si hace clic en alguna de ellas queda como vista y accede a la página previa a de entrada a la sesión.

## Tencologias usadas

- Angular

- routing

- Tailwind CSS

- ngx-translate

## Ejeccución aplicación

Clone el código y ejecute el comando `ng serve` para arrancar la aplicación. Navegue a `http://localhost:4200/`.
