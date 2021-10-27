var edad = prompt('Introduzca su edad:');
var localidad = prompt('Introduzca su localidad:');

// if (((edad >= 18) && (edad <= 30)) && (localidad == 'Madrid')){
//     alert('Puede acceder al carnet de empresarios emprendedores');
// }

if ((18 <= edad <= 30) && (localidad == 'Madrid')){
    alert('Puede acceder al carnet de empresarios emprendedores');
}