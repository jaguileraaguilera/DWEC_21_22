// EJERCICIO 1

function sacarParentesis(cadena) {
    let acumulador = '';

    for (let char of cadena) {
        if ((char == '(') || (char ==')'))
            acumulador += char;
    }

    return acumulador;
}

function ejercicio1(cadena) {
    let parentesis = sacarParentesis(cadena);
    let es_correcta = true;
    let abiertos = 0;
    let cerrados = 0;

    let i = 0;
    do {
        (parentesis[i] == ')') ? cerrados++ : abiertos++;
        if (cerrados > abiertos)
            es_correcta = false;
        i++;
    } while (es_correcta && i < parentesis.length);

    if (abiertos != cerrados)
        es_correcta = false;
    
    return es_correcta;
}

/*******************************************************************************/
// EJERCICIO 2

function formatearFecha(fecha) {
    let aux = fecha.split("/").reverse();
    let formateada = [];

    for (let numero of aux)
        formateada.push(parseInt(numero));

    return formateada;
}

function restaurarFormato(fecha){
    let restaurada = [];

    for (let numero of fecha.reverse()) {
        if (numero < 10)
            restaurada.push('0' + String(numero));
        else  
            restaurada.push(String(numero));
    }
        
    return restaurada.join("/");
}

function compararFechas(fecha1, fecha2) {
    // [año, mes, dia]
    if (fecha1[0] > fecha2[0])
        return -1;
    else if (fecha1[0] < fecha2[0])
        return 1;
    else {
        if (fecha1[1] > fecha2[1])
            return -1;
        else if (fecha1[1] < fecha2[1])
            return 1;
        else {
            if (fecha1[2] > fecha2[2])
                return -1;
            else if (fecha1[2] < fecha2[2])
                return 1;
            else
                return 0;
        }
    }
}

function ejercicio2(arrayFechas, fechaIni, fechaFin) {
    let fechas = [];
    let resultados = [];
    let fecha_ini = formatearFecha(fechaIni);
    let fecha_fin = formatearFecha(fechaFin);

    for (let fecha of arrayFechas)
        fechas.push(formatearFecha(fecha));
    
    for (let fecha of fechas) {
        if ((compararFechas(fecha, fecha_ini) <= 0) 
        && (compararFechas(fecha, fecha_fin) >= 0)) {
            resultados.push(restaurarFormato(fecha));
        }   
    }
    
    return resultados;
}
/*******************************************************************************/
// EJERCICIO 3

function ejercicio3(array) {
    if (array.length == 1)
        return array[0];
    else
        return array[0] * ejercicio3(array.slice(1));
}

/*******************************************************************************/
// EJERCICIO 4

function guardarLocalStorage(tabla) {
    localStorage.removeItem("tabla");
    localStorage.setItem("tabla", tabla.outerHTML);
}

function borrarTexto(e) {
    e.target.textContent = "";
    let tabla = e.target.parentNode.parentNode;
    guardarLocalStorage(tabla); // al modificar la tabla la vuelvo a guardar
}

function peticionTexto(columna) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200)
        columna.textContent = this.responseText;
    };
    xhttp.open("GET", "textoEjercicio4.txt", true);
    xhttp.send();
}

function ejercicio4(n_filas, n_columnas, color, objeto) {
    let tabla = document.createElement('table');
    tabla.setAttribute("id","mi_tabla" );

    for (let i = 0; i < n_filas; i++) {
        let fila = document.createElement('tr');
        if (i % 2 != 0)
            fila.style.backgroundColor = color;
        tabla.appendChild(fila);
    }
        
    for (let fila of tabla.getElementsByTagName('tr')) {
        for (let i = 0; i < n_columnas; i++) {
            let columna = document.createElement('td');
            //columna.textContent = "Examen";
            peticionTexto(columna); // d)
            columna.addEventListener("click", borrarTexto); // b)
            fila.appendChild(columna);
        }
    }

    guardarLocalStorage(tabla); //c)
    objeto.appendChild(tabla);
}

/*******************************************************************************/
// EJERCICIO 5

google.charts.load('current', {'packages':['corechart']});
// google.charts.setOnLoadCallback(ejercicio5);  // DESCOMENTAR VER FUNCIONAMIENTO

function ejercicio5() {
    var data = google.visualization.arrayToDataTable([
    ["Año", "Poblacion", { role: "style" }],
    ["2017", 14252, 'color: green; opacity:0.1'],
    ["2018", 23360, 'color: green; opacity:0.25'],
    ["2019", 40421, 'color: green; opacity:0.5'],
    ["2020", 43500, 'color: green; opacity:0.75']
    ]);

    var options = {
        'title':'Evolucion de la población de Navalcarnero',
        'width': 700,
        'height': 300,
        'backgroundColor':'#4ab898',
        'animation' : {
            "startup": true,
            "duration" : 5000
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

/*******************************************************************************/
// PRUEBAS FUNCIONAMIENTO

// // let prueba2 = ejercicio2(["01/03/2016", "02/05/2019", "10/12/2008", "10/01/2018"], "01/01/2018", "01/01/2020");
// function main() {
//     ejercicio4(3, 4, "yellow", document.body);
// }

// window.addEventListener("load", main);
