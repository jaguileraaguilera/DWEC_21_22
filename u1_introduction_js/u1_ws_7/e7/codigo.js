/**Write a function called combineAllArrays that 
 * takes in any number of arrays as arguments and
 * combines all of them into one array. */

function combineAllArrays(...arrays) {
    array_acumulador = [];
    for (array of arrays)
        array_acumulador = [...array_acumulador, ...array];
    return array_acumulador;
}