function calcCircunference(radio) {
    return 2 * Math.PI * radio;
}

function calcArea(radius) {
    return Math.PI * r**2;
}

var r = parseFloat(prompt('Introduce the radius of the circle:'));

var circunference = calcCircunference(r);
var area = calcArea(r);

console.log('The circunference is ' + circunference + ' m');
console.log('The area is ' + area + ' m^2');
