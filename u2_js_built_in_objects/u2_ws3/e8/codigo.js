/**Implementa una función que tomando como entrada
 * una cadena de texto sea capaz de contabilizar el
 * número de palabras. Ten en cuenta que entre dos
 * palabras puede haber más de 1 blanco, e incluso
 * pueden aparecer al principio o final de ésta.
 */

function cuenta_palabras(cad) {
    var array_palabras = cad.split(' ');
    var array_palabras_sin_blancos = []

    for (palabra of array_palabras){
        if (palabra != "")
            array_palabras_sin_blancos.push(palabra)
    }

    return array_palabras_sin_blancos.length;
}