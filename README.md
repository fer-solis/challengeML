# Challenge Mercado Libre
Desarrollo de test práctico para el área de front-end de Mercado Libre.


## Índice

- [1. Definición](#1-definición)
- [2. Objetivos](#2-objetivos)
- [3. Especificaciones](#3-especificaciones)
- [4. Funcionalidad](#4-funcionalidad)
- [5. Instrucciones](#5-instrucciones)
- [6. Extras](#6-extras)
- [7. Resultados](#7-resultados)

---

## 1. Definición

El reto se trata de crear una pequeña aplicación 100% por encargo, que consta de tres componentes principales: caja de búsqueda, visualización de resultados, y la descripción del detalle del producto.

Para el desarrollo me compartieron los siguientes archivos en png para conocer el look & feel:

<div align='center'>
  Caja de búsqueda:
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/01_Buscador.png?alt=media&token=409147bc-46a2-4a11-9eb3-eecba64befb7"/>
  
  Visualización de resultados:
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/02_Resultados.png?alt=media&token=f78d92e8-f6b1-41d6-a47a-f56235f6ee8a"/> 
  
  Descripción del detalle de producto:
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/03_Detalle.png?alt=media&token=411dd4a3-eb30-4f3b-91e0-ddc0afa6d088"/> 
</div>

## 2. Objetivos

- [ ] HTML
- [ ] JS (React)
- [ ] CSS (Sass)
- [ ] Node >= 6


Así como considerar:

- [ ] Usabilidad
- [ ] SEO
- [ ] Performance
- [ ] Escalabilidad
- [ ] Pruebas unitarias

## 3. Especificaciones

- [ ] Construir las tres vistas antes mencionadas
- [ ] Las vistas deben ser navegables de manera independiente y contar con su propia url
- [ ] Construir y consultar endpoints específicos para ser utilizados desde las vistas
- [ ] Devolver el resultado del consumo con un formato específico

## 4. Funcionalidad

- [ ] En la vista de caja de búsqueda, se debe poder ingresar el producto a buscar.
- [ ] Al enviar el formulario navegar a la vista de Resultados de búsqueda, se visualizan solo 4 productos.
- [ ] Al hacer click sobre un producto, deberá navegar a la vista de Detalle de Producto.
- [ ] Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

## 5. Instrucciones

- Clonar el proyecto con el siguiente comando `git clone https://github.com/fer-solis/challengeML.git` dentro de una carpeta local en su equipo y **entrar a la carpeta challengeML**
- `npm install`: para tener las librerías ocupadas en el proyecto
- `npm start`: Debe levantarse primero React, por lo general será en `http://localhost:3000/`
- Ahora que ya podemos ver el proyecto, es posible verlo en inspeccionar Responsive porque utilicé breakpoints para que después no se arrugue el diseño para que entre en pantallas más chicas. Así podemos partir de cómo se ve y comporta la aplicación en una pantalla y entorno móvil hasta una pantalla web
- `npm run test`: es para correr test realizados

## 6. Extras

- Acostumbro a trabajar bajo la metodología mobile first, en este caso empecé con versión web porque fue la base que se me compartió pero decidí trabajar también la versión tablet y mobile para que sea un sitio responsive acomodándolo según mi criterio.
- Se pide la entrega en repositorio de Github pero decidí publicarlo sobre un subdominio
- [ ] **https://landing.helmmxfarma.com/**
- Utilizo React 18.2.0, Bootstrap, Redux, Helmmx, Jest


## 7. Resultados

Evidencia app funcionando:

<div align='center'>
 
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202022-08-09%20a%20la(s)%2015.47.09.png?alt=media&token=556d8e26-a353-43a2-93db-095b0af142c2"/>
  
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202022-08-09%20a%20la(s)%2015.47.30.png?alt=media&token=1d58ed17-3f59-40eb-a111-884111d7a806"/> 
  
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202022-08-09%20a%20la(s)%2015.48.15.png?alt=media&token=a1b5e2ce-63b6-465f-9f7f-c68726a6d8ff"/> 
  
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202022-08-09%20a%20la(s)%2015.48.30.png?alt=media&token=5b9c7599-516d-4306-a04c-f55cc10ac9ae"/>
  
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202022-08-09%20a%20la(s)%2015.49.08.png?alt=media&token=bf065c30-704d-42d9-bcec-adde5422b76c"/> 
  
<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202022-08-09%20a%20la(s)%2015.49.48.png?alt=media&token=9f6acc74-93be-4d04-b64f-206784cf4956"/> 

<img align='center' src="https://firebasestorage.googleapis.com/v0/b/personal-13210.appspot.com/o/Captura%20de%20Pantalla%202022-08-09%20a%20la(s)%2015.49.20.png?alt=media&token=4d05cb04-464f-441c-88a4-33016e68f1e7"/> 
</div>

Evidencia Test Unitarios:

https://user-images.githubusercontent.com/75195386/183755231-65733460-de82-44c9-b2fe-deb1616bea78.mov

