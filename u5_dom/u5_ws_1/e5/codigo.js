function inicia() {
    function adjuntarMas() {
        let nuevo_input = document.createElement("input");
        nuevo_input.type = "file";
        let salto_linea = document.createElement("br");
        document.getElementById("contenedor_input").appendChild(nuevo_input);
        document.getElementById("contenedor_input").appendChild(salto_linea);
    }

    document.getElementById("adjuntar_otro").addEventListener("click", adjuntarMas);
}

window.addEventListener("load", inicia);
