/**Write a function called squareAndSum that takes 
 * in any number of arguments, squares them, then
 * sums all of the squares. */

function squareAndSum(...lista_numeros) {
    suma = 0;
    for (num of lista_numeros)
        suma += num**2;
    
    return suma
}