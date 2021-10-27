/*Programa que imprime por pantalla un tablero de ajedrez.
Solicita al usuario el ancho de celda*/

var n_filas = 8
var n_cols = 8
var ancho = parseInt(prompt('Introduzca el ancho de celda'));

document.write(`<table border = "0" cellspacing="2" bgcolor="black" width = "${n_cols*ancho}">`);

for (let i = 1;  i<= n_filas; i++){
    document.write(`<tr bgcolor="white" height = "${ancho}">`);
    for (let j = 1; j <= n_cols; j++){
        if ((i % 2 != 0) && (j % 2 != 0))
            document.write(`<td bgcolor="black" width = "${ancho}">&nbsp</td>`);
        else if ((i % 2 == 0) && (j % 2 == 0))
            document.write(`<td bgcolor="black" width = "${ancho}">&nbsp</td>`);
        else
        document.write(`<td bgcolor="white" width = "${ancho}">&nbsp</td>`);
    }
    document.write(`<tr>`);
}

document.write('</table>');