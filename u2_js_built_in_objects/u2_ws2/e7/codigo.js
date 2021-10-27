/**Crea una web que gener una tabla con dos columnas.
 * En la primera un número ascendente y la otra el
 * valor de su seno.
 */

document.write('<table border = "1">');

for (let i = 1; i <= 100; i++){
    document.write('<tr>')
        document.write('<td>' + i + '</td>');
        document.write('<td>' + Math.sin(i) + '</td>');
    document.write('</tr>');
}

document.write('</table>');
