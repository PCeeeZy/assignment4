$( document ).ready(function() {
    // page load check.

// ********Global Variables*************
        var randomTarget;
    
        var turtleValue1;
        var turtleValue2;
        var turtleValue3;
        var turtleValue4;
    
        var currentScore = 0;
        var scoreboardWins = 0;
        var scoreboardLossses = 0;

        var gameBegin = false;
    

// **************What happens upon start of new game************

    function newGame() {

        // randomTarget--- The random number shown at the start of the game should be between 19 - 120.
        // choose random number between 19-120
        randomTarget = [Math.floor(Math.random) * 101 + 19];

        // display random number to #randomGoal
        $("#randomTarget").text(randomTarget);

            
        // turtleValues-- Random numbers 1-12 should be assigned to each turtleValue
        var turtleValue1 = [Math.floor(Math.random) * 12 + 1];
        var turtleValue2 = [Math.floor(Math.random) * 12 + 1];
        var turtleValue3 = [Math.floor(Math.random) * 12 + 1];
        var turtleValue4 = [Math.floor(Math.random) * 12 + 1];

    }

// **********What happens when you click a turtle*******************

    // Each image CLICK will add their value to the currentScore
    // currentScore is updated and pushed to #currentScore
        
    $("#turtleImage1").on("click", function addTurtle1() {
        currentScore = currentScore + turtlevalue1;
        $("#currentScore").text(currentScore);
    });
    // Repeat for each turtle
    $("#turtleImage2").on("click", function addTurtle2() {
        currentScore = currentScore + turtlevalue2;
        $("#currentScore").text(currentScore);
    });
    $("#turtleImage3").on("click", function addTurtle3() {
        currentScore = currentScore + turtlevalue3;
        $("#currentScore").text(currentScore);
    });
    $("#turtleImage2").on("click", function addTurtle2() {
        currentScore = currentScore + turtlevalue2;
        $("#currentScore").text(currentScore);
    });


// *********RESET ROUND************************

    // If gameBegin is false we want to start a new game
    if (!gameBegin) {
        gameBegin = True;
        currentScore = 0;
        newGame();
    }

    
//  ******LOSS CONDITION******

    // If currentScore is GREATER than randomTarget then add a loss to scoreboard and reset the game.
    if (currentScore > randomTarget) {
        scoreboardLosses++;
        $("#scoreboardLosses").text("Losses: " + scoreboardLosses);
        gameBegin = false;
    }

// *******WIN CONDITION**********

    // If currentScore is EQUAL to randomTarget then add a win to scoreboard and RESET the game.
    if (currentScore === randomTarget) {
        scoreboardWins++;
        $("#scoreboardWins").text("Wins: " + scoreboardWins);
        gameBegin = false;
    }


















        


        


})
