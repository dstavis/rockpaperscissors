
var labelOptions =
{
  normal: ["rock", "paper", "scissors"],
  pokemon: ["bulbasaur", "charmander", "squirtle", "pikachu", "geodude"],
  rpg: ["boulder", "parchment", "shears"],
}
const capitalize = ([ firstLetter, ...remainingLetters ]) => {
  return firstLetter.toUpperCase() + remainingLetters.join('')
}
var currentLabels = labelOptions.pokemon
currentLabels = currentLabels.map( (label) => capitalize(label) )


var playerChoice;
var option1 = document.getElementById("1")
var option2 = document.getElementById("2")
var option3 = document.getElementById("3")
var option4 = document.getElementById("4")
var option5 = document.getElementById("5")

option1.innerText = currentLabels[0]
option2.innerText = currentLabels[1]
option3.innerText = currentLabels[2]
option4.innerText = currentLabels[3]
option5.innerText = currentLabels[4]

option1.addEventListener("click", buttonHandler)
option2.addEventListener("click", buttonHandler)
option3.addEventListener("click", buttonHandler)
option3.addEventListener("click", buttonHandler)
option4.addEventListener("click", buttonHandler)
option5.addEventListener("click", buttonHandler)

function buttonHandler(eventObject){
  playerChoice = parseInt(event.target.id) // TODO: put back when done testing
  // playerChoice = 1;
  run()
}

function run(){
  console.log("player", currentLabels[playerChoice - 1]) //log

  var randomNumber = Math.floor((Math.random() * 5) + 1)
  var computerChoice = randomNumber;

  console.log("computer", currentLabels[computerChoice - 1]) //log

  if(playerChoice === computerChoice){
    console.log("=DRAW=")
  } else {
    var winner = determineWinner(playerChoice, computerChoice)
  }

  if(winner === "player"){
    console.log("+WIN+")
  } else if (winner === "computer"){
    console.log("-LOSE-")
  }

  winner = undefined;
}

function determineWinner(playerChoice, computerChoice){

  if(bothEven(playerChoice, computerChoice) || bothOdd(playerChoice, computerChoice)){
    return playerChoice < computerChoice ? "player" : "computer"
  } else {
    return playerChoice > computerChoice ? "player" : "computer"
  }
}

function bothEven(numberA, numberB){
  return numberA % 2 === 0 && numberB % 2 === 0
}

function bothOdd(numberA, numberB){
  return numberA % 2 !== 0 && numberB % 2 !== 0
}

function oldLogic(){
  if(playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0){
    console.log("WIN")
  } else if(playerChoice === computerChoice) {
    console.log("DRAW")
  } else {
    console.log("LOSE")
  }
}
