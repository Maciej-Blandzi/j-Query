$(function() {

  const $elem = $('#newElem')
  const $elemCont = $('#newElemContainer')
  const $form = $('#form1')
  const $add = $('#addNew')

  $form.hide()

  $elem.on('click', function () {
      $elemCont.hide()
      $form.show()
  })

  $form.on('submit', function(event){
    event.preventDefault()

    const $newItem = $('input:text').val()
    console.log($newItem)

    $('.ul1 li:last').after('<li>'+$newItem+'</li>')
  })
})