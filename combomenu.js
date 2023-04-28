const readline = require("readline-sync");

let menu = [
    'Fishburger: $2.50',
    'Cheeseburger: $1.50',
    'Hamburger: $1.00',
    'ChickenSandwich: $2.00'
];
console.log(`${menu}`);

let beverage = [
    'Pepsi',
    'Sprite',
    'DrPepper',
    'Squirt',
    'Water'
];
console.log(`${beverage}`);

let beverageSizes = [
    'small: $1.00',
    'medium: $2.50',
    'large: $3.25'
];
console.log(`${beverageSizes}`);

let answer1 = readline.question("What type of sandwich or burger would you like? \n Your Answer: ");
let answer2 = readline.question("Would you like a beverage? \n Your Answer: ");

if(answer2 == "yes"){
    let answer3 = readline.question("What beverage size would you like? \n Your Answer: ")
}
let answer4 = readline.question("What size would you like? \n Your answer:");

 