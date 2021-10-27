function sumEveryOther(vector){
    let suma = 0;

    for (let i = 0; i < vector.length; i += 2)
        suma += vector[i];

    return suma;
}

var array = [1,2,3,4,5,6]
var suma = sumEveryOther(array);