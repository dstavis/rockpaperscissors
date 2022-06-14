// START UTILITY FUNCTIONS

const capitalize = ([ firstLetter, ...remainingLetters ]) => {
  return firstLetter.toUpperCase() + remainingLetters.join('')
}

// END utility functions

// var playerChoice;
//
// var activeLabel = "pokemon"
//
// var currentLabels = labelOptions[activeLabel]
//
// currentLabels = currentLabels.map( (label) => capitalize(label) )


// SETUP
function setup(){
  // TODO: Refactor this to use the new Game, Player, View class OOP structure

  // TODO: Add an event listener to the parent, instead of each button individually. Then make the eventHandler do some conditional logic to check which button was clicked.


  // instead, show the "pick version" screen, and add one or more event listeners to start a game for the selected version. When that game starts, a new game object should be created (with two players), and
  // When we show the "pick version" screen, the output dialogue should be hidden, and there should be two buttons on the screen. One selects the simple game mode, and one selects the complex game mode

  document.querySelector('#mode-select').addEventListener("click", modeSelectClickHandler)

  // when a mode is selected, we should instantiate a new game with that mode, and give that game two players (one user, one computer)
  // then we should show the game view as appropriate for that game mode, including the output section as well as buttons for each pokemon choice, which can be clicked to initiate a comparison
  // when a comparison occurs, we should display what choices each player made, and who the winner was. We should also show a button that lets the user proceed to another match (which will present them )
}
window.addEventListener('load', setup)

// GAMEPLAY

function modeSelectClickHandler(eventObject){
  if(event.target.id = "simple-mode"){
    // hide the mode select section
    document.querySelector('#mode-select').classList.add("hidden")
    // start game in simple mode
    startGame("simple")
  } else if (event.target.id = "complex-mode"){
    // hide the mode select section
    document.querySelector('#mode-select').classList.add("hidden")
    // start game in complex mode
    startGame("complex")
  }
}

function startGame(mode){
  // instantiate a game object in the selected mode
  var activeGame = new Game(mode)
  activeGame.start()
}



function makeComparison(){

  // var randomNumber = Math.floor(Math.random() * 3)
  // var computerChoice = randomNumber;
  //
  // view.displayChoices(playerChoice, computerChoice)


}
