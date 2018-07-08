
$('div').addClass('red')
$('li').hide().fadeIn(1500)


$('li:first-child').on('click', function(){
  $('li:even').fadeOut(1000).fadeIn(1000)
})


$('span').css({
  'color':'yellow',
  'font-size':'+=10'
})


var it = $('span:first').text()
$('li span').prepend('<em>this</em>'+' ' +'<em>is </em>').append('  ' +'<strong>AND</strong>' + '  ' +it )


$('div.formm').css({'display':'flex','flex-flow':'column wrap'})


$('input:first').on('focus', function(){
  $(this).replaceWith('<p>this WAS first input and now its gone</p>').toggle()
});


$('input:nth-child(3)').on('focus',function(){
  $(this).css('background-color', 'pink')
}).on('blur',function(){$(this).css('background-color','white')})


$('input:nth-child(4)').on('keydown', function(){
  $(this).css('background-color','lightblue')
}).on('keyup', function(){
  $(this).css('background-color','white')
})


var $listHTML = $('li:nth-child(2)').text()

$('form:input').on('',function(){
  prepend('<p>' + $listHTML +'</p>').css('border','5px black solid')
})


var inputValue = $('input:text').val()

$('form').on('submit', function(event){
  event.preventDefault()
  $('input:first').append('<div>' +inputValue + '</div>')
})

