var apikey = "8aaac9f";
var pagina;
var terminar_peticiones; // Si hemos llegado al final controlo que no se pidan más datos al servidor

function realizarBusqueda(e) {
    e.preventDefault(); // Desactivar refresco de la página
    pagina = 0;
    terminar_peticiones = false;
    peticionDatos();
}


function mostrarDetalle(e) {
    let id_pelicula = e.target.parentNode.id;
    peticionDetalles(id_pelicula);
}


function volverListado() {
    let listado = document.getElementById("listado");
    let cuadro_busqueda = document.getElementsByTagName('aside')[0];
    let detalle = document.getElementById("detalle");
    let btn_retroceder = document.getElementById("retroceder");

    if (detalle.style.display != "none") {
        detalle.style.display = "none";
        btn_retroceder.style.display = "none";
        listado.style.display = "flex";
        cuadro_busqueda.style.display = "block";
    }
}


function maquetarListado(datos, contenedor) {
    if ((contenedor.innerHTML != '') && (pagina == 1))
        contenedor.innerHTML = '';

    for (let pelicula of datos["Search"]) {
        if (pelicula['Poster'] != "N/A") {
            let div_pelicula = document.createElement("div");
            let poster = document.createElement("img");
            let titulo = document.createElement("p");

            poster.setAttribute("src", pelicula['Poster']);
            poster.addEventListener("click", mostrarDetalle);
            titulo.innerText = pelicula['Title'];

            div_pelicula.setAttribute("class", "pelicula");
            div_pelicula.setAttribute("id", pelicula.imdbID);

            div_pelicula.appendChild(poster);
            div_pelicula.appendChild(titulo);
            contenedor.appendChild(div_pelicula);
        }
    }
}


function maquetarPelicula(peli, contenedor) {
    if (contenedor.innerHTML != '')
        contenedor.innerHTML = '';
    
    let listado = document.getElementById("listado");
    let btn_retroceder = document.getElementById("retroceder");
    let cuadro_busqueda = document.getElementsByTagName('aside')[0];

    if (listado.style.display != "none") {
        listado.style.display = "none";
        cuadro_busqueda.style.display = "none";
        contenedor.style.display = "flex";
        btn_retroceder.style.display = "block";
    }
        
    let titulo = document.createElement("h2");
    let poster = document.createElement("img");
    let info = document.createElement("ul");
    let plot = document.createElement("p");
    let items = ['Released', 'Genre', 'imdbRating', 'Director', 'Actors'];

    for (let dato in peli) {
        if (items.includes(dato)) {
            let li = document.createElement("li");
            li.innerText = `${dato} : ${peli[dato]}`;
            info.appendChild(li);
        }
    }
    
    poster.setAttribute("src", peli['Poster']);
    plot.setAttribute("class", "plot");
    titulo.innerText = peli['Title'];
    plot.innerText = peli['Plot'];

    contenedor.appendChild(titulo);
    contenedor.appendChild(poster);
    contenedor.appendChild(info);
    contenedor.appendChild(plot);
}


function peticionDetalles(id_pelicula) {
    let peticion = `http://www.omdbapi.com/?apikey=${apikey}&i=${id_pelicula}`;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let contenedor = document.getElementById("detalle");
            maquetarPelicula(datos, contenedor);
        }
    };
    xhttp.open("GET", peticion, true);
    xhttp.send();
}


function peticionDatos() {
    if (!terminar_peticiones) {
        let preload = document.getElementById("preload");
        preload.style.display = "block";
        let txt_busqueda = document.getElementById("entrada").value.replaceAll(" ", "+");
        pagina++;
        let peticion = `http://www.omdbapi.com/?apikey=${apikey}&s=${txt_busqueda}&page=${pagina}`;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.responseText);
                let contenedor = document.getElementById("listado");
                (datos["Response"] != "False") ? maquetarListado(datos, contenedor) : terminar_peticiones = true;
                preload.style.display = "none";
            }
        };
        xhttp.open("GET", peticion, true);
        xhttp.send();
    }
}


function main() {
    let btn_busqueda = document.getElementById("buscar");
    let btn_retroceder = document.getElementById("retroceder");
    
    btn_busqueda.addEventListener("click", realizarBusqueda);
    btn_retroceder.addEventListener("click", volverListado);

    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 0.5*window.innerHeight) {
            if ((document.getElementById("listado").style.display != "none"))
                peticionDatos();
        }
    });
}

window.addEventListener("load", main);
