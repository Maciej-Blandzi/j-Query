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

      const $newItem = $input.val()
      console.log($newItem)

      $('.ul1 li:last').after('<li>'+$newItem+'</li>')

      $input.val('')
      $form.hide()
      $elemCont.show()
  })


})