function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function lanzamiento() {
    return rand(1,7);
}

var contador = [0, 0, 0, 0, 0, 0];
for (let i = 0; i < 6000; i++) {
    var num = lanzamiento();
    contador[num - 1]++;
}

for (num of contador)
    console.log(num);
