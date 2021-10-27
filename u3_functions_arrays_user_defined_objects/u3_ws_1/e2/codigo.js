function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function lanzamiento() {
    return rand(1,7);
}
