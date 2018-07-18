
// starting the game (reset + play)
const startBtn = document.getElementById('startBtn')

startBtn.addEventListener('click', function () {
  startGame()
  paused=false
})



//   pausing the game
const pauseButton = document.getElementById('pauseBtn')
let paused = false

pauseButton.addEventListener('click', function () {
  paused = !paused
})
function reset() {
  clearInterval(intervalId);
  clearInterval(timeInterval)
  paused= false
  $('td').removeClass('red green')
  display()

}

//re-setting the game
const resetButton = document.getElementById('resetBtn')

resetButton.addEventListener('click',reset )


//re-starting the game (reset + play)
const restartBtn = document.getElementById('restartBtn')

restartBtn.addEventListener('click', function () {
  reset()
  startGame()
})