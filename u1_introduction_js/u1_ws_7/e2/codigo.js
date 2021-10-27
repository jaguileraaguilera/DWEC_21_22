/*Write a function called addOnlyNums that can 
take in any number of arguments (including numbers or
strings), and returns the sum of only the numbers*/

function addOnlyNums(...datos){
    var suma = 0;

    for (dato of datos){
        if (typeof dato == "number")
            suma += dato;
    }
    
return suma;
}


suma = addOnlyNums(1,2,3,4,'gato','perro');
console.log(suma);