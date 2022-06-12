var labelOptions =
{
  normal: ["rock", "scissors", "paper"],
  pokemon: ["charmander", "bulbasaur", "squirtle"],
  rpg: ["boulder", "shears", "parchment" ]
}
const capitalize = ([ firstLetter, ...remainingLetters ]) => {
  return firstLetter.toUpperCase() + remainingLetters.join('')
}
var playerChoice;

var activeLabel = "pokemon"

var currentLabels = labelOptions[activeLabel]

currentLabels = currentLabels.map( (label) => capitalize(label) )

// SETUP
function setup(){
  view.queryContainers()
  view.queryChoiceButtons()

  view.option1.addEventListener("click", buttonHandler)
  view.option2.addEventListener("click", buttonHandler)
  view.option3.addEventListener("click", buttonHandler)

  view.displayChoiceLabels(currentLabels)
}
window.addEventListener('load', setup)

// GAMEPLAY
function buttonHandler(eventObject){
  playerChoice = parseInt(event.currentTarget.id)
  run()
}

function run(){
  var randomNumber = Math.floor(Math.random() * 3)
  var computerChoice = randomNumber;

  view.displayChoices(playerChoice, computerChoice)

  if(playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0){
    view.displayOutcome("WIN")
  } else if(playerChoice === computerChoice) {
    view.displayOutcome("DRAW")
  } else {
    view.displayOutcome("LOSE")
  }
}
