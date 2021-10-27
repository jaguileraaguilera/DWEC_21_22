/**Mejora el ejercicio anterior para además mostrar 
 * una tabla bidimensional que muestre las combinaciones 
 * (no sólo la suma) que se han ido dando (ahora sí 
 * podemos usar arrays bidimensionales) */

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function lanzamiento() {
    return rand(1,7);
}

function suma(array) {
    var suma = 0;

    for (elemento of array)
        suma += elemento;

    return suma;
}

var resultados = [];

for (let i = 0; i < 6; i++) {
    resultados.push([0,0,0,0,0,0]);
}

for (let i = 0; i < 36000; i++) {
    resultados[lanzamiento()-1][lanzamiento()-1] += 1;
}
