/*Psuedocoding for brain storming process
set variables
create array showing options (#s are from 19-120)
random # generated and shown in random number box (#numbertoMatch)
user clicks gem and each gem worth x points (between 1-12)- has to be randomized
points added together and shown in total section
if total > random #, add +1 to losses and reset random#
if total = random #, +1 to wins and reset random # */

$( document ).ready(function(){
// define global variables //
var currentScore = 0;
var winCounter = 0;
var lossCounter = 0;
var targetScore = 0;


// game function
function startGame (){
    currentScore = 0;
    $("#yourScore").text(currentScore);

    /*$('#wins').text(winCounter);
    $('#losses').text(lossCounter);*/

//generate random target score (b/w 19-120)
    targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        console.log ("target score is", targetScore);
    $('#random-number').text(targetScore);

// Have array choose 4 #s between 1 and 12
var buttonValues = [];
for (var i = 0; i < 4; i++) {
    $('#button' + (i + 1)).attr('value', Math.round(Math.random() * 12 + 1));
        console.log(buttonValues);
    }
//have random #s assigned to each gem
    $('#button1').attr('value', buttonValues[0]);
    $('#button2').attr('value', buttonValues[1]);
    $('#button3').attr('value', buttonValues[2]);
    $('#button4').attr('value', buttonValues[3]);
}
startGame();

// game function

var playgame = function() {

    currentScore = currentScore + (Number($(this).attr('value')));
    $('#yourScore').text(currentScore)
    console.log("current score: " + currentScore);
    console.log("target score: " + targetScore);

    if (currentScore === targetScore) {
        winCounter++;
        $('#currentScore').text(currentScore);
        $('#wins').text(winCounter);
        startGame();
    }
    else if (currentScore > targetScore){
        lossCounter++;
        $("#yourScore").text(currentScore);
        $("#losses").text(lossCounter);
        startGame();
    }
}
// event listener for each clicked button
    $('.crystalButton').on('click', playgame);
});

//ISSUE WITH CODES:
//Each click increases a loss even if I don't surpass Target Score*/
//Does not Reset even when target score is reached