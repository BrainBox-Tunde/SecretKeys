$(function(){

  $('button').click(function(event){
    $('ul').append(
      "<li>" + ['dog', 'cat', 'rabbit'][Math.floor(Math.random() *3)]
      "</li>"
    );
  })
}

)

