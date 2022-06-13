const assets = {
  normal: ["./assets/happy-rocks.png", "./assets/happy-scissors.png", "./assets/happy-paper.png"],
  pokemon: ["./assets/charmander.png", "./assets/bulbasaur.png", "./assets/squirtle.png"],
  pokecomplex: ["./assets/bulbasaur.png", "./assets/charmander.png", "./assets/squirtle.png", "./assets/pikachu.png", "./assets/geodude.png"]
}
var activeLabel = "pokemon"

var currentAsset = assets[activeLabel];

const view = {
  option1: undefined,
  option2: undefined,
  option3: undefined,
  choices: undefined,
  output: undefined,
  displayChoiceLabels: function(labels) {
    this.option1.children[0].innerText = labels[0];
    var image = document.createElement("img")
    image.setAttribute("width", "50px")
    image.setAttribute("height", "50px")
    image.setAttribute("src", currentAsset[0])
    this.option1.append(image)

    this.option2.children[0].innerText = labels[1]
    // image = document.createElement("img")
    image = image.cloneNode()
    image.setAttribute("src", currentAsset[1])
    this.option2.append(image)

    this.option3.children[0].innerText = labels[2]
    // image = document.createElement("img")
    image = image.cloneNode()
    image.setAttribute("src", currentAsset[2])
    this.option3.append(image)
  },
  queryChoiceButtons: function(){
    this.option1 = document.getElementById("0")
    this.option2 = document.getElementById("1")
    this.option3 = document.getElementById("2")
  },
  queryContainers: function(){
    this.choices = document.getElementById("playerChoicesContainer")
    this.output = document.getElementById("outputContainer")
  },
  displayOutcome: function(condition){
    var messages = {
      win: "Your move was super effective! You WIN.",
      draw: "It's not very effective...it's a DRAW.",
      lose: "The opponent's move was super effective! You LOSE."
    }
    // console.log(messages[condition.toLowerCase()])
    var message = document.createElement("p")
    message.innerText = `${messages[condition.toLowerCase()]}`
    this.output.appendChild(message)
  },
  displayChoices: function(playerChoice, computerChoice){
    // Clear any old messages
    this.output.innerText = ""

    // Create a new paragraph with the message and add it
    var message = document.createElement("p")
    message.innerText = `You send out ${currentLabels[playerChoice]}!`
    this.output.appendChild(message)

    message = document.createElement("p")
    message.innerText = `Opponent sends out ${currentLabels[computerChoice]}!`
    this.output.appendChild(message)

    // console.log("player", currentLabels[playerChoice])
    // console.log("computer", currentLabels[computerChoice])
  }
}
