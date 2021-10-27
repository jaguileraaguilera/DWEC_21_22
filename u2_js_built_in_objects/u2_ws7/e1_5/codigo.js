// SIN TERMINAR

var crd_anterior;
var crd;
var d = 0;

function encuentraPosicion(pos) {
    crd_anterior = crd;
    crd = pos.coords;
    ver_posicion(crd);
    ver_distancia(d);
}

function calcular_distancia(crd, crd_anterior) {
    d += Math.sqrt((crd.latitude - crd_anterior.latitude)**2 + (crd.longitude - crd_anterior.longitude)**2);
}

function ver_distancia(d) {
    document.write('Distancia recorrida: ' + d)
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.watchPosition(encuentraPosicion, error);