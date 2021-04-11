var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log(userName)

var welcomeMessage = "Welcome " + userName;  // string concatenation
console.log(welcomeMessage);