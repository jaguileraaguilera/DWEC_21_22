/*Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de 
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los 
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los 
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000 
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones. */

function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function lanzamiento() {
    return rand(1,7);
}

var resultados = [];

for (let i = 0; i < 13; i++)
    resultados.push(0);

for (let i = 0; i < 36000; i++) {
    var tirada = lanzamiento() + lanzamiento();
    resultados[tirada] += 1;
}

for (let i = 2; i < resultados.length; i++) {
    console.log(i + ': ' + resultados[i]);
}
