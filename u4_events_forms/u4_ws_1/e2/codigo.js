/**Captura el movimiento del ratón, para que se muestre la posición en la que se 
encuentra en cada momento */

function inicia() {
    function movimientoRaton(e) {
        var x = e.clientX;
        var y = e.clientY;
        console.log('X: ' + x + ' Y: ' + y);
    }
    
    window.onmousemove = movimientoRaton;
}


window.addEventListener("load", inicia);