var suma = 0;
for (let i = 1; i <= 10; i++) {
    n = parseFloat(prompt('Introduzca un número'));
    suma += n;
}

document.write('La suma de los números introducidos vale ' + suma);