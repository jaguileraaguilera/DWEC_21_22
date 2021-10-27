function factorial(n) {
    if (n == 0)
        return 1;
    else
        return n * factorial(n - 1);
}

document.write('<table border = "1">');
document.write('<tr>');
    for (let i = 1; i <= 10; i++) {
        document.write('<td>factorial ' + i + '</td>');
    }
document.write('</tr>');
    document.write('<tr>');
        for (let i = 1; i <= 10; i++) {
            document.write('<td>' + factorial(i) + '</td>');
        }
    document.write('</tr>');
document.write('</table>');