/*1. Crea una página en la que se muestre:
• Un número aleatorio entre 0 y 1.
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un nº 
aleatorio entre esos dos valores. */

// a)
document.write(Math.random() + '<br>');

// b)
document.write((Math.random() * (200 - 100) + 100) + '<br>');

// c)
var max = parseFloat(prompt('Introduzca un valor máximo'));
var min = parseFloat(prompt('Introduzca un valor mínimo'));
document.write((Math.random() * (max - min) + min) + '<br>');