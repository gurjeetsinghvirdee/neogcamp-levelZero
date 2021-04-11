var readlineSync = require('readline-sync');

var score = 0;

var questionOne = "Am I older than 25? "
var answerOne = "yes"

var userAnswer = readlineSync.question(questionOne);

console.log("You entered " + userAnswer);

if (userAnswer === answerOne) {
  console.log("You are right!");
  score = score + 1;
  console.log("Score is " + score);
} else {
  console.log("You are wrong!");
  score = score - 1;
  console.log("Score is " + score);
}

var questionTwo = "Am I from this city Mirzapur? "
var answerTwo = "no"

var userAnswer = readlineSync.question(questionTwo);

console.log("You entered " + userAnswer);

if (userAnswer === answerTwo) {
  console.log("You are right!");
  score = score + 1;
  console.log("Score is " + score);
} else {
  console.log("You are wrong!");
  score = score - 1;
  console.log("Score is " + score);
}



