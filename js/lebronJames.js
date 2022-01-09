// Me aseguro que realizo la petición despúes de cargar toda la página.
document.addEventListener("DOMContentLoaded", function() { 
    //Realizo la petición a la API.        
    fetch("https://free-nba.p.rapidapi.com/players/237", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-nba.p.rapidapi.com",
		"x-rapidapi-key": "44a405d1f1msh2975485fbc7a171p19feb1jsne666bcf31454"
	}
})      
        .then(respuesta => {
            // Devuelvo la respuesta transformada en json
            return respuesta.json(); 
        })//Recibo los datos en una nueva promesa y muestro los datos que me interesan en la web.
        .then(data =>{
            //Elemento HTML donde se mostrarán los datos.
            const lebron = document.getElementById("lebron");
            lebron.innerHTML = data.first_name + " " + data.last_name + "<br>" + "Equipo: " + data.team.full_name + "<br>" + "Posición: " + data.position + "<br>" + "Altura: " + data.height_feet + " Ft." + "<br>" + "Peso: " + data.weight_pounds + " lb.";
            
            //Si la petición es rechazada muestro por consola que algo ha salido mal.
        }).catch(()=> {
            console.log('Algo salió mal');
        })

});