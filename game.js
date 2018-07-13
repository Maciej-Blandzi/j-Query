var empty = 'td:not(.red):not(.green)'
var scoreDisplay = document.getElementById('score')
var enemyDisplay = document.getElementById('enemy')
var timeDisplay = document.getElementById('timer')
var score = 0
var enemy = 0
var time = 60

const $display = ()=> {
  scoreDisplay.innerText = 'your score :  ' + 0
  enemyDisplay.innerText = 'enemys score :  ' + 0
  timeDisplay.innerText = 60 + ' sec'
  empty = 'td:not(.red):not(.green)'
}
$display();
function startGame() {

// counting down time
  var timeInterval = setInterval(function () {
    if (paused) {
      return
    }
    time -= 1
    time === -1
      ? (clearInterval(timeInterval), clearInterval(intervalId), gameField.removeEventListener('click', clicking))
      : timeDisplay.innerText = time + ' sec'
  }, 1000)


// toggling td color on click
  gameField.addEventListener('click', clicking)


//set enemy interval
  var intervalId = setInterval(function () {
    if (paused) {
      return
    }
    var cells = gameField.querySelectorAll(empty)
    var random = Math.floor(Math.random() * cells.length)

    cells.length === 0
      ? clearInterval(intervalId)
      : toggleColors(cells[random])
    enemy += 1
    enemyDisplay.innerText = 'enemys score is:  ' + enemy

  }, 400)


// utility toggle function
  const toggleColors = (item, className) => {
    className = className || 'red'
    item.classList.contains(className)
      ? item.classList.remove(className)
      : item.classList.add(className)
  }


// utility eventListener function
  function clicking(event) {
    if (paused) {
      return
    }
    event.target.matches(empty)
      ? (toggleColors(event.target, 'green'), score += 1, scoreDisplay.innerText = 'your score is:  ' + score)
      : null
  }
}



//starting the game (reset + play)
var startBtn = document.getElementById('startBtn')

startBtn.addEventListener('click', function () {
  startGame()
})



//   pausing the game
var pauseButton = document.getElementById('pauseBtn')
var paused = false

pauseButton.addEventListener('click', function () {
  paused = !paused
})


//re-setting the game
var resetButton = document.getElementById('resetBtn')

resetButton.addEventListener('click', function () {
  // score = 0
  // enemy = 0
  // time = 60
  $('td').removeClass('red green')
  $display()

})


//re-starting the game (reset + play)
  var restartBtn = document.getElementById('restartBtn')

  restartBtn.addEventListener('click', function () {
    startGame()
    $('td').removeClass('red green')
})
