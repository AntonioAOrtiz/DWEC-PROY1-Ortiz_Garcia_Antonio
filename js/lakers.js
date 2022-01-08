

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		const datos = JSON.parse(this.responseText);
        console.log(datos);
        
        const htmlLakers = document.getElementById("lakers");
        htmlLakers.innerHTML = datos.full_name + " " + "("+datos.abbreviation+")" + "<br>" + "Ciudad: " + datos.city + "<br>" + "Conferencia: " + datos.conference + "<br>" + "División: " + datos.division;
        
	}
});

xhr.open("GET", "https://free-nba.p.rapidapi.com/teams/14");
xhr.setRequestHeader("x-rapidapi-host", "free-nba.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "44a405d1f1msh2975485fbc7a171p19feb1jsne666bcf31454");


xhr.send();





