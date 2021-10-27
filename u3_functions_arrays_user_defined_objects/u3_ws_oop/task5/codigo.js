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


class Student extends Lambdasian {
    constructor(objDatos) {
        super(objDatos);
        this.previousBackground = objDatos.previousBackground;
        this.className = objDatos.className;
        this.favSubjects = objDatos.favSubjects;
    }

    listSubjects() {
        return "Loving " + this.favSubjects.join(', ') + "!";
    }

    PRAssigment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

let datos = {
    name : "Juan",
    age : 20,
    location : "Granada",
    previousBackground : "Bachillerato",
    className : "2DAW",
    favSubjects : ['HTML', 'CSS', 'JS']
}

let std = new Student(datos);
console.log(std);