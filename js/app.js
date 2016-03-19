// wait for the DOM to finish loading
$(document).ready(function() {

  var X = "X";

  var O = "O";

  var playerMove = function playerMove(){
    if (player == O)
      player = X;
      else
    player = O;
  };


  $(".box").on("click", function mark(event) {
    $(this).text(playerMove);
  });


  $(".btn").on("click", function refreshPage(event) {
    location.reload();
  });

  // all code to manipulate the DOM
  // goes inside this function

});
