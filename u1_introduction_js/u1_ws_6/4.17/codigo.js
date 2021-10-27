/*Programa que imprime por pantalla las tablas de 
multiplicar del 1 al 10*/

for (let i = 1; i <= 10; i++) {
    document.write(`<h3>Tabla del ${i}:</h3>`);
    for (let j = 1; j <= 10; j++){
            document.write(`${j}x${i}=${i*j}<br>`);
    }
}