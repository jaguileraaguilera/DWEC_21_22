import { Bola } from "./Bola.js";

import { InterfazBola, InterfazComoTexto, InterfazComoRectangulo, InterfazBarra } from "./Interfaces.js"; 

var bola;
var bolas; // Array = [[bola, interfaz], ...]
var interfaces_bolas;
var interfaz_bola;


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function buclePpal() {
    for (let i = 0; i < bolas.length; i++) {
        bolas[i].mueve(700, 700);
        for (let j = 0; j < bolas.length; j++) {
            if (i != j)
                bolas[i].colisiona(bolas[j]);
        }
        interfaces_bolas[i].dibuja();
    }
    barrita.mueve(700,700);
    interfaz_barrita.dibuja();
}

function main() {
    let panel = document.getElementById("panel");
    bolas = Array();
    interfaces_bolas = Array();
    barrita = new Barra(10,10,30,60);
    interfaz_barrita = new InterfazBarra(barrita, panel);
    
    for (let i = 0; i < 5; i++) {
        bola = new Bola(aleatorio(0, 500), aleatorio(0, 500), aleatorio(0, 10), aleatorio(0, 10), aleatorio(10, 40));
        interfaz_bola = new InterfazBola(bola, panel);
        bolas.push(bola);
        interfaces_bolas.push(interfaz_bola);
    }

    setInterval(buclePpal, 40);
    // window.requestAnimationFrame(bucle_ppal);
}

window.addEventListener("load", main);
