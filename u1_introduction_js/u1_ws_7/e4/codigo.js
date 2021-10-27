/*Write a function called combineTwoArrays that 
takes in two arrays as arguments, and returns a 
singlearray that combines both (using the spread 
operator).*/

function combineTwoArrays(arr1, arr2){
    return [...arr1, ...arr2];
}