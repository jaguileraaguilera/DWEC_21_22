var num_adivinar = parseInt(prompt('J1: Introduzca un número entero'));
var num = parseInt(prompt('J2: Introduzca un número entero para adivinar'));

while (num != num_adivinar) {
    if (num < num_adivinar)
        alert('El número es mayor');
    else if (num > num_adivinar)
        alert('El número es menor');
    var num = parseInt(prompt('J2: Introduzca un número entero para adivinar'));
}

alert('Acertaste!');