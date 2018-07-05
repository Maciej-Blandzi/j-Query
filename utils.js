
$('div').addClass('red')
$('li').hide().fadeIn(1500)

$('li:first-child').on('click', function(){
  $(this).remove()
})

$('span').css('color','yellow').css('font-size','3rem')