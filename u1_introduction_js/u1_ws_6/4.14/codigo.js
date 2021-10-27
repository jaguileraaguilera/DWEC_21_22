/*Programa que dados el número de columnas, el alto
y el ancho genera una tabla de una fila.
Las columnas pares en blanco y las impares en negro.*/

var n_cols = parseInt(prompt('Introduzca número de columnas'));
var alto = parseInt(prompt('Introduzca la altura en px:'));
var ancho = parseInt(prompt('Introduzca la anchura en px'));

var ancho_total = n_cols * ancho;


document.write(`<table border="0" cellspacing="2" bgcolor="black" width = "${ancho_total}">`);
document.write(`<tr bgcolor="white" height="${alto}"`);

let i = 0;
while (i <= n_cols) {
    if (i % 2 != 0) 
        document.write(`<td width=${ancho} bgcolor="black">&nbsp</td>`);
    else
        document.write(`<td width=${ancho} bgcolor="white">&nbsp</td>`);
    i++;
}
    
document.write('</tr>');
document.write('</table>');