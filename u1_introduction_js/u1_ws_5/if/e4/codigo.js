var n = Number(prompt('Introduzca un número:'));

if (n > 100) {
    n = n * 0.85;
    alert('Con el descuento del 15% su número es ' + n);
}