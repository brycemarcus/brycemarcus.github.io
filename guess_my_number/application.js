$(document).ready(function(){
  var compGuess= Math.floor(Math.random()*100);
  $('button').on('click', function(){
    var guess= $('input').val();
    if (compGuess == guess){
      alert("You win")
    }
    else if (compGuess > guess ){
      alert("Guess Lower!")
    }
    else if (compGuess < guess){
      alert("Guess Higher!")
    }
  });
});

