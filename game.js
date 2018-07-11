// toggling td color
space1.addEventListener('click',function(event){
  event.target.matches('td') ? toggleColors(event.target) : null

})


//set interval
var intervalId = setInterval(function(){
  var cells = space1.querySelectorAll('td:not(.red)')
  var random = Math.floor(Math.random()*cells.length)

  cells.length === 0
    ? clearInterval(intervalId)
    : toggleColors(cells[random])

},20)


// utility function
const toggleColors = (item, className) => {
  className = className || 'red'
  item.classList.contains(className)
    ? item.classList.remove(className)
    : item.classList.add(className)
}
