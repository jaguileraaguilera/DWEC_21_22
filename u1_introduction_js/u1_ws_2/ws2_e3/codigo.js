const PI = 3.141592;
r = Number(prompt('Introduce the radius of the circle:'));

if (r > 0) {
    area = PI * r**2;
    circunference = 2 * PI * r;

    console.log('The circunference is ' + circunference + ' m');
    console.log('The area is ' + area + ' m^2');
}
else {
    console.log('You should have introduced a positive value for the radius');
}

