/**Implementa una función que tomando dos cadenas
 * como entrada nos diga si la segunda es una 
 * subcadena de la primera y cuál es la primera
 * posición a partir de la que esto ocurre
 */

function es_subcadena(subcad, cad) {

    for (let i = 0; i < cad.length; i++){
        for (let j = 0; j < cad.length; j++){
            if (cad.substr(i, j) === subcad)
                return [true, i];
        }
    }
    return false;
}