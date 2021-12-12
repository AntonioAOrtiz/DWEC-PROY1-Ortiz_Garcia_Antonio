// Función para el modo oscuro de la web
function modoOscuro() { 
    // Obtenemos los elementos HTML que forman parte de la página.
    let cuerpoweb = document.body; 
    let header = document.getElementById("header");
    let bienvenida = document.getElementById("bienvenida"); 
    let footer = document.getElementById("footer");
    // Con toggle generamos una clase oscuro en los elementos HTML y en el CSS codificamos los estilos del modo oscuro.
    cuerpoweb.classList.toggle("oscuro"); 
    header.classList.toggle("oscuro"); 
    bienvenida.classList.toggle("oscuro"); 
    footer.classList.toggle("oscuro");
    
    
}
// Función para el modo claro de la web
function modoClaro(){
    // Obtenemos los elementos HTML que forman parte de la página.
    let cuerpoweb = document.body; 
    let header = document.getElementById("header");
    let bienvenida = document.getElementById("bienvenida"); 
    let footer = document.getElementById("footer");
    // Con toggle generamos una clase claro en los elementos HTML y en el CSS codificamos los estilos del modo claro.
    cuerpoweb.classList.toggle("claro"); 
    header.classList.toggle("claro"); 
    bienvenida.classList.toggle("claro"); 
    footer.classList.toggle("claro");
    
}