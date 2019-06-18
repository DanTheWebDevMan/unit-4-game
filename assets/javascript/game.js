// set variables
// create array showing options 
//random # generated and shown in random number box
    // variable[Math.floor(Math.random() * variable.lenght)];
//user clicks gem and each gem worth x points
//points added together and shown in total section
//
//if above random #, add +1 to losses and reset random#
//if total = random #, +1 to wins and reset random #

var userChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var wins = 0;
var losses = 0;
var result ;
var computerGuess = [];
var computerChoices = ["19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40"]


document.onkeyup = function(event) {
    userKeypressed = event.key;
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
