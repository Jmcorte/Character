const readline=require('readline-sync');
let answer1 = readline.question("Hi I am a magic eight ball, i'm a fortune teller. \n Do you want to ask me a question?\n Your answer: ");
let answer2 = readline.question("what is your question? \n Your answer: ")

let answers = ['yes', 'no', 'maybe', 'it is certain', 'try again later', 'you are destined for it'];
let randomNum = Math.floor(Math.random() * answers.length);
let answer = answers[randomNum];

console.log(answer);
 