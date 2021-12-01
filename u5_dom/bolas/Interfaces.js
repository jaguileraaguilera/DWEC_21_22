var svgNS = "http://www.w3.org/2000/svg";

function colorAleatorio() {
    return "#"+ Math.floor(Math.random() * 16777215).toString(16);
}


class InterfazBola {
    constructor(bola, svgContenedor) {
        this.bola = bola;
        this.tagCircle = document.createElementNS(svgNS, "circle");
        this.tagCircle.setAttribute("fill", colorAleatorio());
        this.tagCircle.setAttribute("cx", bola.x);
        this.tagCircle.setAttribute("cy", bola.y);
        this.tagCircle.setAttribute("r", bola.r);  
        this.contenedor = svgContenedor;
        this.contenedor.appendChild(this.tagCircle);
    }

    dibuja() {
        this.tagCircle.setAttribute("cx", this.bola.x);
        this.tagCircle.setAttribute("cy", this.bola.y);
    }
}


class InterfazBarra {
    constructor(barra, svgContenedor) {
        this.barra = barra;
        this.tag = document.createElementNS(svgNS, "rect");
        this.tag.setAttribute("fill", colorAleatorio());
        this.tag.setAttribute("x", barra.x);
        this.tag.setAttribute("y", barra.y);
        this.tag.setAttribute("width", barra.ancho);
        this.tag.setAttribute("height", barra.largo);
        this.contenedor = svgContenedor;
        this.contenedor.appendChild(this.tag);
    }

    dibuja() {
        this.tag.setAttribute("x", this.barra.x);
        this.tag.setAttribute("y", this.barra.y);
    }
}


class InterfazComoRectangulo {
    constructor(bola, svgContenedor) {
        this.bola = bola;
        this.tagCircle = document.createElementNS(svgNS, "rect");
        this.tagCircle.setAttribute("fill", colorAleatorio());
        this.tagCircle.setAttribute("x", bola.x);
        this.tagCircle.setAttribute("y", bola.y);
        this.tagCircle.setAttribute("width", bola.r);
        this.tagCircle.setAttribute("height", bola.r);
        this.contenedor = svgContenedor;
        this.contenedor.appendChild(this.tagCircle);
    }

    dibuja() {
        this.tagCircle.setAttribute("x", this.bola.x);
        this.tagCircle.setAttribute("y", this.bola.y);
    }
}


class InterfazComoTexto {
    constructor(bola, svgContenedor) {
        this.bola = bola;
        this.tagCircle = document.createElementNS(svgNS, "text");
        this.tagCircle.setAttribute("fill", colorAleatorio());
        this.tagCircle.setAttribute("x", bola.x);
        this.tagCircle.setAttribute("y", bola.y);
        this.tagCircle.setAttribute("font-size", "16px");
        this.tagCircle.innerHTML = "TEXTO";
        this.contenedor = svgContenedor;
        this.contenedor.appendChild(this.tagCircle);
    }

    dibuja() {
        this.tagCircle.setAttribute("x", this.bola.x);
        this.tagCircle.setAttribute("y", this.bola.y);
    }
}

export {InterfazBola, InterfazComoRectangulo, InterfazComoTexto, InterfazBarra};
