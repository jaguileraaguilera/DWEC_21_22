/**Crea una web que calcule potencias */

b = parseFloat(prompt('Introduzca base'));
exp = parseFloat(prompt('Introduzca exponente'));

potencia = Math.pow(b, exp);

document.write(`${b}^${exp} = ${potencia}`);