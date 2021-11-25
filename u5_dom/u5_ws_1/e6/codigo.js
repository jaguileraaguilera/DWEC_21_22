function inicia() {
    function imagenSiguiente() {
        
    }

    function imagenAnterior() {

    }

    document.getElementById("siguiente").addEventListener("click", imagenSiguiente);
    document.getElementById("anterior").addEventListener("click", imagenAnterior);
}

window.addEventListener("load", inicia);