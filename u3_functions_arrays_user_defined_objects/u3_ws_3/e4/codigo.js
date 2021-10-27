function tableroVacio(){
    tablero = Array(5);
    tablero.forEach((fila, i, tablero) => tablero[i] = Array(5));
    return tablero;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
