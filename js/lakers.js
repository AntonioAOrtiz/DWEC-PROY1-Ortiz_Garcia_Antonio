// Instacia al objeto XMLHttpRequest que realiza la petición a la API
const xhr = new XMLHttpRequest();
// Si las credenciales son correctas
xhr.withCredentials = true;
// Evento en el que si la petición se realiza correctamente se obtiene un Json con los datos de la URL.
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		// Guardo los datos del JSON
        const datos = JSON.parse(this.responseText);
        console.log(datos);
        // Obtengo el elemento HTML donde se va a mostrar la información
        const htmlLakers = document.getElementById("lakers");
        // Muestro la información que me interesa de la API
        htmlLakers.innerHTML = datos.full_name + " " + "("+datos.abbreviation+")" + "<br>" + "Ciudad: " + datos.city + "<br>" + "Conferencia: " + datos.conference + "<br>" + "División: " + datos.division;
        
	}
    // Si hay algún problema muestro un mensaje de cargando.
    else{
        htmlLakers.innerHTML = "Cargando...";
    }
});
// URL de la API de la cual obtengo los datos.
xhr.open("GET", "https://free-nba.p.rapidapi.com/teams/14");
xhr.setRequestHeader("x-rapidapi-host", "free-nba.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "44a405d1f1msh2975485fbc7a171p19feb1jsne666bcf31454");

//Envío la petición al servidor.
xhr.send();





