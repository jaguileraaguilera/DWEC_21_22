var crd;
function encuentraPosicion(pos) {
    crd = pos.coords;
    ver_posicion(crd);
}


function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(encuentraPosicion, error);