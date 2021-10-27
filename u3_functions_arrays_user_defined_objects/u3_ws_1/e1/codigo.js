function maximo(...numeros) {
    max = numeros[0];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return max;
}