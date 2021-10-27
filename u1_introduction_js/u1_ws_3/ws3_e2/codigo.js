function calculateAge(current_year, birth_year){
    if (birth_year <= current_year) {
        age = current_year - birth_year;
        console.log('You are either ' + age + ' or ' + (age - 1));
    }
    else {
        console.log('Your birth year must be higher or equal than the current year');
    }
}

var current_year = new Date().getFullYear();

calculateAge(current_year, 2000);
calculateAge(current_year, 1999);
calculateAge(current_year, 1974);