// ============= adding elements to list ====

$(function() {

  const $list = $('.ul1')
  const $elem = $('#newElem')
  const $elemCont = $('#newElemContainer')
  const $form = $('#form1')
  const $add = $('#addNew')
  const $input = $('input:text')
  const $alert = $('#alert')

  $form.hide()
  $list.append($elemCont)
  $alert.hide()

  $elem.on('click', function () {
    $elemCont.hide()
    $form.show()
    $list.append($form)
  })

  $input.on('focus', function(){
    $alert.empty()
  })

  $form.on('submit', function(event){

    event.preventDefault()

    $('.ul1 li').animate({
      width: '+=150'
    },600,function(){
      $(this).width(200).fadeOut(300).fadeIn(600)
    })

      const $newItem = $input.val()

      $('.ul1 li:last').after('<li>'+$newItem+'</li>')

      $input.val('')
      $form.hide()
      $elemCont.show()
  })


})

//=== displaying time ===============

const $curTime = $('button#date')

let $date1 = new Date($.now())
let $date2 = new Date($.now()).toDateString()

$curTime.before($date2+ ' ')

$curTime.on('click', function(event){
  $('span.dt').fadeOut()

  // date.setTime(event.timeStamp)


  $(this).after('<span class="dt"> today is ' + $date1 + '</span>')

})