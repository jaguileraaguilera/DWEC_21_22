window.onload = ()=> {
    document.getElementById('crear').addEventListener("click", crearCookie);
    document.getElementById('borrar').addEventListener("click", borrarCookie);
    document.getElementById('mostrar').addEventListener("click", mostrarCookie)

    document.getElementById('crear_img').addEventListener("click", creaImagen);
    document.getElementById('crear_li').addEventListener("click", creaLi);

    document.getElementById("lista").children[0].addEventListener("click", borraEntrada);
    document.getElementById("lista").children[1].addEventListener("click", borraEntrada);
}

function borraEntrada(e) {
    document.getElementById("lista").removeChild(e.target);

}

function creaImagen() {
    let imagenNueva = document.createElement("img");
    imagenNueva.src = "https://1.bp.blogspot.com/-79DdxzZkDog/T76QV6v5IuI/AAAAAAAAAEY/6DzpGZzsmfA/s320/homerocatolico_456_336.jpg";
    imagenNueva.style.border = "1px solid black";
    imagenNueva.addEventListener("click", borraImg);
    document.body.appendChild(imagenNueva);
}

function borraImg(e) {
    document.body.removeChild(e.target);
}

function creaLi() {
    let nuevaEntrada = document.createElement("li");
    let texto = document.getElementById("texto_li").value;
    document.getElementById("texto_li").value = "";
    nuevaEntrada.innerHTML = texto;
    nuevaEntrada.addEventListener("click", borraEntrada);
    document.getElementById("lista").appendChild(nuevaEntrada);
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