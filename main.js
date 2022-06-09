
var labelOptions =
{
  normal: ["rock", "paper", "scissors"],
  pokemon: ["charmander", "bulbasaur", "squirtle"],
  rpg: ["boulder", "parchment", "shears"],
}
const capitalize = ([ firstLetter, ...remainingLetters ]) => {
  return firstLetter.toUpperCase() + remainingLetters.join('')
}
var currentLabels = labelOptions.pokemon
currentLabels = currentLabels.map( (label) => capitalize(label) )


var playerChoice;
var option1 = document.getElementById("0")
var option2 = document.getElementById("1")
var option3 = document.getElementById("2")

option1.innerText = currentLabels[0]
option2.innerText = currentLabels[1]
option3.innerText = currentLabels[2]

option1.addEventListener("click", buttonHandler)
option2.addEventListener("click", buttonHandler)
option3.addEventListener("click", buttonHandler)

function buttonHandler(eventObject){
  playerChoice = parseInt(event.target.id)
  run()
}

function run(){
  console.log("player", currentLabels[playerChoice]) //log

  var randomNumber = Math.floor(Math.random() * 3)
  var computerChoice = randomNumber;

  console.log("computer", currentLabels[computerChoice]) //log

  if(playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0){
    console.log("WIN")
  } else if(playerChoice === computerChoice) {
    console.log("DRAW")
  } else {
    console.log("LOSE")
  }
}
