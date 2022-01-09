// Me aseguro que realizo la petición despúes de cargar toda la página.
document.addEventListener("DOMContentLoaded", function() { 
    //Realizo la petición a la API.         
    fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "44a405d1f1msh2975485fbc7a171p19feb1jsne666bcf31454"
    }
})      //Devuelvo un json con la respuesta a la petición.
        .then(respuesta => {
            // Devuelvo la respuesta transformada en json
            return respuesta.json(); 
        })
        .then(data => {
            //Elemento HTML donde se mostrarán los datos obtenidos y procesados.
            let log = document.getElementById("log");
            let table= document.createElement("table");
            // Se reciben los datos dentro de una nueva promesa, recorro los datos y los proceso.
            //Recorro los datos obtenidos, creo una tabla con los datos que me interesan y lo muestro en la web.
            (data.data).forEach(element => {               
                //Creo la estructura HTML para la tabla donde se mostrarán los datos.
                let row = document.createElement("tr");
                let tdTeam = document.createElement("td");
                let textTeam = document.createTextNode(element["full_name"]);
                let a = document.createElement("a");
                a.setAttribute("href",element.name + ".html");
                a.appendChild(textTeam);
                tdTeam.appendChild(a);
                row.appendChild(tdTeam);
                table.appendChild(row);
                
                log.appendChild(table);
                

           }
           );
        
        }
        //Si se rechaza la petición muestro por consola que algo salió mal.
    ).catch(()=> {
        console.log('Algo salió mal');
    })

});