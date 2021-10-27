/**Mejora el ejercicio anterior para que continue
 * realizando el mismo cálculo hasta que el usuario
 * decida que no quiere continuar
 */

salir = false;

while (!salir){
    c1 = parseFloat(prompt('Introduzca cateto'));
    c2 = parseFloat(prompt('Introduzca cateto'));

    document.write('hipotenusa = ' + Math.hypot(c1,c2) + '<br>');

    if (prompt('Quiere salir? (s/n)') == 's')
        salir = true;
}