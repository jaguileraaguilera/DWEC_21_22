n1 = Number(prompt('Introduzca un número'));
n2 = Number(prompt('Introduzca otro número'));
ope = prompt('Introduzca un operador (+ - * / )')

switch (ope) {
    case '+':
        alert(n1 + n2);
        break;
    case '-':
        alert(n1 - n2);
        break;
    case '*':
        alert(n1 * n2);
        break;
    case '/':
        alert(n1 / n2);
        break;
    default:
        alert('No ha introducido el signo correctamente.');
}