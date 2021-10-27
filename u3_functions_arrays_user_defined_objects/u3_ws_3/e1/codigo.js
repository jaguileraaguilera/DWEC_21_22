/**1. Write examples with Arrays to solve the next problems 
 * using only Array methods (like iterators, etc...): */

var numeros = [1,3,234,5,33,678,2];

var palabras = ['Historia', 'Fisica', 'Ornitorrinco'];

function esPar(n) {
    return n % 2 == 0;
}

/* find largest number (podemos sacarlo con pop()) */
var mayor = 
numeros.sort((a,b) => a - b)[numeros.length - 1];
//console.log(mayor);

/* find longest string (podemos sacarlo con pop()) */
var mas_larga = 
palabras.sort((p1, p2) => p1.length - p2.length)[palabras.length - 1]; 
// console.log(mas_larga);

/* find even numbers (par) */
var pares = numeros.filter((num) => esPar(num));
// console.log(pares);

/* find odd numbers (impar) */
var impares = numeros.filter((num) => !esPar(num));
// console.log(impares);

/* find words that contain 'is' */
var contain_is = 
palabras.filter((palabra) => palabra.includes('is'));
// console.log(contain_is);

/* assert all numbers are divisible by three */
var divisibles_tres = 
numeros.filter((num) => num % 3 == 0);
// console.log(divisibles_tres);

/* zip two arrays together */
var juntos = palabras.concat(numeros);
// console.log(juntos);

/* sort joined array from smallest to largest */
juntos.sort((a,b) => String(a).length - String(b).length);
console.log(juntos);

/* remove the first word in the array */ // REVISAR
var todo = [1,2,3,4,5,6,'ASDF', 'QWERT'];
var first_word =
todo.splice(todo.indexOf(todo.find((e) => e === String(e))), 1);
// console.log(first_word);
// console.log(todo);

/* place a new word at the start of the array */
todo.unshift('al principio');

/* replace some elements */

