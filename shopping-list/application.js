$(document).ready(function(){
  $('#submit').on('click', function(){
    var entry = $('input').val();
    $('ul').append("<li>"+entry+"</li>");
  })
  $('#clear').on('click', function(){
    var entry = $('input').val();
    $("ul").empty();
  })
});
