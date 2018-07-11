
var empty = 'td:not(.red):not(.green)'
var scoreDisplay = document.getElementById('score')
var enemyDisplay = document.getElementById('enemy')
var timeDisplay = document.getElementById('timer')
var score = 0
var enemy = 0
var time = 10

scoreDisplay.innerText= 'your score :  ' + score
enemyDisplay.innerText= 'enemys score :  ' + enemy
timeDisplay.innerText= timer + ' sec'


// counting down time
var timeInterval = setInterval(function(){
  time-=1
  time === 0 ? clearInterval(timeInterval) : timeDisplay.innerText= time + ' sec'
},1000)


// toggling td color
space1.addEventListener('click',function(event){
  event.target.matches(empty) ? toggleColors(event.target, 'green') : null
  score+=1
  scoreDisplay.innerText= 'your score is:  ' + score
})


//set interval
var intervalId = setInterval(function(){
  var cells = space1.querySelectorAll(empty)
  var random = Math.floor(Math.random()*cells.length)

  cells.length === 0
    ? clearInterval(intervalId)
    : toggleColors(cells[random])
  enemy+=1
  enemyDisplay.innerText= 'enemys score is:  ' + enemy

},400)


// utility toggle function
const toggleColors = (item, className) => {
  className = className || 'red'
  item.classList.contains(className)
    ? item.classList.remove(className)
    : item.classList.add(className)
}
