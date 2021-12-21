/**Crea un formulario típico de registro para tu web. Debe contener 
 * al menos campos para introducir nombre, apellidos, DNI, Teléfono, 
 * email y nombre de usuario. Todos los campos son obligatorios, 
 * y debes validar el mayor número posible de ellos haciendo uso 
 * de expresiones regulares. El nombre de usuario debe estar 
 * formado por al menos 8 caracteres, entre los cuales debe aparecer 
 * obligatoriamente algún número y algún signo de puntuación. 
 * Conforme sale el foco de cada input, deberás validar el contenido 
 * de éste y mostrar información al usuario que le indique si está 
 * correcto o no */

function validarNomUsu(input) {

    
}


function validarEntrada(e) {
    if (e.target.value == "" || e.target.value == null)
        alert("Es obligatorio rellenar el campo");
    
    let id_input = e.target.id;

    if (id_input == "nom_usu")
        validarNomUsu(e.target);
    
}


function main() {
    let inputs = document.getElementsByTagName("input");

    for (let input of inputs)
        input.addEventListener("onfocusout", validarEntrada);
    
}

window.addEventListener("load", main);
