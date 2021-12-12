// Array con las imágenes que forman parte del carrusel.
let imagenes = ['img/lakers.png','img/warriors.png','img/bulls.png','img/nets.png'];
// Contador para controlar la posición que queremos del array de imágenes.
let contador = 0;
// Función que monta el carrusel de imágenes a partir de las imágenes en un array.Recibe por parámetro el contenedor donde va a ir el carrusel
function carrusel(contenedor){
    //Evento que ejecuta una función al clickar en una de las flechas del carrusel.
    contenedor.addEventListener('click',evento =>{
        // Obtenemos las flechas de atras, delante, la imagen y evento al clickar las flechas.
        let atras = contenedor.querySelector(".atras");
        let adelante = contenedor.querySelector(".adelante");
        let img = contenedor.querySelector("img");
        let target = evento.target;

        // Si el usuario pincha atrás el carrusel va a una posición anterior y si estaba en la primera imagen va a la última.
        if(target == atras){
            if(contador > 0){
                img.src = imagenes[contador -1];
                contador --;
            }else{
                img.src = imagenes[imagenes.length -1];
                contador = imagenes.length - 1;
            }
        // Si el usuario pincha adelante el carrusel va a una posicion delante y si estaba en la última imagen va a la primera.
        }else if(target == adelante){
            if(contador < imagenes.length  -1){
                img.src = imagenes[contador + 1];
                contador ++;
            }else{
                img.src = imagenes[0];
                contador = 0;
            }
        }
    
    });
}
// No aseguramos que el evento se haga despues de cargar la página.
document.addEventListener("DOMContentLoaded",() =>{
    // Obtenemos el elemento HTML donde va a ir el carrusel.
    let contenedor = document.querySelector('.contenedor');
    // Ejecutamos el carrusel que se mostrará en el contenedor que hemos obtenido.
    carrusel(contenedor);
});