// var input = window.prompt("rock, paper, or scissors?")

var playerChoice;
var option1 = document.getElementById("0")
var option2 = document.getElementById("1")
var option3 = document.getElementById("2")

option1.addEventListener("click", buttonHandler)
option2.addEventListener("click", buttonHandler)
option3.addEventListener("click", buttonHandler)

function buttonHandler(eventObject){
  playerChoice = parseInt(event.target.id)
  run()
}

function run(){
  // var playerChoice = ["rock", "paper", "scissors"].findIndex( (item) =>
  //  item === input)

  console.log("player", playerChoice) //log

  var randomNumber = Math.floor(Math.random() * 3)
  var computerChoice = randomNumber;

  console.log("computer", computerChoice) //log

  if(playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0){
    console.log("WIN")
  } else if(playerChoice === computerChoice) {
    console.log("DRAW")
  } else {
    console.log("LOSE")
  }
}
