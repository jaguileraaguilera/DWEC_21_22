/**One classic method for composing secret messages is called a square 
 * code. The spaces are removed from the english text and the 
 * characters are written into a square (or rectangle).  
 * Write a function, that recibe a message and return it coded 
 * (have the maximum message length be 81 characters). */

function strToListChar(str) {
    let list = [];
    for (char of str)
        list.push(char);

    return list;
}


function squareCoding(message, brake_length) {
    let joined = message.replaceAll(" ", "");
    let square = [];
    let encrypted = [];

    for (let i = 0; i < joined.length; i += brake_length) {
        (i + brake_length < joined.length) ?
            square.push(joined.slice(i, i + brake_length)) : 
            square.push(joined.slice(i, joined.length));
    }

    //return square;

    square = square.map(strToListChar);

    while (square[0].length) {
        let acumulator = "";
        for (row of square) {
            if (row.length)
                acumulator += row.shift();
        }
        encrypted.push(acumulator);
    }

    return encrypted.join(" ");
}


let sentence1 = "If man was meant to stay on the ground god would have given us roots";
let coded1 = squareCoding(sentence1, 8);
let sentence2 = "have a nice day feed the dog chill out";
let coded2 = squareCoding(sentence2, 4);