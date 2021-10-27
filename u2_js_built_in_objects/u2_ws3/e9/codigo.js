/**Hola en formato cuadrado */
function invierteCadena(cad_arg) {
    var invertida = '';

    for (let i = cad_arg.length - 1; i >= 0; i--)
        invertida += cad_arg[i];

    return invertida;
}


function formatea_en_tabla(cad) {
    var n = cad.length;
    var inver_cad = invierteCadena(cad);

    document.write('<table>');
    for (let i = 0; i < n; i++) {
        document.write('<tr>')
        for (let j = 0; j < n; j++) {
            if (i == 0) 
                document.write(`<td>${cad[j]}</td>`);
            else if (i == n - 1)
                document.write(`<td>${inver_cad[j]}</td>`);
            else if (j == 0)
                document.write(`<td>${cad[i]}</td>`);
            else if (j == n - 1)
                document.write(`<td>${inver_cad[i]}</td>`);
            else 
                document.write(`<td>&nbsp</td>`);
        }
        document.write('</tr>');
    }
    document.write('</table>');
}