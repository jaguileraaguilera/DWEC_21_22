/**Realiza una página que cree un objeto de tipo 
 * Date y mueste en la página la siguiente 
 * información (cada una en una línea):
 * a) El año actual
 * b) El mes actual
 * c) La hora actual
 * d) Los minutos actuales
 * e) Los segundos actuales
 */

var fecha = new Date();

document.write('Año: ' + fecha.getFullYear() + '<br>');
document.write('Mes: ' + (fecha.getMonth() + 1) + '<br>');
document.write('Día: ' + fecha.getDate() + '<br>');
document.write('Horas: ' + fecha.getHours() + '<br>');
document.write('Minutos: ' + fecha.getMinutes() + '<br>');
document.write('Segundos: ' + fecha.getSeconds() + '<br>');