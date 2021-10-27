/**Write a program to search for the "saddle points" 
 * in a 5 by 5 array of integers. A saddle point is a
 * cell whose value is greater than or equal to any in 
 * its row, and less than or equal to any in its
 * column. There may be more than one saddle point in 
 * the array. Print out the coordinates of any saddle 
 * points your program finds. 
 * Print out "No saddle points" if there are none. */

// TERMINARLO, NO FUNCIONA 
function findSaddlePoints(array) {
    let saddle_point = [];

    for (i = 0; i < array.length; i++) {
        let aux = array[i][0];
        for (j = 1; j < array.length; j++) {
            if (array[i][j] > aux) {
                aux = array[i][j];
                for (k = 0; k < array.length; k++) {
                    if (!(array[k][j] < aux))
                        saddle_point.push([k,j]);
                }
            }
        }
    }

    return saddle_point;
}

let array = [ // el 7 tiene que salir
    [1,3,7],
    [3,4,8],
    [5,9,9]
];

let saddle_points = findSaddlePoints(array);