/**Escribe una función que dado un número de estudiante y un trimestre, devuelva su nota. 
Sobreescribe esa función de tal modo que si no se indica el trimestre se devuelva la nota 
media de los exámenes. */

var clase = [
    ['Javier',21,10,10,10],
    ['Luis',20,7,8,9],
    ['Jose',19,10,5,6],
    ['María',18,4,5,6]
];

function media(array) {
    let suma = 0;
    for (var i = 0; i < array.length; i++)
        suma += array[i];

    return suma/i;
}

function devuelveNota(n_estudiante, n_trimestre=0) {
    var notas = clase.filter(
        (estudiante, i) => i === n_estudiante - 1)[0].filter(
            (datos, i) => ((i>=2) && (i <= 4)));

    if (n_trimestre) {
        return notas[n_trimestre-1];
    }
    else {
        return media(notas);
    }
}