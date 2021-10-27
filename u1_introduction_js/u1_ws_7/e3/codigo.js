/*Write a function called countTheArgs that can 
take any number of arguments, and returns the number
of arguments that are passed in */

function countTheArgs(...argumentos){
    return argumentos.length;
}


var n_argumentos = countTheArgs('cat', 'dog', 'frog', 'bear');
console.log(n_argumentos);
