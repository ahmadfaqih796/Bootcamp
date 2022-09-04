const reader = require("readline-sync"); //npm install readline-sync

const MIN = 1;
const MAX = 10;

let secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

let guesses = 0;
let hint = '';
let number = 0;



do {
    let input = reader.question(`Please enter a number between ${MIN} and ${MAX}: `);
    number = parseInt(input);
    guesses++;

    if (number > secretNumber) {
        hint = ', and less than ' + number;
    } else if (number < secretNumber) {
        hint = ', and greater than ' + number;
    } else if (number == secretNumber) {
        console.warn(`Bravo! you're correct after ${guesses} guess(es).`);
    }
    
} while (number != secretNumber);