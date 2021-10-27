/** Diseña una web que cree un Array llamado clase que contenga información de una clase. 
Cada elemento del array debe ser una tupla de 4 campos: nombre, edad, nota primer 
trimestre, nota segundo trimestre y nota tercer trimestre (todos separados por comas). Por 
ejemplo: clase[0] = “Angel Garcia, 20, 6, 7, 10” */
class Estudiante {
    constructor(nombre, edad, primer_t, segundo_t, tercer_t) {
        this.nombre = nombre;
        this.edad = edad;
        this.primer_t = primer_t;
        this.segundo_t = segundo_t;
        this.tercer_t = tercer_t;
    }
}

var clase = [
    new Estudiante('Javier',21,10,10,10),
    new Estudiante('Luis',20,7,8,9),
    new Estudiante('Jose',19,10,5,6),
    new Estudiante('María', 4,5,6)
];