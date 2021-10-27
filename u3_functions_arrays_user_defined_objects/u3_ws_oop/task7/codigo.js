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
    constructor(name, age, location, previousBackground, 
                className, favSubjects, grade, graduated=false) {
        super(name, age, location);
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
        ((grade >= 0) && (grade <= 100)) ? 
            this.grade = grade : this.grade = undefined;
        this.graduated = graduated;
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
    constructor(name, age, location, speciality, 
                favLanguage, catchPhrase) {
        super(name, age, location);
        this.speciality = speciality;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
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
    constructor(name, age, location, speciality,favLanguage, 
                catchPhrase, gradClassName, favInstructor) {
        super(name, age, location, speciality, favLanguage,
                catchPhrase);
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    // standUp (TENGO QUE PREGUNTAR QUE HAY QUE HACER)

    debugsCode(student, subject){
        returns `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//Pruebas
s = new Student('a','b','c','d','DAW',['html'],50);
i = new Instructor('pepe',50,'villaconejos','javascript', 'javascript','do homework');
for (j=0; j <= 100; j++)
    i.randomGrading(s);
