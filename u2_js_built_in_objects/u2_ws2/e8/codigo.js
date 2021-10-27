/**Crea una web en la que cada vez que se accede
 * se muestre una imagen (de modo aleatorio)
 * de entre tres posibles.
 */

n = Math.round((Math.random()*(3 - 1) + 1));

document.write(`<img src="gif${n}.gif">`);