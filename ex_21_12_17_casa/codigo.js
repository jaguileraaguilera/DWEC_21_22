/*******************************************************************************/
// EJERCICIO 1 REVISADO

function compararPorAnio(vino1, vino2) { // Código más limpio
    return vino1.anio_cosecha - vino2.anio_cosecha; // ordena por edad de mayor a menor
}


class Vino {
    constructor(nombre, anio_cosecha, tipo, tipo_crianza) {
        this.nombre = nombre;
        this.anio_cosecha = anio_cosecha;
        this.tipo = tipo;
        this.tipo_crianza = tipo_crianza;
    }
}


class Bodega { // devuelveListadoVinos y vinosPorTipo con código más limpio
    constructor(nombre) {
        this.nombre = nombre;
        this.grupo = [];
    }

    anadirVino(vino) {
        this.grupo.push(vino);
    }

    devuelveListadoVinos(ordenado=false) {
        if (ordenado)
            return {'Número de resultados' :  this.grupo.length, 'Listado' : this.grupo.sort(compararPorAnio)};
        else
            return {'Número de resultados' :  this.grupo.length, 'Listado' : this.grupo};
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


function ejercicio1(listado) { // Código más limpio
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
// EJERCICIO 2 REVISADO

function asociaEventos(e) {
    (e.target.style.color== "red") ? e.target.style.color = "black" : e.target.style.color = "red";
}


function guardarLocalStorage(array) {
    localStorage.removeItem("array");
    localStorage.setItem("array", JSON.stringify(array));
}


function ejercicio2(array=null, nodo=null) {
    if ((array!=null) && (nodo!=null)) {
        if (JSON.parse(localStorage.getItem("array")) != array) 
            guardarLocalStorage(array);
        
        let tabla = document.createElement("table");
        for (let fila of array) {
            let row = document.createElement("tr");
            for (let columna of fila) {
                let celda = document.createElement("td");
                celda.addEventListener("mouseover", asociaEventos);
                celda.addEventListener("mouseout", asociaEventos);
                celda.innerText = columna;
                row.appendChild(celda);
            }
            tabla.appendChild(row);
        }

        nodo.appendChild(tabla);
    }
}

/*******************************************************************************/
// EJERCICIO 3 REVISADO

var svgNS = "http://www.w3.org/2000/svg";


function animarRect() { // Sin resolver en el examen
    var i = 0;
    let id_intervalo = setInterval((rect=document.getElementById("mi_rect")) => {
        let panel = rect.parentNode;
        let ancho = parseInt(rect.getAttribute("width"));
        let alto = parseInt(rect.getAttribute("height"));

        panel.setAttribute("width", ancho + 20);
        panel.setAttribute("height", alto + 20);
        rect.setAttribute("width", ancho + 20);
        rect.setAttribute("height", alto + 20);
        i++;
        if (i == 5) // Aseguro 5 ejecuciones del intervalo 
            clearInterval(id_intervalo);
    }, 1000);
}


function ejercicio3(id_contenedor, alto, ancho) {
    let contenedor = document.getElementById(id_contenedor);
    let panel = document.createElementNS(svgNS, "svg"); // No funcionaba porque usaba createElement() en lugar de createElementNS()
    let rectangulo = document.createElementNS(svgNS, "rect");
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
// EJERCICIO 4 ESTABA PERFECTO

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
    // document.body.appendChild(div_listado)
    // ejercicio3("e3", 100, 100);
    // ejercicio2([[1,2,3], [1,2,3]], document.body)
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

window.addEventListener("load", main);
