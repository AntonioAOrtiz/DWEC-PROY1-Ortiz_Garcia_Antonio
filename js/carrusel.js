let imagenes = ['img/lakers.png','img/warriors.png','img/bulls.png','img/nets.png'];
let contador = 0;

function carrusel(contenedor){
    contenedor.addEventListener('click',evento =>{
        let atras = contenedor.querySelector(".atras");
        let adelante = contenedor.querySelector(".adelante");
        let img = contenedor.querySelector("img");
        let target = evento.target;

        if(target == atras){
            if(contador > 0){
                img.src = imagenes[contador -1];
                contador --;
            }else{
                img.src = imagenes[imagenes.length -1];
                contador = imagenes.length - 1;
            }
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

document.addEventListener("DOMContentLoaded",() =>{
    let contenedor = document.querySelector('.contenedor');

    carrusel(contenedor);
});