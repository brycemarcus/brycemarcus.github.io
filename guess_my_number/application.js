$(document).ready(function(){
var CurrentIndex = 100
  var click_count = 0
  randomIndex = Math.floor(Math.random()*100);
  $('button').on('click', function(){
    var userGuess = $('input').val();
    click_count = click_count+1 ;
    $('#guess_counter')
    console.log(click_count)
    console.log(userGuess)
    if (userGuess == randomIndex){
      alert("You win")
    }
    else if (userGuess > randomIndex){
      alert("Guess Lower!")
    }
    else if (userGuess < randomIndex){
      alert("Guess Higher!")
    }
  });
});

