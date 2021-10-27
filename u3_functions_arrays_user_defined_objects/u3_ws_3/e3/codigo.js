/**Solucion recursiva (también se puede hacer iterativo con un do-while o un while)*/
var tablero = [
[34, 21, 32, 41, 25],
[14, 42, 43, 14, 31],
[54, 45, 52, 42, 23],
[33, 15, 51, 31, 35],
[21, 52, 33, 13, 23]
];

var visitadas = [];

function treasureHunt(tablero, i, j) {
    if (tablero[i][j] == (i+1)*10 + (j+1))
        return tablero[i][j];
    else {
        visitadas.push(tablero[i][j]);
        let nvs_coords = String(tablero[i][j]);
        return treasureHunt(tablero, nvs_coords[0]-1, nvs_coords[1]-1); // Se aprovecha la laxitud de javascript con los tipos
    }
}

let celda_tesoro = treasureHunt(tablero, 0, 0);