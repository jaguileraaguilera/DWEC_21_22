var crd;
function encuentraPosicion(pos) {
    crd = pos.coords;
    ver_posicion(crd);
}

function ver_posicion(crd){
    document.write('Latitud, longitud: ' + crd.latitude + ', ' + crd.longitude);
}


function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(encuentraPosicion, error);