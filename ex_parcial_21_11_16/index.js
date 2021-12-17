function cuenta_letras(letra, cad) {
    let acumulador = 0;
    for (char of cad) {
        if (char == letra) {
            acumulador += 1;
        }
    }

    return acumulador;
}

function quitar_blancos(cad) {
    let acumulador = '';
    for (char of cad) {
        if (char != ' ') {
            acumulador += char;
        }
    }

    return acumulador;
}

function Ejercicio5(cad) {
    let cad_procesar = quitar_blancos(cad).toLowerCase();
    let letras_f = {};
    let resultado = '';

    for (letra of new Set(cad_procesar)) {
        let n_aste = cuenta_letras(letra, cad_procesar);
        let acumulador = '';

        for (let i = 0; i < n_aste; i++) {
            acumulador += '*';
        }

        letras_f[letra] = acumulador;
        resultado += letra + ':' + letras_f[letra] + ',';
    }

    return resultado;
}

//console.log(Ejercicio5('Las Vegas'));

/***************************************************************** */

function suma(v) {
    let acumulador = 0;
    for (valor of v) {
        acumulador += valor;
    }

    return acumulador;
}

function compare(a, b) {
    if (suma(a) < suma(b)) {
      return -1;
    }
    if (suma(a) > suma(b)) {
      return 1;
    }
    return 0;
}
  

function Ejercicio6(m) {
    m.sort(compare);
    return m;
}

// console.log(Ejercicio6([[1,3],[4,2],[2,1]]));

/******************************************************* */



function inicia() {
    function Ejercicio7(identificador) {
        document.getElementById(identificador).style = "font: 14px Comic Sans MS ; color:red; background-color: yellow;";
    }

    Ejercicio7("parrafo");

    /************************************************** */

    function randint(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function hacer_click(e) {
        click[e.target] += 1;
        console.log("El div de color " + e.target.style.backgroundColor + 'ha sido clicado ' + click[e.target] + 'veces.' )
    }

    var click = {};

    function Ejercicio8(){
        let array_divs = document.querySelectorAll('div');
        
        for (div of array_divs) {
            // div.style.backgroundColor = 'rgb(' + randint(255) + ',' + randint(255) + ',' + randint(255)+')';
            click[div] = 0;
        }

        for (div of array_divs) {
            div.onclick = hacer_click;
        }

    }

    Ejercicio8();
}

window.addEventListener("load", inicia);

/*
cd Desktop
cd examen_javier_aguilera
git init
git add .
git commit -m "Examen"
git remote add origin https://github.com/jaguileraaguilera/examenParcial.git
git branch -M master
git push -u origin master
*/