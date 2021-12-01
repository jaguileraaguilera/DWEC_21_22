class Barra {
    constructor(x, y, ancho, largo) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.largo = largo;
        this.velocidad = 5;
    }

    mueve(alto_contenedor) {
        this.y += this.velocidad;    
        
        if (this.y <= 0 || (this.y + this.largo) > alto_contenedor) {
            this.velocidad *= -1;
            this.y = (this.y - this.largo <= 0) ? this.largo /10 : alto_contenedor - this.largo;
        }
    }

    cambiarDireccion() {
        this.velocidad *= -1;
    }
}

class Bola {
    constructor(x, y, vx, vy, r) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
    }

    mueve(ancho_contenedor, alto_contenedor) {
        this.x += this.vx;
        this.y += this.vy;    
        
        if (this.x - this.r <= 0 || this.x + this.r >= ancho_contenedor) {
            this.vx *= -1;
            this.x = (this.x - this.r <= 0) ? this.r : ancho_contenedor - this.r;
        }
        
        if (this.y - this.r <= 0 || this.y + this.r >= alto_contenedor) {
            this.vy *= -1;
            this.y = (this.y - this.r <= 0) ? this.r : alto_contenedor - this.r;
        }
    }

    colisiona(otra_bola){
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        let dx = this.x - otra_bola.x;
        let dy = this.y - otra_bola.y;
        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.r + otra_bola.r) {
            this.vx *= -1;
            this.vy *= -1;

            this.x = this.posAnteriorX;
            this.y = this.posAnteriorY;
        }
    }

    colisiona_barra_izq(barra) {
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        let dx = this.x - barra.x;
        let dy = this.y - barra.y;
        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.r + barra.ancho) {
            this.vx *= -1;
            this.vy *= -1;

            this.x = this.posAnteriorX;
            this.y = this.posAnteriorY;
        }
    }
    colisiona_barra_drch(barra) {
        this.posAnteriorX = this.x;
        this.posAnteriorY = this.y;

        let dx = this.x - barra.x;
        let dy = this.y - barra.y;
        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.r + barra.ancho) {
            this.vx *= -1;
            this.vy *= -1;

            this.x = this.posAnteriorX;
            this.y = this.posAnteriorY;
        }
    }
}


export {Barra, Bola};