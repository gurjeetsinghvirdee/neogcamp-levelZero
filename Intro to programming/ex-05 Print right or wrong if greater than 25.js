var readlineSync = require('readline-sync');

var myAge = readlineSync.question("Am I older than 25? ");

console.log("You entered " + myAge);

if (myAge === "yes") {
  console.log("You are right!");
} else {
  console.log("Huh! lier😒");
}

console.log(myAge);