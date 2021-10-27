/*Programa que dados el número de columnas, el alto
y el ancho genera una tabla de una fila*/

var n_cols = parseInt(prompt('Introduzca número de columnas'));
var alto = parseInt(prompt('Introduzca la altura en px:'));
var ancho = parseInt(prompt('Introduzca la anchura en px'));

var ancho_total = n_cols * ancho;


document.write(`<table border="0" cellspacing="2" bgcolor="black" width = "${ancho_total}">`);
document.write(`<tr bgcolor="white" height="${alto}"`);

for (let i = 0; i <= n_cols; i++)
    document.write(`<td width=${ancho}>&nbsp</td>`);

document.write('</tr>');
document.write('</table>');