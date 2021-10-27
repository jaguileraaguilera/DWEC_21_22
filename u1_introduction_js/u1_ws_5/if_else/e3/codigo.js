var edad = Number(prompt('Introduzca su edad:'));

if ((0 <= edad) && (edad <= 5)) {
    alert('Jardín de infancia');
}
else if ((6 <= edad) && (edad <= 11)) {
    alert('Primaria');
}
else if ((12 <= edad) && (edad <= 16)) {
    alert('ESO');
}
else if ((17 <= edad) && (edad <= 21)) {
    alert('Bachillerato o ciclos');
}
else if (edad > 21) {
    alert('Universidad');
}
