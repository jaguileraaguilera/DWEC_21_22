function celsiusToFarenheit(t_celsius){
    return (9/5)*t_celsius + 32;
}

function farenheitToCelsius(t_faren) {
    return (5/9)*(t_faren - 32);
}

// Conversión de Celsius a Farenheit
t_celsius = parseFloat(prompt('Introduzca la temperatura en grados Celsius:'));
t_faren = celsiusToFarenheit(t_celsius);

// Conversión de Farenheit a Celsius
t_f = parseFloat(prompt('Introduzca la temperatura en grados Farenheit:'));
t_c = farenheitToCelsius(t_f);


console.log(t_celsius + ' ºC is ' + t_faren + ' ºF');
console.log(t_f + ' ºF is ' + t_c + ' ºC');
