/*Write a function that can take in any number 
of arguments, and returns the sum of all of the
arguments.*/

function suma(...datos){
    var suma = 0;

    for (dato of datos)
        suma += dato;
        
return suma;
}


suma = suma(1,2,3,4,'gato','perro');
console.log(suma);