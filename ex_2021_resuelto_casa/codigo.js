/*******************************************************************************/
// EJERCICIO 1 REVISADO
function compararPorAnio(vino1, vino2) {
    return vino1.anio_cosecha - vino2.anio_cosecha;
}


class Vino {
    constructor(nombre, anio_cosecha, tipo, tipo_crianza) {
        this.nombre = nombre;
        this.anio_cosecha = anio_cosecha;
        this.tipo = tipo;
        this.tipo_crianza = tipo_crianza;
    }
}


class Bodega {
    constructor(nombre) {
        this.nombre = nombre;
        this.grupo = [];
    }

    anadirVino(vino) {
        this.grupo.push(vino);
    }

    devuelveListadoVinos(ordenado=false) {
        let lista = {};

        lista['Número de resultados'] = this.grupo.length;
        (ordenado) ? lista['Listado'] = this.grupo.sort(compararPorAnio) : lista['Listado'] = this.grupo; 
        
        return lista
    }

    vinosPorTipo(tipo) {
        let listado_vinos = this.devuelveListadoVinos();
        let filtado_por_tipo = listado_vinos['Listado'].filter(vino => vino.tipo == tipo);

        return {
            'Número de vinos de la bodega' : filtado_por_tipo.length,
            'Listado' : filtado_por_tipo
        }
    }
}


function ejercicio1(listado) {
    let div_ppal = document.createElement("div");

    for (let vino of listado['Listado']) {
        let div_vino = document.createElement("div");
        let ul = document.createElement("ul");

        for (let atrib in vino) {
            let li = document.createElement("li");
            li.textContent = `${atrib} : ${vino[atrib]}`;
            ul.appendChild(li);
        }

        div_vino.appendChild(ul);
        div_ppal.appendChild(div_vino);
    }

    return div_ppal;
}

/*******************************************************************************/
// EJERCICIO 2

function asociaEventos(e) {
    let color = e.target.style.color;
    if (color == "#ff0000") {
        e.target.style.color = "black";
    }
    else {
        e.target.style.color = "red";
    }
}

function guardarLocalStorage(array) {
    localStorage.removeItem("array");
    localStorage.setItem("array", JSON.stringify(array));
}

function ejercicio2(array=null, nodo=null) {

    if ((array!=null) && (nodo=null)) {
        guardarLocalStorage(array);
        var tabla = document.createElement("table");
        for (fila of array) {
            var fila = document.createElement("tr");
            for (columna of fila) {
                var celda = document.createElement("td");
                celda.addEventListener("mouseover", asociaEventos);
                celda.addEventListener("mouseout", asociaEventos);
                celda.innerText = columna;
                fila.appendChild(celda);
            }
            tabla.appendChild(fila);
        }

        nodo.appendChild(tabla);
    }
}


/*******************************************************************************/
// EJERCICIO 3
// REVISARLO

var svgNS = "http://www.w3.org/2000/svg";

function animarRect() {
    let rect = document.getElementById("mi_rect");
    //terminarlo, usando setinterval aumentamos el ancho y el largo, tanto del rectangulo como del contenedor
}

function ejercicio3(id_contenedor, alto, ancho) { // Esta funciona bien
    let contenedor = document.getElementById(id_contenedor);
    let rectangulo = document.createElementNS(svgNS, "rect");
    let panel = document.createElementNS(svgNS, "svg"); // NO FUNCIONABA PORQUE NO LE PASABA EL NAMESPACE
    let boton = document.getElementById("animar");

    boton.addEventListener("click", animarRect);

    panel.setAttribute("width", ancho);
    panel.setAttribute("height", alto);

    rectangulo.setAttribute("id", "mi_rect");
    rectangulo.setAttribute("x", 0);
    rectangulo.setAttribute("y", 0);
    rectangulo.setAttribute("width", ancho);
    rectangulo.setAttribute("height", alto);
    rectangulo.setAttribute("style", "fill:green; stroke:yellow; stroke-width:4;");

    panel.appendChild(rectangulo);
    contenedor.appendChild(panel);
}

/*******************************************************************************/
// EJERCICIO 4

google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(ejercicio4);  // DESCOMENTAR VER FUNCIONAMIENTO

function ejercicio4() {
    var data = google.visualization.arrayToDataTable([
    ["Año", "Poblacion", { role: "style" }],
    ["2021", 3025, 'color: pink; opacity:1'],
    ["2020", 2360, 'color: grey; opacity:0.8'],
    ["2019", 4021, 'color: blue; opacity:0.5'],
    ["2018", 1200, 'color: yellow; opacity:0.75']
    ]);

    var options = {
        'title':'Evolucion de la población de Almendralejo',
        'width': 800,
        'height': 600,
        'backgroundColor':'green'
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

/*******************************************************************************/
// PRUEBAS

function main() {
    // document.body.appendChild(div_listado); //Probar 1f)
    ejercicio3("e3", 100, 100);
}

// v1 = new Vino("rioja", "2010", "tinto", "crianza");
// v2 = new Vino("rioja", "2009", "blanco", "crianza");
// b = new Bodega("el marqués");
// b.anadirVino(v1);
// b.anadirVino(v2);
// b.grupo;
// listado = b.devuelveListadoVinos(true);
// blancos = b.vinosPorTipo("blanco");
// div_listado = ejercicio1(listado);
// document.body.appendChild(div_listado)

window.addEventListener("load", main);
