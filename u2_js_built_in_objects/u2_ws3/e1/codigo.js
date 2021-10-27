/**Crea las siguientes funciones y llámalas desde
 * una página HTML para mostrar su funcionamiento:
 */

function quitar_signos(cad) {
    var signos = ',;.:?¿!¡';
    var acumulador = "";

    for (char of cad) {
        if (!signos.includes(char))
            acumulador += char;
    }

    return acumulador;
}

function sacar_palabras(cad) {
    var palabras_bruto = cad.split(' ');
    var palabras_filtrado= [];

    for (palabra of palabras_bruto)
        palabras_filtrado.push(quitar_signos(palabra));

    return palabras_filtrado;
}

/**a) invierteCadena(cad_arg) */
function invierteCadena(cad_arg) {
    var invertida = '';

    for (let i = cad_arg.length - 1; i >= 0; i--)
        invertida += cad_arg[i];

    return invertida;
}

/**b) inviertePalabras(cad_arg) */
function inviertePalabras(cad_arg) {
    var palabras = sacar_palabras(cad_arg);
    var invertidas = [];

    for (palabra of palabras)
        invertidas.push(invierteCadena(palabra));

    return invertidas; 
}

var array = inviertePalabras('¡Hola don Pepito, hola don José!')

/**c) encuentraPalabraMasLarga(cad_arg) */
function encuentraPalabraMasLarga(cad) {
    var palabras = sacar_palabras(cad);
    var mas_larga = palabras[0];

    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > mas_larga.length)
            mas_larga = palabras[i];
    }

    return mas_larga.length;
}

/**d) filtraPalabrasMasLargas(cad_arg, i) */
function filtraPalabrasMasLargas(cad, long) {
    var palabras = sacar_palabras(cad);
    var mas_largas = [];

    for (palabra of palabras) {
        if (palabra.length > long)
            mas_largas.push(palabra);
    }

    return mas_largas.length;
}

/** e) cadenaBienFormada(cad_arg) */
function cadenaBienFormada(cad_arg) {
    var en_minusculas = cad_arg.toLowerCase();
    var bien_formada = en_minusculas[0].toUpperCase();

    for (let i = 1; i < cad_arg.length; i++)
        bien_formada += en_minusculas[i];

    return bien_formada;
}

// Intentarlo con slice
