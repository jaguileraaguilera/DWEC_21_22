function ponerTemaNormal() {
    let cabecera = document.getElementsByTagName("head")[0];
    let seccion = document.getElementById("agregado");
    let hoja_estilos = '<link rel="stylesheet" href="normal.css" type="text/css">';
    let texto_agregado = '<p>Utilizando CSS podemos incluso ocultar partes del sitio.<br><b>Este párrafo deber ser solo visible en el tema Normal</b></p>';
    cabecera.innerHTML += hoja_estilos;
    seccion.innerHTML += texto_agregado;
}

function ponerTemaMinimalista() {
    let cabecera = document.getElementsByTagName("head")[0];
    let seccion = document.getElementById("agregado");
    let hoja_estilos = '<link rel="stylesheet" href="minimalista.css" type="text/css">';
    cabecera.innerHTML += hoja_estilos;
    if (seccion.innerHTML != "") seccion.innerHTML = "";
}


function main() {
    let normal = document.getElementById("tema_normal");
    let minimalista = document.getElementById("tema_minimalista");
    normal.addEventListener("click", ponerTemaNormal);
    minimalista.addEventListener("click", ponerTemaMinimalista);
}

window.addEventListener("load", main);
