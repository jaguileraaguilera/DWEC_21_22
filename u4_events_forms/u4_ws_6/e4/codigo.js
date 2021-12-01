/* No se porqué no funciona cuando en la página no hay ninguna cookie anterior.
Si hay al menos una, las tres funcionan perfectamente */

// a) crearCookie(identificador, valor, fechaExpiracion)

function crearCookie(identificador, valor, edad_max){
    document.cookie = identificador + "=" + valor + "; max-age=" + edad_max;
}

// b) leerCookie(identificador)

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

// c) borrarCookie()

function borrarCookie(identificador) {
    crearCookie(identificador, '', "0");
}

setCookie("mi_cookie", "hola", "5000");
