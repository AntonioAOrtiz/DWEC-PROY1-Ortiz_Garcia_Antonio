// Datos de la tabla
let datosTabla = [[1, " Lebron James",38+" PP"],[2," Kevin Durant",37.2+" PP"],[3," James Harden",37.1+" MPP"],[4," Luka Doncic",36.2+" PP"],[5," Devin Booker",36+" PP"]];

//Función para crear una tabla a partir de los datos de una matriz.
function crearTabla(datosTabla) {
    //Creamos los elementos de la tabla y los guardamos en variables.
    let tabla = document.createElement('table');
    let thead = document.createElement('thead');
    let cuerpoTabla = document.createElement('tbody');
    //Obtenemos el elementos HTML donde se colocara la tabla
    let section = document.getElementById("contTabla");
    // Obtenemos el botón que mostrará la tabla.
    let boton = document.getElementById("botonMinuto");
    // Creamos los elementos de la tabla para el encabezado.
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('td');
    heading_1.innerHTML = "MINUTOS";
    
    // Bucle que crear la tabla HTML a partir de los datos del array. Por cada array monta el tr y los td y mete los datos en los td.
    datosTabla.forEach(function(datosFilas) {
        let fila = document.createElement('tr');
  
        datosFilas.forEach(function(datosCeldas) {
            let celda = document.createElement('td');
            celda.appendChild(document.createTextNode(datosCeldas));
            fila.appendChild(celda);
        });
  
        cuerpoTabla.appendChild(fila);
    });
    // Montamos la estructura de la tabla en la página web con las herencias.
    tabla.appendChild(thead);
    tabla.appendChild(cuerpoTabla);
    section.appendChild(tabla);
    row_1.appendChild(heading_1);
    thead.appendChild(row_1);
    // Colocamos la tabla antes del botón y hacemos que el botón desaparezca.
    section.insertBefore(tabla,boton);
    boton.style.display= "none";
}

let datos = [[" Michael Olowokandi",10.1,2.2,3,4,5,2,3.1],[" Kevin Durant",9,6,2,1,4,5,3.4],[" James Harden",4,2,3,2,3,4,2.1],[" Luka Doncic",1,1.1,2.3,4.5,2,5,6]];

//Función para crear una tabla a partir de los datos de una matriz.
function crearTablaProducto(datos) {
    //Creamos los elementos de la tabla y los guardamos en variables.
    let tabla = document.createElement('table');
    let cuerpoTabla = document.createElement('tbody');
    //Obtenemos el elementos HTML donde se colocara la tabla
    let section = document.getElementById("contiTabla");
    // Obtenemos el botón que mostrará la tabla.
    
    // Bucle que crear la tabla HTML a partir de los datos del array. Por cada array monta el tr y los td y mete los datos en los td.
    datos.forEach(function(datosFilas) {
        let fila = document.createElement('tr');
  
        datosFilas.forEach(function(datosCeldas) {
            let celda = document.createElement('td');
            celda.appendChild(document.createTextNode(datosCeldas));
            fila.appendChild(celda);
        });
  
        cuerpoTabla.appendChild(fila);
    });
    // Montamos la estructura de la tabla en la página web con las herencias.
    tabla.appendChild(cuerpoTabla);
    section.appendChild(tabla);
    // Damos la clase a la tabla para que se apliquen estilos.
    tabla.classList.add = "jugadores";
    
    
}