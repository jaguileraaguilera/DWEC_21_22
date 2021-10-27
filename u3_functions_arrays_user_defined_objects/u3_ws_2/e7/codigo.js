/**Escribe las funciones para llevar a cabo las siguientes 
 * operaciones para un array de una dimensión:
 * a) Establecer los 10 elementos del array a cero.
 * b) Añadir 1 a cada uno de los elementos del array.
 * c) Muestra los valores del array separados por espacios.
 * */

array = [1,2,3,8,64,34,3,2,2222,134];

// a)
function ponerCeros(array) {
    array.fill(0);
}

// b)
function sumarUno(array) {
    array.forEach((e,i,array) => array[i] += 1);
}

// c)
function verValores(array) {
    array.forEach((valor) => console.log(valor + ' '));
}
