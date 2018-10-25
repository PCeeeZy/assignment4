$(document).ready(function() {
    // page load check.   

// **************What happens upon start of new game************

    $("#startGameBtn").on("click", function newGame() {
        // ********Global Variables*************
        var randomTarget;
    
        var turtleValue1;
        var turtleValue2;
        var turtleValue3;
        var turtleValue4;
    
        var currentScore = 0;
        var scoreboardWins = 0;
        var scoreboardLossses = 0;

        gameBegin = true;

        // randomTarget--- The random number shown at the start of the game should be between 19 - 120.
        // choose random number between 19-120
        randomTarget = (Math.floor((Math.random()) * 101) + 19);
        console.log("Target: " + randomTarget);

        // display random number to #randomGoal
        $("#randomTarget").text("Target: " + randomTarget);

            
        // turtleValues-- Random numbers 1-12 should be assigned to each turtleValue
        turtleValue1 = (Math.floor((Math.random()) * 12) + 1);
        console.log("1st " + turtleValue1);
        turtleValue2 = (Math.floor((Math.random()) * 12) + 1);
        console.log("2nd " + turtleValue2);
        turtleValue3 = (Math.floor((Math.random()) * 12) + 1);
        console.log("3rd " + turtleValue3)
        turtleValue4 = (Math.floor((Math.random()) * 12) + 1);
        console.log("4th " + turtleValue4);

        // hide start button
        $("#startGameBtn").hide();

        // **********What happens when you click a turtle*******************

        // Each image CLICK will add their value to the currentScore
        // currentScore is updated and pushed to #currentScore
            
        $("#turtle1").on("click", function() {
            currentScore = currentScore + turtleValue1;
            $("#currentScore").text(currentScore);
        });
        // Repeat for each turtle
        $("#turtle2").on("click", function() {
            currentScore = currentScore + turtleValue2;
            $("#currentScore").text(currentScore);
        });
        $("#turtle3").on("click", function() {
            currentScore = currentScore + turtleValue3;
            $("#currentScore").text(currentScore);
        });
        $("#turtle4").on("click", function() {
            currentScore = currentScore + turtleValue4;
            $("#currentScore").text(currentScore);
        });
        //  ******LOSS CONDITION******

        // If currentScore is GREATER than randomTarget then add a loss to scoreboard and reset the game.
        if (currentScore > randomTarget) {
            scoreboardLosses++;
            $("#scoreboardLosses").text("Losses: " + scoreboardLosses);
            gameBegin = false;
            $("#startGameBtn").show();

        };

        // *******WIN CONDITION**********

        // If currentScore is EQUAL to randomTarget then add a win to scoreboard and RESET the game.
        if (currentScore === randomTarget) {
            scoreboardWins++;
            $("#scoreboardWins").text("Wins: " + scoreboardWins );
            gameBegin = false;
            $("#startGameBtn").show();
        };
    })
})
