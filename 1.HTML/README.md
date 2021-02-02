# HTML basics

Conceptos basicos de sintaxis de HTML 5.

## Indice

- [Estructura](#Estructura-)
- [Encabezados](#encabezados-)
- [Parrafos](#parrafos-)
- [Formato de texto](#formato-de-texto-)
- [Metadatos](#metadatos-)
- [Enlaces](#enlaces-)
- [Imagenes y videos](#imagenes-y-videos-)
- [Listas](#listas-)
- [Tablas](#tablas-)
- [Elementos semanticos](#elementos-semanticos-)

## Estructura 🚀

Estructura basica de un fichero html.

Se declara el tipo de fichero:

```html
<!DOCTYPE html>
```

La estructura del fichero es la siguiente:

```html
<html>
    
    <!-- Se crea una nueva etiqueta, head contiene informacion sobre los metadatos -->
    <head>
        
        <!-- Titulo para nuestro documento -->
        <title>HTML Y CSS3</title>
    
    <!-- Se cierra la etiqueta cabecera -->
    </head>
    
    <!-- Body, elemento que contiene el "cuerpo" de la pagina-->
    <body>
        
    </body>
    
</html>
<!-- Este es el cierre de la etiqueta html del principio -->
```

[Vuelta al indice](#indice)

## Encabezados 💼

Estos son los distintos tipos de encabezados que se usan:

```html
<!-- El h1 es el titulo mas importante, al hacer busquedas en google es el que aparecera y el que google cogerá -->
<h1>Encabezado grande "principal"</h1>
<hr><!-- Muestra una raya para dividir -->
<h2>Esto es un h2</h2>
<h3>Esto es un h3</h3>
<h4>Esto es un h4</h4>
<h5>Esto es un h5</h5>
<h6>Esto es un h6</h6>
```

Los encabezados van del 1 al 6 en orden de importancia

[Vuelta al indice](#indice)

## Parrafos 📂

La sintaxis de los parrafos es la siguiente, hay distintos tipos:

```html
<pre>Esto es un parrafo 
            
al que se le establece 
            
un espaciado fijo (el que dejamos nosotros escrito literalmente)
</pre>
```

```html
<p>Esto es un parrafo</p>
<!-- Entre uno y otro se crea automaticamente un salto de linea-->
<p>Esto es un segundo parrafo</p>
```

```html
<br>
<p>Usando br añadimos un salto de linea</p>
```

[Vuelta al indice](#indice)

## Formato de texto 🎨

El texto de los parrafos puede editarse de las siguientes formas:

### Negrita

```html
<p><b>Texto en negrita b</b></p>  
<p><strong>Texto en negrita strong</strong></p><!--Tiene mayor importancia-->
```

### Cursiva

```html
<p><i>Texto en cursiva</i></p>
<p><em>Texto enfatizado</em></p> <!--Tiene mayor importancia-->
```

### Marcado

```html
<p><mark>Texto subrayado en amarillo</mark></p>
```

### Tachado

```html
<p><del>Texto tachado</del></p>
```

### Subrayado

```html
<p><ins>Texto con subrayado bajo</ins></p>
```

### Subindice

```html
<p><sub>Texto en subindice</sub></p>
```

### Superindice

```html
<p><sup>Texto en superindice</sup></p>
```

### Texto centrado

```html
<center><p>Texto centrado</p></center>

<p><center>Texto centrado</center></p>
```

### Tipo codigo

```html
<code>
<!--Permite darle un formato especifico al texto como si fuera código de ordenador-->
</code>
```

[Vuelta al indice](#indice)

## Metadatos ℹ️

En html cada caracter tiene asociado un código, ese código viene dado por:

```html
<meta charset="UTF-8">
```

Define el autor de la pagina:

```html
<meta name="author" content="IZRA">
```

Define la descripciopn de la pagina web

```html
<meta name="description" content="Descripcion que se muestra cuando se encuentra la pagina a traves de un buscador">
```

Describe claves para los motores de busqueda:

```html
<meta name="keywords" content="html, css, js">
```

[Vuelta al indice](#indice)

## Enlaces 🔗

Como añadir enlaces a nuestra página web. Hay varias formas:

Poniendo la URL absoluta:

```html
<a href="https://www.google.com/">Enlace hacia google</a>
```

Si queremos que el enlace se abra en una pestaña nueva:

```html
<a href="https://www.google.com/" target="blank">Enlace hacia google</a>
```

Enlace a documentos de nuestro propia pagina:

```html
<a href="index.html" target="blank">Enlace hacia index local</a>
```

Si el archivo está en otra carpeta, entonces:

```html
<a href="/1.HTML/6. Enlaces html/index.html" target="blank">Enlace hacia index local</a>
```

[Vuelta al indice](#indice)

## Imagenes y videos 📷

### Imagenes

Para insertar imagenes en nuestra web lo haremos de la siguiente manera:

```html
<img 
    style="width:500px;" 
    src="img/fotis-fotopoulos-LJ9KY8pIH3E-unsplash.jpg"
    alt="code">
```

Con width se establece el tamaño en pixeles de la imagen, en src escribimos la ruta de la imagen y con alt establecemos keywords para el SEO de la página y para añadir descripciones..

### Videos

Para insertar videos en nuestra web lo haremos de la siguiente manera:

```html
<video width="340px;" height="240px;" autoplay controls>
    <source src="img/Layout.mp4" type="video/mp4">
                Tu navegador no pudo cargar el video

</video>
```

Para poder tener botones de play, pantalla completa, etc.. necesitaremos añadir controls.
Si queremos que el video se reproduzca automaticamente usaremos autoplay.
Para darle un tamaño en específico al video usaremos width y height.

También podemos añadir videos desde YouTube de la siguiente forma:

1. Darle a compartir al video de YT en cuestión.
2. Seleccionar la opción de incorporar y copiar el código que nos aparecerá en nuestro archivo .html.

```html
<center><iframe
        width="560"
        height="315" 
        src="https://www.youtube.com/embed/3r4Bn7UFHvA" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe></center>

```

[Vuelta al indice](#indice)

## Listas 📑

### Listas desordenadas

```html
<ul>
    <!--li es para especificar los elementos de una lista-->
    <li>HTML5</li>
    <li>C++</li>
    <li>C</li>
</ul>
```

### Listas ordenadas

```html
<ol>
    <li>HTML5</li>
    <li>C++</li>
    <li>C</li>
</ol>
```

[Vuelta al indice](#indice)

## Tablas 📝

```html
<table>
    <!--tr es una fila de la tabla, table row-->
    <tr>
        <!--th titulo de cada columna, table header-->
        <th>Frutas</th>
        <th>Carnes</th>
    </tr>

    <tr>
        <!--td datos en cada una de las columnas, el primero que escribamos irá a la columna uno y así sucesivamente, Table data-->
        <td>Manzana</td>
        <td>Pollo</td>
    </tr>
</table>
```

[Vuelta al indice](#indice)

## Elementos semanticos 📰

Estos son elementos que le dan tanto significado al navegador como al progaramador otorgandole claridad.

### Header

Especififca un encabezado.

```html
<header>
    <a href=""><img src="/1.HTML/7. Imagenes y videos/img/logo.PNG" alt="logo"></a>
    <h1>Esto es el encabezado</h1>
</header>
```

### Nav

Sección de la página que enlaza con otras paginas o fuentes de la misma.

```html
<nav>
    <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Descripcion</a></li>
        <li><a href="#">Sobre mi</a></li>
    </ul>
        
</nav>
```

### Section and article

Un documentoa article representa un contenido completo de un documento, pagina o aplicacion de sitio web, se utiliza para posts de foros, una entrada de un blog combinado con la etiqueta section.

```html
<section>
    <article>
        <p>February 22, 2019</p>
            
        <h2>
            <a href="#">HTML elementos semanticos</a>
        </h2>

        <div>
            Contenido de la publicación
        </div>

        <section>
            <p><a href="#">3 comentarios</a></p>
        </section>
    </article>
</section>
```

### Aside

Muestra contenido relacionado.

```html
<aside>
    <div>CSS</div>
    <div>C++</div>
    <div>C</div>
</aside>
```

### Footer

Añade un pie de página.

```html
<footer>
    <p>&#169; 2019&#45; <a href="#">IZRA</a></p>
</footer>
```

[Vuelta al indice](#indice)

## Construido con 🛠️

* [VS Code](https://code.visualstudio.com/) - Code editor used

[Vuelta al indice](#indice)

## Fuentes 📢

* [Curso de HTML5 y CSS3 desde basico a avanzado](https://www.udemy.com/course/curso-de-html5-y-css3-desde-basico-a-avanzado/learn/lecture/16496240#announcements)

[Vuelta al indice](#indice)