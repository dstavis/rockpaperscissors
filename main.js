// START UTILITY FUNCTIONS

const capitalize = ([ firstLetter, ...remainingLetters ]) => {
  return firstLetter.toUpperCase() + remainingLetters.join('')
}

function bothEven(numberA, numberB){
  return numberA % 2 === 0 && numberB % 2 === 0
}

function bothOdd(numberA, numberB){
  return numberA % 2 !== 0 && numberB % 2 !== 0
}

// END utility functions



// SETUP
function setup(){
  document.querySelector('#mode-select-buttons').addEventListener("click", modeSelectClickHandler)
}
window.addEventListener('load', setup)

// GAMEPLAY

function modeSelectClickHandler(eventObject){
  if(event.target.closest("button").id === "simple-mode"){
    View.hide(document.querySelector('#mode-select-screen'))
    startGame("simple")
  } else if (event.target.closest("button").id === "complex-mode"){
    View.hide(document.querySelector('#mode-select-screen'))
    startGame("complex")
  }
}

function startGame(mode){
  var activeGame = new Game(mode)
  activeGame.start()
}
