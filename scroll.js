const $link = $('#menu a')[1]
const $menu = $('#menu')

$link.on('click', function(e){
  e.preventDefault()

  const $targetSection= $('#2')
  const $startPoint = $window.pageYOffset()
  const $endPoint = $targetSection.offsetTop

  const $increment = 15;
  const $incrementSize = ($endPoint - $startPoint) / $increment


  let $currentPosition = $startPoint

  const intervalId = setInterval(function(){

    $currentPosition = $currentPosition + $incrementSize

    ($currentPosition < $endPoint + 10 && $currentPosition > $endPoint -10)
    ? clearInterval(intervalId)
    : window.scroll({}, $currentPosition)
  },500)
})




