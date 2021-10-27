/**Definir una funcion que muestre informacion 
 * sobre una cadena de texto que se le pasa como 
 * argumento. A partir de la cadena que se le pasa, 
 * la función determina si esa cadena está formada 
 * solo por mayúsculas, sólo por minúsculas o 
 * por una mezcla de ambas */


function info_cad(cad) {
    if (cad === cad.toLowerCase()) {
        return "Solo tiene minúsculas";
    }
    else if (cad === cad.toUpperCase()) {
        return "Solo tiene mayúsculas";
    }
    else {
        return "Tiene mayúsculas y minúsculas";
    }
}