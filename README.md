# assignment4

BUG IS SMASHED!
I did workaround by hiding the turtles until the game is started.
Then when win/loss conditions met the turtles hide again until start button is clicked again.
=======

BUG FOUND
  It seems that if you click on a turtle before the start of the game, the current score gets a NaN.
  I went to the on click events for my turtles which currently looks like such:
  
      $("#turtle1").on("click", function() {
        if(!enableImageClick){
            return false;
        }
        currentScore = currentScore + turtleValue1;
        $("#currentScore").text("Your current score is: " + currentScore);
        checkScore();
    });
    
 I thought that maybe the check for enableImageClick might be causing the issue.  So I changed code to:
 
    $("#turtle1").on("click", function() {
        if(enableImageClick){
          currentScore = currentScore + turtleValue1;
          $("#currentScore").text("Your current score is: " + currentScore);
          checkScore();
         }
    });
    
The bug was not smashed.  It returned same result.
Any thoughts on how to fix?
>>>>>>> a2597e6853326c922e51f6f76572d6b41f26756f
