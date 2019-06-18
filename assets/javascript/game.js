// set variables
// create array showing options (#s are from 19-120)
//random # generated and shown in random number box (#numbertoMatch)
//user clicks gem and each gem worth x points (between 1-12)- has to be randomized
//points added together and shown in total section
//
//if above random #, add +1 to losses and reset random#
//if total = random #, +1 to wins and reset random #


// Code to randomly generate # (between 19-120)  
$(document).ready(function() {  
    var random = Math.floor(Math.random() * 101 + 19);

//assign(append) to #random-number div 
    $('#random-number').text(random);

// Assign each gem a random point value between 1-12 //
    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);

// Declare variables for score keeping purposes
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

//resets the game when a loss or win occurs
$('#wins').text(wins);
$('#losses').text(losses);

function reset () {
    random = Math.floor(Math.random() * 101 + 19)
    console.log(random)
    $('#random-number').text(random);
    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);
    userTotal = 0;
    $('#currentScore').text(userTotal);
}

// add win to userTotal
    function victory() {
        text('You won!');
        wins++;
        $('#wins').text(wins);
        reset()
    }

// add loss to userTotal
    function loser() {
        text('You lost!');
        losses++;
        $('#losses').text(losses);
        reset()
    }

// each gem has certain # of random points assigned to them when clicked//
    $("g1").on('click', function() {
        userTotal = userTotal + gem1;
        console.log("New userTotal =" + userTotal);
    $('currentscore').text(userTotal);

// win/lose conditions
        if (userTotal === random) {
            victory();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $("g2").on('click', function() {
        userTotal = userTotal + gem2;
        console.log("New userTotal =" + userTotal);
    $('currentscore').text(userTotal);
        if (userTotal === random) {
            victory();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $("g3").on('click', function() {
        userTotal = userTotal + gem3;
        console.log("New userTotal =" + userTotal);
    $('currentscore').text(userTotal);
        if (userTotal === random) {
            victory();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $("g4").on('click', function() {
        userTotal = userTotal + gem4;
        console.log("New userTotal =" + userTotal);
    $('currentscore').text(userTotal);
        if (userTotal === random) {
            victory();
        }
        else if (userTotal > random) {
            loser();
        }
    });
});