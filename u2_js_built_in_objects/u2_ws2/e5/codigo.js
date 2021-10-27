/**Crea una web para resolver ecuaciones de 2º grado.
 * Deberá de pedir por tanto los coeficientes y
 * mostrar las soluciones posibles.
 */

 var a = parseFloat(prompt('Introduzca coef a'));
 var b = parseFloat(prompt('Introduzca coef b'));
 var c = parseFloat(prompt('Introduzca coef c'));

 var discriminante = ((b*b) - (4*a*c));
 var x1 = ((-b + Math.sqrt(discriminante))/(2*a));
 var x2 = ((-b - Math.sqrt(discriminante))/(2*a));
 
 document.write("x1 = " + x1 + '<br>');
 document.write("x2 = " + x2 + '<br>');
 