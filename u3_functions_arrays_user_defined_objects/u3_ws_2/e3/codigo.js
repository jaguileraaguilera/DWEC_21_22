/**Escribe una función que devuelva la edad media 
 * de los alumnos de la clase. */

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

function edadMedia(clase) {
    let edades = [];
    clase.forEach((estudiante) => edades.push(estudiante[1]));
    return media(edades);
}

console.log(edadMedia(clase));