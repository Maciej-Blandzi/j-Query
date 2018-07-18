let empty = 'td:not(.red):not(.green)'
let scoreDisplay = document.getElementById('score')
let enemyDisplay = document.getElementById('enemy')
let timeDisplay = document.getElementById('timer')
let score = 0
let enemy = 0
let time = 60

function display(){
  scoreDisplay.innerText = 'your score :  ' + 0
  enemyDisplay.innerText = 'enemys score :  ' + 0
  timeDisplay.innerText = 60 + ' sec'
  empty = 'td:not(.red):not(.green)'
}
display();


function startGame() {
timeInterval()
intervalId()
}


// counting down time
  const timeInterval = setInterval(function () {
    if (paused) {
      return
    }
    time -= 1;
    time === -1
      ? (clearInterval(timeInterval), clearInterval(intervalId), gameField.removeEventListener('click', clicking))
      : timeDisplay.innerText = time + ' sec'
  }, 1000)



// toggling td color on click
  gameField.addEventListener('click', clicking)


//set enemy interval
  const intervalId = setInterval(function () {
    if (paused) {
      return
    }
    const cells = gameField.querySelectorAll(empty)
    const random = Math.floor(Math.random() * cells.length)

    cells.length === 0
      ? (clearInterval(intervalId), clearInterval(timeInterval))
      : toggleColors(cells[random])
    enemy += 1
    enemyDisplay.innerText = 'enemys score is:  ' + enemy

  }, 500)


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



