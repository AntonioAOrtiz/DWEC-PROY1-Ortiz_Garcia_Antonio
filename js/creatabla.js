let datosTabla = [[1, " Lebron James",38+" MinutosPP"],[2," Kevin Durant",37.2+" MinutosPP"],[3," James Harden",37.1+" MinutosPP"],[4," Luka Doncic",36.2+" MinutosPP"],[5," Devin Booker",36+" MinutosPP"]];

function crearTabla(datosTabla) {
    let tabla = document.createElement('table');
    let cuerpoTabla = document.createElement('tbody');
    let section = document.getElementById("contTabla")
    let boton = document.getElementById("botonMinuto");
    

    datosTabla.forEach(function(datosFilas) {
        let fila = document.createElement('tr');
  
        datosFilas.forEach(function(datosCeldas) {
            let celda = document.createElement('td');
            celda.appendChild(document.createTextNode(datosCeldas));
            fila.appendChild(celda);
        });
  
        cuerpoTabla.appendChild(fila);
    });
  
    tabla.appendChild(cuerpoTabla);
   
    section.appendChild(tabla);
    
    section.insertBefore(tabla,boton);

    boton.style.display= "none";
}