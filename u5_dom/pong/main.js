import { Barra, Bola } from "./Objetos.js";
import { InterfazBarra, InterfazBola } from "./Interfaces.js";


// quitar los array y poner los objetos individuales
var barra_izq;
var barra_drch;
var bola;

var int_barra_izq;
var int_barra_drch;
var int_bola;

var ancho_p = window.innerWidth;
var alto_p = window.innerHeight;

function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function pulsacion(e) {
    if (e.code == "KeyQ" ) {
        barra_izq.cambiarDireccion();
    }
    else if (e.code == "KeyP" ) {
        barra_drch.cambiarDireccion();
    }
}

function buclePpal() {
    barra_izq.mueve(alto_p);
    barra_drch.mueve(alto_p);
    bola.mueve(ancho_p, alto_p);

    bola.colisiona_barra_izq(barra_izq);
    bola.colisiona_barra_drch(barra_drch);

    int_barra_izq.dibuja();
    int_barra_drch.dibuja();
    int_bola.dibuja();
}

function main() {
    let panel = document.getElementById("panel");

    barra_izq = new Barra(0.05*ancho_p, 0.05*ancho_p, 0.03*ancho_p, 0.3*alto_p);
    barra_drch = new Barra(0.92*ancho_p, 0.05*ancho_p, 0.03*ancho_p, 0.3*alto_p);
    bola = new Bola(ancho_p/2, alto_p/2, randint(1,10), randint(1,10), 20);
    int_barra_izq = new InterfazBarra(barra_izq, panel);
    int_barra_drch = new InterfazBarra(barra_drch, panel);
    int_bola = new InterfazBola(bola, panel);

    document.onkeydown = pulsacion;
    setInterval(buclePpal, 10);
    // window.requestAnimationFrame(bucle_ppal);
}

window.addEventListener("load", main);
