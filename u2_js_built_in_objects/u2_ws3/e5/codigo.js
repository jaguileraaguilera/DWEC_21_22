/**Desarrolla una función que elimine los caracteres
 * repetidos de una cadena de texto
 */

function quitar_repetidos(cad) {
    var acumulador = "";

    for (char of cad ) {
        if (!acumulador.includes(char))
            acumulador += char;
    }

    return acumulador;
}