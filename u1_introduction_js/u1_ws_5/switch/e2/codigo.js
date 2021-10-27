var n =parseInt(prompt('Introduzca un número entero'));
// NO TRAGA CON EL SWITCH
// switch (n){
//     case n % 2 == 0: 
//         console.log('Es par');
//         break;
//     case n % 3 == 0:
//         console.log('Es múltiplo de tres');
//         break;
//     case n % 5 == 0:
//         console.log('Es múltiplo de cinco');
//         break;
//     default :
//         console.log('Es múltiplo de otro número.');
// }

if (n % 2 == 0) {
    console.log('Es par');
}
else if (n % 3 == 0) {
    console.log('Es múltiplo de tres');
}
else if (n % 5 == 0) {
    console.log('Es múltiplo de cinco');
}
else {
    console.log('Es múltiplo de otro número');
}
