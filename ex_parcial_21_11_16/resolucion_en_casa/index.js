function cuenta_letras(letra, cad) {
    let acumulador = 0;

    for (char of cad) {
        if (char == letra)
            acumulador += 1;
    }

    return acumulador;
}

function quitar_blancos(cad) {
    let acumulador = '';

    for (char of cad) {
        if (char != ' ')
            acumulador += char;
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
    for (valor of v)
        acumulador += valor;

    return acumulador;
}

function compare(a, b) {
    if (suma(a) < suma(b))
      return -1;
    else if (suma(a) > suma(b))
      return 1;
    else 
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
    function colorAleatorio() {
        return "#"+ Math.floor(Math.random() * 16777215).toString(16);
    }
    
    function hacerClick(e) {
        console.log("El div de color " + e.target.style.backgroundColor + 
        ' ha sido clicado ' + ++e.target.click + ' veces.');
    }

    function Ejercicio8() {
        let array_divs = document.querySelectorAll('div');
        
        for (let div of array_divs) {
            div.style.backgroundColor = colorAleatorio();
            div.click = 0;
            div.addEventListener("click", hacerClick);
        }
    }

    Ejercicio8(); //SOLO ESTE FALTABA POR HACER, LO TENÍA CASI RESUELTO
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