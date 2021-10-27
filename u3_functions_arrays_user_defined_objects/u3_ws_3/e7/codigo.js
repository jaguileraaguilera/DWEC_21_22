/**Write a function that return the original message from 
 * one coded (with square coding) recieved as argument */
 
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


function squareDecoding(message) {
    let square = message.split(" ");
    let decoded = [];

    square = square.map(strToListChar);

    while (square[0].length) {
        let acumulator = "";
        for (row of square) {
            if (row.length)
                acumulator += row.shift();
        }
        decoded.push(acumulator);
    }
    return decoded.join("");
}


let sentence1 = "If man was meant to stay on the ground god would have given us roots";
let coded1 = squareCoding(sentence1, 8);
let decoded1 = squareDecoding(coded1);
