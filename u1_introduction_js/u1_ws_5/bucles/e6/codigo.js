var n = parseFloat(prompt('Introduzca un número'));

var prod = 1;
for (let i = 1; i <= 10; i++) {
    prod = n * i;
    document.write(`${n} * ${i} = ${prod}<br>`)
    prod = 0;
}