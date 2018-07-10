const $button = $('button.btn')
const $ul2 = $('ul.ul2')
const $li2 = $('ul.ul2 li')

$(function() {

  $li2.hide()


  $button.on('click', function () {

    $ul2.children().each(function (index) {
      $(this).delay(200 * index).fadeIn(700)
    })
    $ul2.next().css('color','yellow')
    $ul2.siblings().addClass('red')
    $ul2.parent().css('border','3px black solid')

  })
})


  $('div.lista, div.formm').addClass('blue')

  $('span').css({
    'color':'blue',
    'font-size':'+=10'
  })

  $('.formm').css({'display':'flex','flex-flow':'column nowrap'})



$('.ul2 li:first-child').on('click', function(){
  $('.ul2 li:last').fadeOut(1000).fadeIn(1000)
  $(this).animate({
    marginLeft: '+=300'
  },1000, function(){
    $(this).fadeOut(700)
  })
  const $it = $('.ul2 li:nth-child(2)').text()
console.log($it)
  $('.ul2 li:nth-child(9)').prepend('<em>clicked</em>').append($it)
  $ul.after('<div>' + $it + '<div')

})


//=============list item animation deletion

$(function(){
  $li2.on('click',function(){
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
  $ul2.css('list-style','none')

  console.log('new list')
})


$('button#Button02').on('click', function(){
  $li2.prepend('* ')
  console.log('stars added')
})



const $liText = $li2.text()
const $dupa = $('<p>dupa</p>').css('color','red')
$('button#Button03').on('click', function(){

  $ul2.after('<p>' + 'text from the list above: ' + $liText + '</p>').append($dupa)
  console.log('review')

}).on('mouseout', function(){
  $($liText, $dupa).remove()
})



$('button#Button04').on('click', function(){
  $li2.each(function() {
    $(this).append($('.ul2 li:last').text())
  })

  console.log('addind stuff')
})




$('button#Button05').on('click', function(){
  $ul2.replaceWith('<p>destruction</p>').toggle()
  console.log('destruction')
})



const $button2 = $('button.btn2')
const $form2 = $('form.formm')
const $listHTML = $('li:last').text()
const $inputValue = $('input:text').val()
let $counter = 0

$button2.on('click', function(event){
  event.preventDefault();
  $counter +=1
  $(this).after('<div><p>' + $inputValue + '</p></div>')
         .before('<p>' + $listHTML +'</p>').css('border','5px black solid')
         .prepend('<p>' + $counter + '</p>')
  console.log($inputValue)
})

