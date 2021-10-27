/*Crear una función llamado paresImpares que cree 
un array de 100 números aleatorios del 1 al 1000. 
Una vez creado, mostrar el contenido y después organizarlo 
de forma que estén juntos los elementos pares y los impares. 
Después, volver a mostrar el array */

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function paridad(a) {
    return a % 2;
}

function llenarArrayAleatorios(array, lim, n1, n2){
    for (i = 0; i < lim; i++)
        array.push(rand(n1, n2 + 1));
}

function paresImpares() {
    var numeros = [];
    llenarArrayAleatorios(numeros, 100, 1, 1000);
    console.log(numeros);
    numeros.sort((a,b) => paridad(a) - paridad(b));
    console.log(numeros);
}