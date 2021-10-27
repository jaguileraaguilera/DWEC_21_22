class Lambdasian {
    constructor(objDatos) {
        this.name = objDatos.name;
        this.age = objDatos.age;
        this.location = objDatos.location
    }

    speak() {
        return `Hello my name is ${this.name},
                I am form ${this,location}`;
    }
}

//Pruebas
let datos = {
    name : "Juan",
    age : 20,
    location : "Granada"
}

let lamb = new Lambdasian(datos);