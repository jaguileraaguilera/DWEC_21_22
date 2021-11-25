function inicia() {
    let enlaces = document.getElementsByTagName("a");

    // número de enlaces de la página
    let num_enlaces =  document.getElementsByTagName("a").length;
    console.log("Número de enlaces: " + num_enlaces);

    // Dirección a la que enlaza el penúltimo enlace
    let dir_penult_enlace = enlaces[enlaces.length - 2].href;
    console.log("Dirección penúltimo enlace: " + dir_penult_enlace);

    // Numero de enlaces que enlazan a google
    function filtrar_enlaces(lista_enlaces, direccion) {
        let filtrados = [];
        for (let i = 0; i < lista_enlaces.length; i++) {
            if (lista_enlaces[i].href == direccion)
                filtrados.push(lista_enlaces[i]);
        }

        return filtrados;
    }

    console.log("Enlaces a Google: " + filtrar_enlaces(enlaces, "https://google.es/").length);

    // Número de enlaces del tercer párrafo
    let n = document.getElementsByTagName("p")[2].getElementsByTagName("a").length;
    console.log("Número de enlaces del 3er párrafo: " + n);
}


window.addEventListener("load", inicia);
