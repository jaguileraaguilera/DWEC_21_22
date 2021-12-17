function aumentarContador() {
    let div = document.getElementById("mi_div");
    div.clicks++;
    div.innerText = div.clicks;
}

function main() {
    let div = document.createElement("div");
    let boton = document.getElementById("incrementar");
    
    div.setAttribute("id", "mi_div");
    div.clicks = 0;
    div.innerText = div.clicks;
    document.body.appendChild(div);
    
    boton.addEventListener("click", aumentarContador);
}

window.addEventListener("load", main);
