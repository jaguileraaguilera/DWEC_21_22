window.onload = ()=> {

        document.getElementById('crear').addEventListener("click", crearCookie);
        document.getElementById('borrar').addEventListener("click", borrarCookie);
        document.getElementById('mostrar').addEventListener("click", mostrarCookie)

}

function crearCookie() {
    document.cookie="usuario=jose;";
}

function borrarCookie() {
    document.cookie="usuario=jose; max-age=0";
}

function mostrarCookie() {
    console.log(document.cookie);
}