//Global Variables
var winningCombinations;


// wait for the DOM to finish loading
$(document).ready(function()  {
 // all code to manipulate the DOM

var playerOne = "X";
    playerTwo = "O";
    clickCount = 0;
    winRowOne = $("#bx0", "#bx1", "#bx3").text();
    winRowTwo = $("#bx0", "#bx1", "#bx3").text();
    winRowThree = $("#bx0", "#bx1", "#bx3").text();
    winColOne = $("#bx0", "#bx1", "#bx3").text();
    winColTwo = $("#bx0", "#bx1", "#bx3").text();
    winColThree = $("#bx0", "#bx1", "#bx3").text();
    winDiagOne = $("#bx0", "#bx1", "#bx3").text();
    winDiagTwo = $("#bx0", "#bx1", "#bx3").text();

console.log(winRowOne);

 $(".box").click(function(event){
   if( !$(this).text() ){
     if (clickCount % 2 === 0 ){
       $(this).text(playerOne);
         clickCount ++;
     }else if(clickCount % 2 !== 0){
         $(this).text(playerTwo);
         clickCount ++;

     }
   }
 });

  $(".btn").on("click", function resetGame(event) {
    alert("Game reset!");
    $(".box").text("");
  });

if (winRowOne === "X" || "O",
    winRowTwo === "X" || "O",
    winRowThree === "X" || "O",
    winColOne === "X" || "O",
    winColTwo === "X" || "O",
    winColThree === "X" || "O",
    winDiagOne === "X" || "O",
    winDiagTwo === "X" || "O") {
      alert("You Win");
    }
    else {
      alert("Draw");
    }

});
