/* Diseña una web que hará uso de cookies para guardar el nombre del usuario. En caso de no tener
ninguna cookie de ese sitio, deberá preguntar el nombre del usuario y almacenarlo en una cookie que
caducará en 5 minutos. Tras esto saludará al usuario mediante un mensaje en pantalla. En caso de tener
ya creada la cookie deberá leerla y mostrar el mensaje anterior directamente. Deberá proporcionar
también un enlace para borrar la cookie (lo que podríamos llamar 'Cerrar Sesión'). */

function crearCookie(identificador, valor, edad_max) {
    document.cookie = identificador + "=" + valor + "; max-age=" + edad_max;
}

function leerCookie(identificador) {
    let nameEQ = identificador + "="; 
    let ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c[0] == ' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }

    return null;
}

function borrarCookie(identificador) {
    crearCookie(identificador, '', "0");
}

function cerrarSesion() {
    borrarCookie("usuario");
}

function main() {
    var nombre = leerCookie("usuario");
    if (nombre == null) {
        var nombre = prompt("Introduzca su nombre de usuario: ");
        crearCookie("usuario", nombre, "300");
    }

    alert("Bienvenido " + nombre);

    let boton_cierre = document.getElementById("cerrar_sesion");
    boton_cierre.addEventListener("click", cerrarSesion);
}

window.addEventListener("load", main);
