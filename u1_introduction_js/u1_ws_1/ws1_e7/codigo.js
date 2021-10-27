nota = Number(prompt('Introduzca una nota por teclado:'));

if ((nota >= 0) && (nota < 5)) {
    console.log('Suspenso');
}
else if ((nota >= 5) && (nota < 7)) {
    console.log('Aprobado');
}
else if ((nota >= 7) && (nota < 9)) {
    console.log('Notable');
}
else if ((nota >= 9) && (nota <= 10)){
    console.log('Sobresaliente');
}
else {
    console.log('No ha introducido una nota comprendida entre 0 y 10.');
}