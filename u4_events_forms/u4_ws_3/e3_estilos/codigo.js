/**Intentar capturar el error que salta al buscar una imagen que no conoce, no mostrándola en pantalla
 * o desabilitando el boton de cambio de página cuando haya llegado a la última o la primera.
 */

function inicia() {
    function pasaSiguiente(e) {
        num_img++;
        document.getElementById("mi_imagen").src = String(num_img) + '.jpg';
    }

    function pasaAnterior(e) {
        num_img--;
        document.getElementById("mi_imagen").src = String(num_img) + '.jpg';
    }

    var num_img = 1;
    let anterior = document.getElementById("anterior");
    let siguiente = document.getElementById("siguiente");
    
    anterior.onclick = pasaAnterior;
    siguiente.onclick = pasaSiguiente;
}

window.addEventListener("load", inicia);
