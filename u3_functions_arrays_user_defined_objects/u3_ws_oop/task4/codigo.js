class Lambdasian {
    constructor(objDatos) {
        this.name = objDatos.name;
        this.age = objDatos.age;
        this.location = objDatos.location
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Instructor extends Lambdasian {
    constructor(objDatos) {
        super(objDatos);
        this.speciality = objDatos.speciality;
        this.favLanguage = objDatos.favLanguage;
        this.catchPhrase = objDatos.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// Pruebas
let datos = {
    name : "Juan",
    age : 20,
    location : "Granada",
    speciality : "redux",
    favLanguage : "JavaScript",
    catchPhrase : "Don't forget the homies"
}

let ins = new Instructor(datos);
console.log(ins);