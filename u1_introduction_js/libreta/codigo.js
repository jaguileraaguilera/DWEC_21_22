// if (true) 
// {
//     let mivariable=3;
// }

// let $mi_var = 3;
// document.write("<h1>valor de la variable " + $mi_var + "<h1>");

// let mivariable = 3;
// var otra_variable = 5;
// const tercera_variable = 8;
// otra_mas = 25;

// console.log(mivariable);
// console.log("esto es una prueba");
// console.warn("esto es un aviso");


function suma(valor1, valor2, valor3=0) { // valor por defecto
    let total = valor1 + valor2 + valor3;
    return total;
}

let mis_numeros = [3,5,10];

mas_suma = suma(...mis_numeros); // spread operator
array = [9,11];

dosArraysJuntos = [...mis_numeros, ...array];

function suma_2(arrayParametros){
    let result = 0;
    for (num of arrayParametros)
        result += num;
    return result;
}

let una_suma = suma_2(dosArraysJuntos);
