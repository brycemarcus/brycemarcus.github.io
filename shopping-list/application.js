$(document).ready(function(){
  
  $('button').click(function(){
  	
   var valInput = $('input').val();
   log.console(valInput);
   $('ul').append("<li>" + valInput + "</li>");
   
	});
});
