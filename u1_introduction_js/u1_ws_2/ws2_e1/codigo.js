current_year = 2021;
birth_year = Number(prompt('Introduce your birth year:'));

if (birth_year <= current_year) {
    age = current_year - birth_year;
    console.log('They are either ' + age + ' or ' + (age - 1));
}
else {
    console.log('Your birth year must be higher or equal than the current year');
}