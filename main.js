
var input = window.prompt("rock, paper, or scissors?")

var playerChoice = ["rock", "paper", "scissors"].findIndex( (item) => item === input)

console.log("player", playerChoice) //log

var randomNumber = Math.floor(Math.random() * 3)
var computerChoice = randomNumber;

console.log("computer", computerChoice) //log

if(playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0){
  console.log("Player wins!")
} else if(playerChoice === computerChoice) {
  console.log("DRAW")
} else {
  console.log("LOSE")
}
