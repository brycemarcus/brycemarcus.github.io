$(document).ready(function(){
  var CurrentIndex = 100
  var click_count = 0
  randomIndex = Math.floor(Math.random()*100);
  $('button').on('click', function(){
    var userGuess = $('input').val();
    click_count = click_count+1 ;
    $('#guess_counter').empty().append(click_count)
    console.log(click_count)
    console.log(userGuess)
    if (userGuess == randomIndex){
      alert("You's right")
    }
    else if (userGuess > randomIndex){
      alert("get low low low low low low low low low")
    }
    else if (userGuess < randomIndex){
      alert("take it to the moon, take it to the skyyyiieieieiieiieieiie")
    }
  });
});

