var svgNS = "http://www.w3.org/2000/svg";

class Bola {
      constructor(radio, posicionX, posicionY, velocidadX, velocidadY, color, svgContenedor) {
        this.x = posicionX;
        this.y = posicionY;
        this.color = color;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;

        // Creación del tag
        this.tagCircle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tagCircle.setAttributeNS(null, "fill", this.color);
        this.tagCircle.setAttributeNS(null, "cx", this.x);
        this.tagCircle.setAttributeNS(null, "cy", this.y);
        this.tagCircle.setAttributeNS(null, "r", this.radio);
        svgContenedor.appendChild(this.tagCircle);
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function colorAleatorio() {
    return "#"+ Math.floor(Math.random()*16777215).toString(16);
}

function main() {
    let bola = document.createElementNS(svgNS, "circle");
    let panel = getElementById("panel")

    bola.setAttribute("id", "bola");
    bola.setAttribute("cx", "100");
    bola.setAttribute("cy", "100");
    bola.setAttribute("r", "70");
    bola.setAttribute("fill", "red");
    panel.appendChild(bola);
}

window.addEventListener("load", main);
