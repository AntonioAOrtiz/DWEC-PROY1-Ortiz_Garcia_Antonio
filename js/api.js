document.addEventListener("DOMContentLoaded", function() { 
                
    fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "44a405d1f1msh2975485fbc7a171p19feb1jsne666bcf31454"
    }
})
        .then(respuesta => {
            // Devuelvo la respuesta transformada en json
            return respuesta.json(); 
        })
        .then(data => {
            let log = document.getElementById("log");
            let table= document.createElement("table");
            // Se reciben los datos dentro de una nueva promesa, recorro los datos y los proceso
            (data.data).forEach(element => {               

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
    ).catch(()=> {
        console.log('Algo salió mal');
    })

});