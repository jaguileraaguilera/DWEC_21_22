/*Realizar una función que permita localizar todas las 
aparaciones de una subcadena dentro de otra */

function apariciones(subcad, cad) {
    var posiciones = [];
    var fin = false;
    let pos = -1;
    
    while (!fin){
        pos = cad.indexOf(subcad, pos + 1);
        if (pos == -1)
            fin = true;
        else{
            posiciones.push(pos);
            pos += subcad.length;
        }
    }

    return (posiciones.length) ? posiciones : pos;
}
