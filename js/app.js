//Global Variables
var winningCombinations;


// wait for the DOM to finish loading
$(document).ready(function()  {
// all code to manipulate the DOM

var playerOne = "X";
    playerTwo = "O";
    boxCells = $(".box");
    clickCount = 0;


//Cycle between X's and O's and prevent overwriting what's already in the box.
//The NOT (!) symbol prevents overwriting and already taken box.
 $(".box").click(function(event){
   if(! $(this).text() ){
     if (clickCount % 2 === 0 ){
       $(this).text(playerOne);
         clickCount ++;
     }else if(clickCount % 2 !== 0){
         $(this).text(playerTwo);
         clickCount ++;

     }
   }
 });

//Not sure if I need this right now.
/*
function xWins() {
  alert("X Wins!");
}
*/

function winner() {
 if (($(boxCells.eq(0)).text() === 'X' &&
      $(boxCells.eq(1)).text() === 'X' &&
      $(boxCells.eq(2)).text() === 'X') ||

    ($(boxCells.eq(3)).text() === 'X' &&
      $(boxCells.eq(4)).text() === 'X' &&
      $(boxCells.eq(5)).text() === 'X') ||

    ($(boxCells.eq(6)).text() === 'X' &&
      $(boxCells.eq(7)).text() === 'X' &&
      $(boxCells.eq(8)).text() === 'X') ||

    ($(boxCells.eq(0)).text() === 'X' &&
      $(boxCells.eq(3)).text() === 'X' &&
      $(boxCells.eq(6)).text() === 'X') ||

    ($(boxCells.eq(1)).text() === 'X' &&
      $(boxCells.eq(4)).text() === 'X' &&
      $(boxCells.eq(7)).text() === 'X') ||

    ($(boxCells.eq(2)).text() === 'X' &&
      $(boxCells.eq(5)).text() === 'X' &&
      $(boxCells.eq(8)).text() === 'X') ||

    ($(boxCells.eq(0)).text() === 'X' &&
      $(boxCells.eq(4)).text() === 'X' &&
      $(boxCells.eq(8)).text() === 'X')) {
        //return alert("X Wins!");
        //return some value that is returned when winner() is true
      }
}

//for loop to call the winner function?
winner();

  $(".btn").on("click", function resetGame(event) {
    alert("Game reset!");
    window.location.reload();
  });



});
