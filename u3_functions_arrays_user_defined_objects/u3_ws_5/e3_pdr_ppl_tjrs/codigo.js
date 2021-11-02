// Juego piedra papel tijeras
class Jugador {
    constructor(nombre=undefined) {
        this.nombre = nombre;
        this.movimiento = undefined;
    }
    saca(movimientos) {
        console.log(movimientos);
        parseInt(prompt("Elige uno, (0,1,2):"));  
    }
}


class Juego {
    constructor(jugadores, rondas_ganar) {
        this.datos = [];
        for (jugador of jugadores)
            this.datos[jugador] = 0;
        
        this.movimientos = ['piedra', 'papel', 'tijeras'];
        this.rondas_ganar = rondas_ganar;
        this.ronda = []
    }

    resolverGanador() {

    }
}


// Script ejecución
let j1 = new Jugador('Pepe');
let j2 = new Jugador('Juan');
let ganas = 3;
let partida = new Juego([j1,j2], ganas);

while ((partida.datos[j1] < ganas) || (partida.datos[j2] < ganas)) {
    for (jugador in partida.datos) {
        partida.ronda.push(jugador.saca(partida.movimientos))
    }

}


