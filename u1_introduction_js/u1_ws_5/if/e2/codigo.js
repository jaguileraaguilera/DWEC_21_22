edad = Number(prompt('Introduzca su edad: '));

if ((edad <= 0) && (edad < 18)) {
    alert('Es menor de edad');
}
else if (edad >= 18) {
    alert('Es mayor de edad');
}
else {
    alert('Ha introducido una edad incorrecta.');
}