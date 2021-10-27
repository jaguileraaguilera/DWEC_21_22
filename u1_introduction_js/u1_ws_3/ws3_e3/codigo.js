const MAX_AGE = 100;

function calculateSupply(age, amount_day) {
    return amount_day * ((MAX_AGE - age) * 365);
}

current_age = parseInt(prompt('Introduce your current age:'));
amount_day = Math.round(parseFloat(prompt('Stimate an amount per day:')));

reserves = calculateSupply(current_age, amount_day);
console.log('You will need ' + reserves + ' to last until de ripe old age of ' + MAX_AGE);
