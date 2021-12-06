function validaAcceso(){
    let nombre = document.getElementById("nombreacceso").value;
    let password = document.getElementById("passwordacceso").value;
    let espacio = /^\s+$/;
    let nombreUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
    let condicionesPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if( nombre == null || nombre.length == 0 || espacio.test(nombre) ) {
        alert("No se ha introducido el nombre de usuario");
        return false;
    }
    else if( !(nombreUsuario.test(nombre)) ){
        alert("El nombre de usuario solo puede tener de 4 a 16 caracteres y solo puede tener letras, números, - y _ ");
        return false;
    }
    else if(password == null || password.length == 0 || espacio.test(password) ) {
        alert("No se ha introducido la contraseña");
        return false;
    }
    else if( !(condicionesPassword.test(password)) )
    {
        alert("La contraseña debe tener: \nEntre 8 y 15 caracteres.\n Al menos letra mayúscula.\nAl menos una letra minúscula.\nAl menos un dígito.\n Sin espacios en blanco.\nAl menos un carácter especial.\nTodos estos requisitos son para su propia seguridad.");
        return false;
    }
    
    return true;
}

function validaContacto(){
    let nombre = document.getElementById("nombrecontacto").value;
    let email = document.getElementById("emailcontacto").value;
    let mensaje = document.getElementById("mensajecontacto").value;
    let espacio = /^\s+$/;
    let nombreContacto = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    let condicionesEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;

    if( nombre == null || nombre.length == 0 || espacio.test(nombre) ) {
        alert("No se ha introducido el nombre");
        return false;
    }
    else if( !(nombreContacto.test(nombre)) ){
        alert("El nombre introducido no es correcto.")
    }
    else if(email == null || email.length == 0 || espacio.test(email) ) {
        alert("No se ha introducido el email");
        return false;
    }
    else if( !(condicionesEmail.test(email)) ) {
        alert("La dirección de email no es válida.")
        return false;
    }
    else if( mensaje == null || mensaje.length == 0 || espacio.test(mensaje) ) {
        alert("No se ha introducido ningún mensaje");
        return false;
    }

    else if(mensaje.value.length > 255){
        alert("El mensaje debe tener como máximo 255 caracteres.")
        return false;
    }

    return true;
}

function validaRegistro(){
    let nombre = document.getElementById("nombreregistro").value;
    let email = document.getElementById("emailregistro").value;
    let password = document.getElementById("passwordregistro").value;
    let espacio = /^\s+$/;
    let nombreUsuario = /^[a-zA-Z0-9\_\-]{4,16}$/;
    let condicionesEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/;
    let condicionesPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if( nombre == null || nombre.length == 0 || espacio.test(nombre) ) {
        alert("No se ha introducido el nombre de usuario");
        return false;
    }
    else if(!(nombreUsuario.test(nombre))){
        alert("El nombre de usuario solo puede tener de 4 a 16 caracteres y solo puede tener letras, números, - y _ ");
        return false;
    }
    else if(email == null || email.length == 0 || espacio.test(email) ) {
        alert("No se ha introducido el email");
        return false;
    }
    else if( !(condicionesEmail.test(email)) ) {
        alert("La dirección de email no es válida.")
        return false;
    }
    else if(password == null || password.length == 0 || espacio.test(password) ) {
        alert("No se ha introducido la contraseña");
        return false;
    }
    else if( !(condicionesPassword.test(password)) )
    {
        alert("La contraseña debe tener: \nEntre 8 y 15 caracteres.\n Al menos letra mayúscula.\nAl menos una letra minúscula.\nAl menos un dígito.\n Sin espacios en blanco.\nAl menos un carácter especial.\nTodos estos requisitos son para su propia seguridad.");
        return false;
    }

    return true;
}