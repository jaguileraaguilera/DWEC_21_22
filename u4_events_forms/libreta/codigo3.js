window.addEventListener('deviceorientation', trataOrientacion);

function trataOrientacion(e) {
    document.getElementById("mi_imagen").style.transform = "rotate(" + e.alpha + "deg) skewY(" + e.beta + "deg)";
}

