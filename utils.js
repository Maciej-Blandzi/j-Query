$(function(){
  $('div').addClass('blue')
  const $li = $('li')
  $li.hide().each(function(index){
    $(this).delay(100*index).fadeIn(700)

  })

  $('span').css({
    'color':'blue',
    'font-size':'+=10'
  })

  $('.formm').css({'display':'flex','flex-flow':'column nowrap'})
})


$('li:first-child').on('click', function(){
  $('li:last').fadeOut(1000).fadeIn(1000)

  const $it = $('li:nth-child(2)').text()
console.log($it)
  $('li:nth-child(9)').prepend('<em>clicked</em>').append($it)
  $('ul').after('<div>' + $it + '<div')

})


//=============list item animation deletion

$(function(){
  $('li').on('click',function(){
    $(this).animate({
      marginLeft: '+=300'
    },1000, function(){
      $(this).fadeOut(700)
    })

  })
})

//=====================    form ===================================




$('input:first').on('focus', function(){
  $(this).replaceWith('<p>this WAS first input and now its gone</p>').toggle()
});

$('input:nth-child(2)').on('focus',function(){
  $(this).css('border','5px solid blue')
}).on('blur',function(){
  $(this).css('border','none')
})

$('input:nth-child(3)').on('focus',function(){
  $(this).css('background-color', 'pink')
}).on('blur',function(){$(this).css('background-color','white')})

$('input:nth-child(4)').on('keydown', function(){
  $(this).css('background-color','lightblue')
}).on('keyup', function(){
  $(this).css('background-color','white')
})

$('input:nth-child(5)').on('input', function(){
  $(this).css('color','red')
}).on('keyup', function(){
  $(this).css('color','black')
})

$('input:nth-child(6)').on('mousedown', function(){
  $(this).css('border','5px solid red')
}).on('mouseup', function(){
  $(this).css('border','none')
})
//=====================  getting and displaying data ===================


$('button#Button01').on('click', function(){
  $('ul').css('list-style','none')

  console.log('new list')
})


$('button#Button02').on('click', function(){
  $('li').prepend('* ')
  console.log('stars added')
})



const $liText = $('ul').text()
const $dupa = $('<p>dupa</p>').css('color','red')
$('button#Button03').on('click', function(){

  $('ul').after('<p>' + 'text from the list above: ' + $liText + '</p>').append($dupa)
  console.log('review')

}).on('mouseout', function(){
  $($liText, $dupa).remove()
})



$('button#Button04').on('click', function(){
  $('li').each(function() {
    $(this).append($('li:last').text())
  })

  console.log('addind stuff')
})




$('button#Button05').on('click', function(){
  $('ul').replaceWith('<p>destruction</p>').toggle()
  console.log('destruction')
})








$('form').on('submit', function(event){

  const $listHTML = $('li:nth-child(3)').text()
  const $inputValue = $('input:text').val()

  event.preventDefault()
  $(this)
    .after('<div><p>' + $inputValue + '</p></div>')
    .prepend('<p>' + $listHTML +'</p>').css('border','5px black solid')
  console.log($inputValue)
})

