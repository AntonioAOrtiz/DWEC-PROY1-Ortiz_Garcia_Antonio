Hay dos formas más de incluir los estilos CSS en la página web:

1. CSS interno con la etiqueta <style> en el html:
<style>
    li{
    list-style: none;
    display: inline-block;
    margin: 2em;
    color: white;
    
}
</style>

No es recomendable su uso ya que poner todos los estilos en el documento html va a hacer que sea mucho más difícil trabajar con el HTML y entender el código.

2. CSS en línea en las etiquetas html:
<h1  font-family:'Passion One', cursive;text-align: center;font-size: 3rem;color: blue;margin-top: 30px;
margin-bottom: 30px;>LÍDERES NBA</h1>

No es recomendable su uso porque sobrecarga mucho las etiquetas HTML y el motivo principal, que es estilo solo 
se aplica a ese h1 y no a todos los h1 de la página. Con CSS podemos hacer que todos los elementos tengan los
mismo estilos y además cambiar algun en concreto con el uso de selectores de clases o id.

La manera más recomendable de incluir estilos CSS es codificar los estilos en un fichero CSS a parte y enlazarlo al HTML con esta etiqueta en el documento HTML: <link rel="stylesheet" href="css/style.css">. 
