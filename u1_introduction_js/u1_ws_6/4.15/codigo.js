/*Programa que consiste en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pide tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
Da pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar*/

var num_adivinar = parseInt(prompt('J1: Introduzca un número entero'));
var num = parseInt(prompt('J2: Introduzca un número entero para adivinar'));

while (num != num_adivinar) {
    if (num < num_adivinar)
        alert('El número es mayor');
    else if (num > num_adivinar)
        alert('El número es menor');
    var num = parseInt(prompt('J2: Introduzca un número entero para adivinar'));
}

alert('Acertaste!');