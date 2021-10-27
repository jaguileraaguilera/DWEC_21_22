/*Programa que imprime por pantalla una tabla de n_filas 
por n_columnas con un ancho y alto de fila determinado
por el usuario*/

var n_filas = parseInt(prompt('Introduzca número de filas'));
var n_cols = parseInt(prompt('Introduzca número de columnas'));
var ancho = parseInt(prompt('Introduzca el ancho de celda'));
var alto = parseInt(prompt('Introduzca el alto de celda'));

document.write(`<table border = "0" cellspacing="2" bgcolor="black" width = "${n_cols*ancho}">`);
for (let j = 1; j <= n_filas; j++){
    document.write(`<tr bgcolor="white" height = "${alto}">`);
    for (let i = 1; i <= n_cols; i++){
        document.write(`<td width = "${ancho}">&nbsp</td>`);
    }
    document.write(`<tr>`);
}
document.write('</table>');