class Lambdasian {
    constructor(objDatos) {
        this.name = objDatos.name;
        this.age = objDatos.age;
        this.location = objDatos.location
    }

    speak(){
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


class ProjectManager extends Instructor {
    constructor(objDatos) {
        super(objDatos);
        this.gradClassName = objDatos.gradClassName;
        this.favInstructor = objDatos.favInstructor;
    }

    // standUp (TENGO QUE PREGUNTAR QUE HAY QUE HACER)

    debugsCode(student, subject){
        returns `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

// Pruebas
let datos = {
    name : "Juan",
    age : 20,
    location : "Granada",
    speciality : "redux",
    favLanguage : "JavaScript",
    catchPhrase : "Don't forget the homies",
    gradClassName : "CS1",
    favInstructor: "Sean"

}

let ins = new ProjectManager(datos);
console.log(ins);
