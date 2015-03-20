$(document).ready(function(){
  
  $('button').click(function(){
  	
   var valInput = $('input').val();
   $('ul').append("<li>" + valInput + "</li>");
   
	});
});
