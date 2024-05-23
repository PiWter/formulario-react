const soloNumeros = /^[0-9]*$/;
const soloLetras = /^[A-z]*$/;
const validarCorreo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

export function ComprobarNombre(nombre) {
    if (nombre.length > 0 & soloLetras.test(nombre)) {
        return true
    } else {
        document.getElementById("nombreIncorrecto").style.display = 'block';
        return false;
    }
}


export function ComprobarApellido(apellido) {
    if (apellido.length > 0 & soloLetras.test(apellido)) {
        return true
    } else {
        document.getElementById("apellidoIncorrecto").style.display = 'block';
        return false;
    }
}

export function ComprobarNumero(numero) {
    if (numero.length == 9 & soloNumeros.test(numero)) {                       
        return true
    } else {
        document.getElementById("numeroIncorrecto").style.display = 'block';
        return false;
    }
}

export function ComprobarCorreo(correo) {
    if (correo.length > 0 & validarCorreo.test(correo)) {
        return true
    } else {
        document.getElementById("correoIncorrecto").style.display = 'block';
        return false;
    }
}