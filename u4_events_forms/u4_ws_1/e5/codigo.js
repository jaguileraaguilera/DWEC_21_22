/**Añade las siguientes funcionalidades al ejercicio anterior:
 * ◦Borrado de lineas con el ratón (mediante la pulsación del botón que tú 
 * decidas).
 * ◦Borrar por completo el canvas (con un botón) */

 function inicia() {
    function crearCanvas() {
        document.write('<table border = "1">');
        for (i=0; i<100; i++) {
            document.write("<tr>");
            for (j=0; j < 100; j++) {
                document.write("<td></td>");
            }
            document.write("</tr>");
        }
        document.write("</table>");
    }

    function colorearCelda(e) {
        let rojo = 'rgb(255,0,0)';
        let azul = 'rgb(0,0,255)';
        let blanco = 'rgb(255,255,255)';
        if (e.altKey) 
            e.target.style.backgroundColor = rojo;
        else if (e.shiftKey)
            e.target.style.backgroundColor = azul;
        else if (e.ctrlKey)
            e.target.style.backgroundColor = blanco;
    }

    function borrarCanvas(e) {
        let celdas = document.querySelectorAll('td');
        let blanco = 'rgb(255,255,255)'
        celdas.forEach((celda)=>celda.style.backgroundColor = blanco);
    }
    
    // Creo el boton y el canvas
    document.write('<button>Borrar canvas</button>');
    crearCanvas();

    //Funcionalidad de borrado
    const btn = document.querySelector('button');
    btn.addEventListener("click", borrarCanvas);

    //Funcionalidad de coloreado
    let celdas = document.querySelectorAll('td');
    celdas.forEach((celda)=>celda.onmousemove = colorearCelda);
    
}

window.addEventListener("load", inicia);