function inicia() {
    function creaLi() {
        let nuevaEntrada = document.createElement("li");
        let texto = document.getElementById("texto_li").value;
        document.getElementById("texto_li").value = "";
        nuevaEntrada.innerHTML = texto;
        document.getElementById("lista").appendChild(nuevaEntrada);
    }

    document.getElementById("crear_li").addEventListener("click", creaLi);
}

window.addEventListener("load", inicia);
