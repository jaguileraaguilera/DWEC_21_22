function inicia() {
    function gestosPasar(ev) {
        if (ev.type == "panright")
            num_img--;
        else if (ev.type == "panleft") 
            num_img++;

        document.getElementById("mi_imagen").src = String(num_img) + '.jpg';
    }

    /*Mirar ev.isFinal para evitar que salte varias veces el evento */

    var imagen = document.getElementById("mi_imagen");
    var mc = new Hammer(imagen);

    var num_img = 1;
    mc.on("panleft panright", gestosPasar);
}

window.addEventListener("load", inicia);