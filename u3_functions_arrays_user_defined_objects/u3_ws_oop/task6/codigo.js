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
