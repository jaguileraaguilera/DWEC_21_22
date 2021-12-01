import { Barra, Bola } from "./Objetos.js";
import { InterfazBarra, InterfazBola } from "./Interfaces.js";


var objeto = Array(); // [barra_izq, barra_drch, bola]
var interfaz= Array();
var ancho_p = window.innerWidth;
var alto_p = window.innerHeight;

function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function pulsacion(e) {
    if (e.code == "KeyQ" ) {
        objeto[0].cambiarDireccion();
    }
    else if (e.code == "KeyP" ) {
        objeto[1].cambiarDireccion();
    }
}

function buclePpal() {
    for (let i = 0; i < objeto.length; i++) {
        objeto[i].mueve(ancho_p, alto_p);
        objeto[2].colisiona_barra_izq(objeto[0]);
        objeto[2].colisiona_barra_drch(objeto[1]); 
        interfaz[i].dibuja();
    }
}

function main() {
    let panel = document.getElementById("panel");

    objeto.push(new Barra(0.05*ancho_p, 0.05*ancho_p, 0.03*ancho_p, 0.3*alto_p));
    objeto.push(new Barra(ancho_p - 0.05*ancho_p, 0.05*ancho_p, 0.03*ancho_p, 0.3*alto_p));
    objeto.push(new Bola(ancho_p/2, alto_p/2, randint(1,10), randint(1,10), 20));

    for (let i = 0; i < objeto.length; i++) {
        (i < 2) ? 
        interfaz.push(new InterfazBarra(objeto[i], panel))
        : interfaz.push(new InterfazBola(objeto[i], panel));
    }

    document.onkeydown = pulsacion;
    setInterval(buclePpal, 10);
    // window.requestAnimationFrame(bucle_ppal);
}

window.addEventListener("load", main);
