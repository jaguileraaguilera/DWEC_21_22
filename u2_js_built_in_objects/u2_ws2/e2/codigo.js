/**En una nueva página web, pide al usuario un 
 * ángulo y calcula su seno, coseno y tangente
 */

var alfa = parseFloat(prompt('Introduzca un ángulo (en radianes)'));

var sen = Math.sin(alfa);
var coseno = Math.cos(alfa);
var tg = Math.tan(alfa);

document.write(`sen(${alfa}) = ${sen}<br>`);
document.write(`cos(${alfa}) = ${coseno}<br>`);
document.write(`tan(${alfa}) = ${tg}<br>`);