a = Number(prompt('Introduzca un número por teclado:'));
b = Number(prompt('Introduzca otro número por teclado:'));

if (a < b) {
    console.log(b + ' es el mayor');
} 
else if (a == b) {
    console.log(a + ' es igual a ' + b);
} 
else {
    console.log(a + ' es el mayor');
}