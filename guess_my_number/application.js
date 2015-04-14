$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var CurrentIndex = 100
  var click_count = 0
  randomIndex = Math.floor(Math.random()*100);
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    var userGuess = $('input').val();
    click_count = click_count+1 ;
    $('#guess_counter').empty().append(click_count)
    console.log(click_count)
    console.log(userGuess)
    if (userGuess == randomIndex){
      alert("You Guessed Correct")
    }
    else if (userGuess > randomIndex){
      alert("Guess a Little Lower")
    }
    else if (userGuess < randomIndex){
      alert("Guess A Bit Higher")
    }
  });
});

