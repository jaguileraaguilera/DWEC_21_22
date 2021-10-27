/**Desarrolla una función que tomando como entrada
 * una cadena de texto nos devuelva si es o no un
 * palíndromo
 */
 function invierteCadena(cad_arg) {
    var invertida = '';

    for (let i = cad_arg.length - 1; i >= 0; i--)
        invertida += cad_arg[i];

    return invertida;
}

function es_palindromo(cad) {
    return cad === invierteCadena(cad);
}

console.log(es_palindromo('civic'));