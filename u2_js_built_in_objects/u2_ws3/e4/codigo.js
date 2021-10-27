/**Crea una función que tomando una cadena de texto
 * como entrada coloque todas sus consonantes al
 * principio y todas sus vocales al final de la misma
 * eliminando los blancos.
 */
function quitar_blancos(cad) {
    var acumulador = '';

    for (char of cad) {
        if (char != ' ')
            acumulador += char;
    }

    return acumulador;
}


function consonantes_luego_vocales(cad) {
    var vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ';
    var acumulador = '';

    for (char of cad) {
        if (!vocales.includes(char))
            acumulador = char + acumulador;
        else 
            acumulador += char;
    }

    return quitar_blancos(acumulador);
}

