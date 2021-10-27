// Conversión de Celsius a Farenheit
t_celsius = Number(prompt('Introduzca la temperatura en grados Celsius:'));

t_faren = (9/5)*t_celsius + 32;

console.log(t_celsius + ' ºC is ' + t_faren + ' ºF');

// Conversión de Farenheit a Celsius
t_f = Number(prompt('Introduzca la temperatura en grados Farenheit:'));

t_c = (5/9)*(t_f - 32);

console.log(t_f + ' ºF is ' + t_c + ' ºC');
