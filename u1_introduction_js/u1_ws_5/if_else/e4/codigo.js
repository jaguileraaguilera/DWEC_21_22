n_hermanos = parseInt(prompt('Introduzca su número de hermanos:'));
cantidad = parseInt(prompt('Introduzca una cantidad'));

if (n_hermanos > 3) {
    alert(cantidad * 0.85);
}
else if ((n_hermanos <= 3) && (n_hermanos >= 1)) {
    alert(cantidad * 0.95);
}
else {
    alert(cantidad);
}
