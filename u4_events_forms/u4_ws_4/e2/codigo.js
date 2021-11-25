function extraerNumero(cadena) {
    let acumulador = '';

    for (char of cadena) {
        if (char === '.' || char == Number(char))
            acumulador += char;
    }

    return Number(acumulador);
}

function aumentarTexto() {
    let size = document.body.style.fontSize;
    if (!size) {
        size = '1.5rem';
    }
    else {
        size = extraerNumero(size);
        size += 0.5;
        size = String(size) + 'rem';
    }
    document.body.style.fontSize = size;
}

function disminuirTexto() {
    let size = document.body.style.fontSize;
    if (!size) {
        size = '0.5rem';
    }
    else {
        size = extraerNumero(size);
        if (size > 0.5)
            size -= 0.5;
        else {
            if (size - 0.1 > 0)
                size -= 0.1;
        }
        size = String(size) + 'rem';
    }
    document.body.style.fontSize = size;
}

function restaurarTexto() {
    document.body.style.fontSize = '1rem';
}

function alinearIzq() {
    document.body.style.textAlign = "left";
}

function justificar() {
    document.body.style.textAlign = "justify";
}


function main() {
    let aumentar = document.getElementById("aumentar");
    let disminuir = document.getElementById("disminuir");
    let predeterminada = document.getElementById("predeterminada");
    let izq = document.getElementById("izq");
    let just = document.getElementById("just");

    aumentar.addEventListener("click", aumentarTexto);
    disminuir.addEventListener("click", disminuirTexto);
    predeterminada.addEventListener("click", restaurarTexto);
    izq.addEventListener("click", alinearIzq);
    just.addEventListener("click", justificar);
}

window.addEventListener("load", main);