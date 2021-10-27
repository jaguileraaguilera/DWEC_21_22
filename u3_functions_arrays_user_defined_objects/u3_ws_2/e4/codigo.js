/**A veces para elegir un estudiante al que preguntar 
 * en clase necesitamos hacerlo al azar. 
 * Escribe una función que aleatoriamente vaya devolviendo 
 * el nombre de un estudiante cada vez */

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var clase = [
    ['Javier',21,10,10,10],
    ['Luis',20,7,8,9],
    ['Jose',19,10,5,6],
    ['María',18,4,5,6]
];

function estudianteAleatorio(clase) {
    return clase[rand(0,clase.length)][0];
}

