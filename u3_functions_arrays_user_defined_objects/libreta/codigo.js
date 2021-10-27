// //Función anónima
// let a = function(valor=0) {
//     return valor*3;
// }

// b = a;

// setInterval(function(){console.log("a")}, 1000);
// setInterval(()=>{console.log("a")}, 1000); //funcion arrow, sintaxis abrevidada funcion anónima
// setInterval(()=>console.log("a"), 1000); // si tiene una sola línea podemos ahorrarnos las llaves.

// // otro ejemplo
// a = () => 3;
// b = function(){return 3}; // a y b son lo mismo

// //funciones recursivas
// function factorial(n) {
//     if (n == 0)
//         return 1;
//     else
//         return n * factorial(n - 1);
// }

// notas = [4,8,3,10,5];

// notas.sort((a,b) => a-b);

// console.log(notas);

// var items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
// ];

// items.sort((a, b) => a.value - b.value);
// console.log(items)

// /**Crear array con 10 numeros y ordenar por
//  * orden creciente y decreciente
//  * con 10 objetos y ordenar. En caso de igualdad
//  * ordenar por orden alfabético
//  */

// numeros = [5,1234,5,6,7,5,4,434333,3,3,323,2,24,5,56];
// pokemon = [
//     {nombre: "Pikachu", tipo: "Eléctrico"},
//     {nombre: "Jolteon", tipo: "Eléctrico"},
//     {nombre: "Bulbasur", tipo: "Planta"},
//     {nombre: "Charmeleon", tipo: "Fuego"}
// ]

// // ordenar por orden creciente y decreciente array numeros
// numeros.sort((a,b) => a.value - b.value);
// console.log(numeros);
// numeros.sort((a,b) => b.value - a.value);
// console.log(numeros);

// // ordenar pokemon por tipo (en caso de igualdad, por orden alfabético)
// pokemon.sort((p1, p2) => { // intentar hacerlo más compacto
//     if (p1.tipo > p2.tipo)
//         return 1;
//     else if (p1.tipo < p2.tipo)
//         return -1;
//     else {
//         if (p1.nombre > p2.nombre)
//             return 1;
//         else if (p1.nombre < p2.nombre)
//             return -1;
//         else
//             return 0;
//     }
// });

// console.log(pokemon);

class Alumno{
    constructor(nombre, apellidos, curso){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.curso = curso;
    }


    imprimeDatos(){
        console.log(`El alumno ${this.nombre} ${this.apellidos} pertenece a ${this.curso}.`);
    }

    despertar(segundos){
        setTimeout(()=>{
            console.log(`Acaba de despertase ${this.nombre}`)}
            , segundos*1000)
    }
}


class AlumnoCiclos extends Alumno {
    constructor(nom, ape, curso, nivelFrikismo){
        super(nom,ape,curso);
        this.frikometro = nivelFrikismo;
    }

    getInfor() {
        super.imprimeDatos()
        console.log('y su nivel de frikismo es ' + this.frikometro);
    }
}

// let alumno1 = new Alumno('Carlos',"Moreno","Bach");
// alumno1.imprimeDatos();
// let al2 = new Alumno('Pablo', 'Muñoz', '2eso');
let al3 = new AlumnoCiclos('Pablo', 'Muñoz', '2DAW', 100);
al3.getInfor();
// al2.despertar(6);