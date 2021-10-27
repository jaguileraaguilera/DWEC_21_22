class Lambdasian {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
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
        ((objDatos.grade >= 0) && (objDatos.grade <= 100)) ? 
            this.grade = objDatos.grade : this.grade = undefined;
        this.graduated = objDatos.graduated;
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

    graduate(){
        if (this.grade >= 70) {this.graduated = true;}
        return this.graduated;
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

    randomGrading(student) {
        do {
            var rand_grade = Math.floor(Math.random()*101);
            let add = Math.round(Math.random());
            if (!add) {rand_grade = -rand_grade;} 
        } while (!((student.grade + rand_grade <= 100) && (student.grade + rand_grade >= 0)));

        student.grade += rand_grade;
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

//Pruebas
let datos_instructor = {
    name : "Juan",
    age : 20,
    location : "Granada",
    speciality : "redux",
    favLanguage : "JavaScript",
    catchPhrase : "Don't forget the homies",
    gradClassName : "CS1",
    favInstructor: "Sean"
}
let datos_estudiante = {
    name : "Juan",
    age : 20,
    location : "Granada",
    previousBackground : "Bachillerato",
    className : "2DAW",
    favSubjects : ['HTML', 'CSS', 'JS'],
    grade : 50
}
s = new Student(datos_estudiante);
i = new Instructor(datos_instructor);
for (j=0; j <= 100; j++)
    i.randomGrading(s);
