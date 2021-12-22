/*******************************************************************************/
// EJERCICIO 1

function comparar(datos_vino1, datos_vino2) {
    // [nombre, año, tipo, cosecha]
    if (datos_vino1[1] < datos_vino2[1])
        return -1;
    else if (datos_vino1[1] > datos_vino2[1])
        return 1;
    else 
        return 0;
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
        let listado = {};
        let listado_vinos = [];

        listado['Número de vinos de la bodega'] = this.grupo.length;
        
        for (var vino of this.grupo) {
            var especificaciones = [];
            for (var atrib in vino) {
                especificaciones.push(vino[atrib]);
            }
            listado_vinos.push(especificaciones);
        }

        if (ordenado) {
            var listado_ordenado = listado_vinos.sort(comparar);
            listado['Listado de vinos'] = listado_ordenado;
        }
        else {
            listado['Listado de vinos'] = listado_vinos;
        }

        return listado;
    }

    vinosPorTipo(tipo) {
        let listado = {};
        let listado_vinos = [];
        let listado_filtrado = [];

        for (var vino of this.grupo) {
            var especificaciones = [];
            for (var atrib in vino) {
                especificaciones.push(vino[atrib]);
            }
            listado_vinos.push(especificaciones);
        }

        for (vino of listado_vinos) { 
            if (vino[2] == tipo) // [nombre, año, tipo, cosecha]
                listado_filtrado.push(vino);
        }

        listado['Número de vinos de la bodega'] = listado_filtrado.length;
        listado['Listado de vinos'] = listado_filtrado;

        return listado;
    }
}


function ejercicio1(listado) {
    let div_ppal = document.createElement("div");

    for (var vino of listado["Listado de vinos"]) {
        var div_vino = document.createElement("div");
        var ul = document.createElement("div");
        var instancia_vino = new Vino(...vino);

        for (var atrib in instancia_vino) {
            let li = document.createElement("li");
            li.textContent = `${atrib} : ${instancia_vino[atrib]}`;
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
// REVISARLO NO FUNCIONA

var svgNS = "http://www.w3.org/2000/svg";

function animarRect() {
    let rectangulo = document.getElementById("mi_rect");
    // Sin terminar
}

function ejercicio3(id_contenedor, alto, ancho) {
    let contenedor = document.getElementById(id_contenedor);
    let rectangulo = document.createElementNS(svgNS, "rect");
    let panel = document.createElement("svg");
    let boton = document.getElementById("animar");

    boton.addEventListener("click", animarRect);

    panel.setAttribute("width", ancho + 10);
    panel.setAttribute("height", alto + 10);

    rectangulo.setAttribute("id", "mi_rect");
    rectangulo.setAttribute("x", 0);
    rectangulo.setAttribute("y", 0);
    rectangulo.setAttribute("width", ancho);
    rectangulo.setAttribute("height", alto);
    rectangulo.setAttribute("style", "fill:green; stroke:pink; stroke-width:1;");

    panel.appendChild(rectangulo);
    contenedor.appendChild(panel);
}

/*******************************************************************************/
// EJERCICIO 4

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(ejercicio4);  // DESCOMENTAR VER FUNCIONAMIENTO

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

// function main() {
//     // document.body.appendChild(div_listado); //Probar 1f)
//     // ejercicio3("e3", 100, 100);
// }

// v1 = new Vino("rioja", "2010", "tinto", "crianza");
// v2 = new Vino("rioja", "2009", "blanco", "crianza");
// b = new Bodega("el marqués");
// b.anadirVino(v1);
// b.anadirVino(v2);
// b.grupo;
// listado = b.devuelveListadoVinos(true);
// blancos = b.vinosPorTipo("blanco");
// div_listado = ejercicio1(listado);

// window.addEventListener("load", main);
