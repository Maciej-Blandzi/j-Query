
var empty = 'td:not(.red):not(.green)'
var scoreDisplay = document.getElementById('score')
var score = 0

scoreDisplay.innerText= 'your score is:  ' + score


// toggling td color
space1.addEventListener('click',function(event){
  event.target.matches(empty) ? toggleColors(event.target, 'green') : null
  score+=1
  scoreDisplay.innerText= 'your score is:  ' + score + ' points'
})


//set interval
var intervalId = setInterval(function(){
  var cells = space1.querySelectorAll(empty)
  var random = Math.floor(Math.random()*cells.length)

  cells.length === 0
    ? clearInterval(intervalId)
    : toggleColors(cells[random])

},400)


// utility function
const toggleColors = (item, className) => {
  className = className || 'red'
  item.classList.contains(className)
    ? item.classList.remove(className)
    : item.classList.add(className)
}
