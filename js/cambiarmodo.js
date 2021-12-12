

function modoOscuro() { 
    let cuerpoweb = document.body; 
    let header = document.getElementById("header");
    let bienvenida = document.getElementById("bienvenida"); 
    let footer = document.getElementById("footer");
    
    cuerpoweb.classList.toggle("oscuro"); 
    header.classList.toggle("oscuro"); 
    bienvenida.classList.toggle("oscuro"); 
    footer.classList.toggle("oscuro");
    
    
}

function modoClaro(){
    let cuerpoweb = document.body; 
    let header = document.getElementById("header");
    let bienvenida = document.getElementById("bienvenida"); 
    let footer = document.getElementById("footer");
    
    cuerpoweb.classList.toggle("claro"); 
    header.classList.toggle("claro"); 
    bienvenida.classList.toggle("claro"); 
    footer.classList.toggle("claro");
    
}