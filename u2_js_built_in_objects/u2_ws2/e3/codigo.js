/**Crea una web que calcula la hipotenusa de un
 * triángulo rectángulo (pidiendo al usuario
 * el tamaño de los catetos)
 */

c1 = parseFloat(prompt('Introduzca cateto'));
c2 = parseFloat(prompt('Introduzca cateto'));

document.write('hipotenusa = ' + Math.hypot(c1,c2));