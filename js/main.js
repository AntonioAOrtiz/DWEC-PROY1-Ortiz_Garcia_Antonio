document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("acceso").addEventListener('submit', validaAcceso); 
});

function validaAcceso(evento){
    evento.preventDefault();
    let nombre = document.getElementById("nombreacceso").value;
    let password = document.getElementById("passwordacceso").value;
    let espacio = /^\s+$/;
    let nombreUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
    let condicionesPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    

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
    
    this.submit();
    document.write("Usuario y contraseña válidos");
    setTimeout( function() {window.location.href = "index.html";}, 4000 );
    
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contacto").addEventListener('submit', validaContacto); 
});

function validaContacto(evento){
    evento.preventDefault();
    let nombre = document.getElementById("nombrecontacto").value;
    let email = document.getElementById("emailcontacto").value;
    let mensaje = document.getElementById("mensajecontacto").value;
    let espacio = /^\s+$/;
    let nombreContacto = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let condicionesEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;
    

    if( nombre == null || nombre.length == 0 || espacio.test(nombre) ) {
        alert("No se ha introducido el nombre");
        return;
    }
    else if( !(nombreContacto.test(nombre)) ){
        alert("El nombre introducido no es correcto.")
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

    this.submit();
    document.write("Mensaje enviado correctamente");
    setTimeout( function() {window.location.href = "index.html";}, 4000 );
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registro").addEventListener('submit', validaRegistro); 
});

function validaRegistro(evento){
    evento.preventDefault();
    let nombre = document.getElementById("nombreregistro").value;
    let email = document.getElementById("emailregistro").value;
    let password = document.getElementById("passwordregistro").value;
    let espacio = /^\s+$/;
    let nombreUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
    let condicionesEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;
    let condicionesPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    

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

    this.submit();
    document.write("Te has registrado correctamente");
    setTimeout( function() {window.location.href = "index.html";}, 4000 );
}