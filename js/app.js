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
     winner();
   }
 });

  function winner() {
    //var gameWinner;
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
          $(boxCells.eq(8)).text() === 'X') ||

        ($(boxCells.eq(2)).text() === 'X' &&
          $(boxCells.eq(4)).text() === 'X' &&
          $(boxCells.eq(6)).text() === 'X') ) {

            gameWinner = playerOne;
      }
  else if (($(boxCells.eq(0)).text() === 'O' &&
             $(boxCells.eq(1)).text() === 'O' &&
             $(boxCells.eq(2)).text() === 'O') ||

          ($(boxCells.eq(3)).text() === 'O' &&
            $(boxCells.eq(4)).text() === 'O' &&
            $(boxCells.eq(5)).text() === 'O') ||

          ($(boxCells.eq(6)).text() === 'O' &&
            $(boxCells.eq(7)).text() === 'O' &&
            $(boxCells.eq(8)).text() === 'O') ||

          ($(boxCells.eq(0)).text() === 'O' &&
            $(boxCells.eq(3)).text() === 'O' &&
            $(boxCells.eq(6)).text() === 'O') ||

          ($(boxCells.eq(1)).text() === 'O' &&
            $(boxCells.eq(4)).text() === 'O' &&
            $(boxCells.eq(7)).text() === 'O') ||

          ($(boxCells.eq(2)).text() === 'O' &&
            $(boxCells.eq(5)).text() === 'O' &&
            $(boxCells.eq(8)).text() === 'O') ||

          ($(boxCells.eq(0)).text() === 'O' &&
            $(boxCells.eq(4)).text() === 'O' &&
            $(boxCells.eq(8)).text() === 'O') ||

          ($(boxCells.eq(2)).text() === 'O' &&
            $(boxCells.eq(4)).text() === 'O' &&
            $(boxCells.eq(6)).text() === 'O') ) {

              gameWinner = playerTwo;
     }
     alert(gameWinner + ' has won!');
     return gameWinner;
  }

/* else (
    if (($(boxCells.eq(0)).text() === "" ||
          $(boxCells.eq(1)).text() === "" ||
          $(boxCells.eq(2)).text() === "" ||
          $(boxCells.eq(3)).text() === "" ||
          $(boxCells.eq(4)).text() === "" ||
          $(boxCells.eq(5)).text() === "" ||
          $(boxCells.eq(6)).text() === "" ||
          $(boxCells.eq(7)).text() === "" ||
          $(boxCells.eq(8)).text() === "" ) ) {

            gameWinner = "Draw";
      }
      alert(gameWinner);
      return gameWinner;
    });
*/

  $(".btn").on("click", function resetGame(event) {
    alert("Game reset!");
    window.location.reload();
  });


});
