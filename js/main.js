// Evento para que la función se cargue después de que se cargue la página.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("acceso").addEventListener('submit', validaAcceso); 
});

//Expresiones regulares para la validación de formularios.
const espacio = /^\s+$/; // Solo hay espacios en blanco.
//El nombre de usuario solo puede tener de 4 a 16 caracteres y solo puede tener letras, números, - y _ 
const nombreUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
//La contraseña debe tener: Entre 8 y 15 caracteres. Al menos letra mayúscula. Al menos una letra minúscula. Al menos un dígito. Sin espacios en blanco.Al menos un carácter especial.
const condicionesPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/; 
// El email debe tener la estructura de un email.
const condicionesEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;
// Nos aseguramos con esta expresión que el usuario introduzca nombres y apellidos reales.
const nombreContacto = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

// Números aleatorios para los captcha.
let numero1 = Math.floor((Math.random() * (10-1))+ 1 );
let numero2 = Math.floor((Math.random() * (10-1))+ 1 );
//El resultado del captcha va a ser la suma de estos dos números.
let captcha = numero1 + numero2;
//Pintamos la suma para que el usuario la vea. pintar es el id del la etiqueta html donde se va a pintar la suma.
pintar.innerHTML = numero1 + " + " + numero2;

//Función para validar el formulario de acceso. Recibe un evento por parámetro
function validaAcceso(evento){
    //Evitamos que el evento se ejecute hasta que se cumplan todas las condiciones de la validación.
    evento.preventDefault();
    // Obtenemos el valor de lo que el usuario escribe en los inputs.
    let nombre = document.getElementById("nombreacceso").value;
    let password = document.getElementById("passwordacceso").value;
    let input = document.getElementById("inputCaptchaAcceso").value;
    
    // Si lo que el usuario introduce no cumple con las condiciones de validación se le muestra un mensaje con el error y hacemos return.
    if( nombre == null || nombre.length == 0 || espacio.test(nombre) ) {
        alert("No se ha introducido el nombre de usuario");
        return;
    }
    else if( !(nombreUsuario.test(nombre)) ){
        alert("El nombre de usuario solo puede tener de 4 a 16 caracteres y solo puede tener letras, números, - y _ ");
        return;
    }
    else if(password == null || password.length == 0 || espacio.test(password) ) {
        alert("No se ha introducido la contraseña");
        return;
    }
    else if( !(condicionesPassword.test(password)) )
    {
        alert("La contraseña debe tener: \nEntre 8 y 15 caracteres.\nAl menos letra mayúscula.\nAl menos una letra minúscula.\nAl menos un dígito.\nSin espacios en blanco.\nAl menos un carácter especial.\nTodos estos requisitos son para su propia seguridad.");
        return;
    }
    else if(input != captcha){
        alert("Captcha incorrecto");
        return;
    }
    // Si cumple todas las condiciones enviamos el formulario mostramos una página con un mensaje de que todo ha ido bien y regresamos a la página de inicio.
    this.submit();
    document.write("Usuario y contraseña válidos");
    setTimeout( function() {window.location.href = "index.html";}, 4000 );
    
}
// Evento para que la función se cargue después de que se cargue la página.
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contacto").addEventListener('submit', validaContacto); 
});
// Función para validar el formulario de contacto.
function validaContacto(evento){
    //Evitamos que el evento se ejecute hasta que se cumplan todas las condiciones de la validación.
    evento.preventDefault();
     // Obtenemos el valor de lo que el usuario escribe en los inputs.
    let nombre = document.getElementById("nombrecontacto").value;
    let email = document.getElementById("emailcontacto").value;
    let mensaje = document.getElementById("mensajecontacto").value;
     
    let input = document.getElementById("inputCaptchaContacto").value;
    
     // Si lo que el usuario introduce no cumple con las condiciones de validación se le muestra un mensaje con el error y hacemos return.
    if( nombre == null || nombre.length == 0 || espacio.test(nombre) ) {
        alert("No se ha introducido el nombre");
        return;
    }
    else if( !(nombreContacto.test(nombre)) ){
        alert("El nombre introducido no es correcto.");
        return;
    }
    else if(email == null || email.length == 0 || espacio.test(email) ) {
        alert("No se ha introducido el email");
        return;
    }
    else if( (condicionesEmail.test(email)) ) {
        alert("La dirección de email no es válida.")
        return;
    }
    else if( mensaje == null || mensaje.length == 0 || espacio.test(mensaje) ) {
        alert("No se ha introducido ningún mensaje");
        return;
    }

    else if(mensaje.length > 255){
        alert("El mensaje debe tener como máximo 255 caracteres.")
        return;
    }
    else if(input != captcha){
        alert("Captcha incorrecto");
        return;
    }
    // Si cumple todas las condiciones enviamos el formulario mostramos una página con un mensaje de que todo ha ido bien y regresamos a la página de inicio
    this.submit();
    document.write("Mensaje enviado correctamente");
    setTimeout( function() {window.location.href = "index.html";}, 4000 );
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registro").addEventListener('submit', validaRegistro); 
});
// Evento para que la función se cargue después de que se cargue la página.
function validaRegistro(evento){
    //Evitamos que el evento se ejecute hasta que se cumplan todas las condiciones de la validación.
    evento.preventDefault();
    // Obtenemos el valor de lo que el usuario escribe en los inputs.
    let nombre = document.getElementById("nombreregistro").value;
    let email = document.getElementById("emailregistro").value;
    let password = document.getElementById("passwordregistro").value;

    let input = document.getElementById("inputCaptchaRegistro").value;
    
    // Si lo que el usuario introduce no cumple con las condiciones de validación se le muestra un mensaje con el error y hacemos return.
    if( nombre == null || nombre.length == 0 || espacio.test(nombre) ) {
        alert("No se ha introducido el nombre de usuario");
        return;
    }
    else if(!(nombreUsuario.test(nombre))){
        alert("El nombre de usuario solo puede tener de 4 a 16 caracteres y solo puede tener letras, números, - y _ ");
        return;
    }
    else if(email == null || email.length == 0 || espacio.test(email) ) {
        alert("No se ha introducido el email");
        return;
    }
    else if( (condicionesEmail.test(email)) ) {
        alert("La dirección de email no es válida.")
        return;
    }
    else if(password == null || password.length == 0 || espacio.test(password) ) {
        alert("No se ha introducido la contraseña");
        return;
    }
    else if( !(condicionesPassword.test(password)) )
    {
        alert("La contraseña debe tener: \nEntre 8 y 15 caracteres.\nAl menos letra mayúscula.\nAl menos una letra minúscula.\nAl menos un dígito.\nSin espacios en blanco.\nAl menos un carácter especial.\nTodos estos requisitos son para su propia seguridad.");
        return;
    }
    else if(input != captcha){
        alert("Captcha incorrecto");
        return;
    }
     // Si cumple todas las condiciones enviamos el formulario mostramos una página con un mensaje de que todo ha ido bien y regresamos a la página de inicio.
    this.submit();
    document.write("Te has registrado correctamente");
    setTimeout( function() {window.location.href = "index.html";}, 4000 );
}