/*Separar en una clase Gato la información del gato
(nombre, numero de clicks) (controlador)
y una clase InterfazGato que cree la etiqueta html*/
class Gato {
    constructor(nombre) {
        this.nombre = nombre;
        this.clicks = 0;
    }



}

class InterfazGato {

}

function clickGato() {
    
}

var clicks = Array(gatos.length);
clicks.fill(0);
function main() {
    let gatos = document.getElementById("gato");
    for (let i = 0; i < gatos.length; i++) {
        clicks[i]++;
        gatos[i].addEventListener("click", clickGato);
    }
}

window.addEventListener("load", main);
