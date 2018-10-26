# assignment4

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
