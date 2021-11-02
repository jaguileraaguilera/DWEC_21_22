/**Captura el evento onClick del ratón para que cada vez 
 * que suceda se ejecute un alert */

function inicia() {
    function hacerClick() {
        alert("Ha hecho click");
    }
    
    window.addEventListener("click", hacerClick);
}


window.addEventListener("load", inicia);