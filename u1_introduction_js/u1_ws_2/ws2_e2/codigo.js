current_age = Number(prompt('Introduce your current age:'));
max_age = Number(prompt('Stimate your maximum age:'));
amount_day = Number(prompt('Stimate an amount per day:'));

reserves = amount_day * ((max_age - current_age) * 365)

console.log('You will need ' + reserves + ' to last until de ripe old age of ' + max_age);
