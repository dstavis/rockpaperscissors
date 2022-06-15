class View {
  constructor(game){
    this.game = game;
    this.currentAssets = View.#assets[game.mode];
  }

  static #assets = {
    simple: ["./assets/charmander.png", "./assets/bulbasaur.png", "./assets/squirtle.png"],
    complex: ["./assets/bulbasaur.png", "./assets/charmander.png", "./assets/squirtle.png", "./assets/pikachu.png", "./assets/geodude.png"],
    flyingPikachu: ["./assets/pikachu-flying.png"]
  }

  static show(node){
    node.classList.remove("hidden")
  }

  static hide(node){
    node.classList.add("hidden")
  }

  static displayModeSelectScreen(){
    // Hide anything else, like a current match
    // TODO: Display button that lets the user choose the Simple game style
    // TODO: Display button that lets the user choose the Complex game style
    // note: when a game version gets selected,
  }

  getUserChoicesContainer(){
    return document.querySelector("#user-choices-container")
  }

  getDialogueContainer(){
    return document.querySelector("#dialogue-container")
  }

  displayScores(){
    var userScoreContainer = document.querySelector("#user-score-container")
    View.show(userScoreContainer)
    var computerScoreContainer = document.querySelector("#computer-score-container")
    View.show(computerScoreContainer)

    userScoreContainer.firstElementChild.innerText = `Score: ${this.game.players[0].score}`
    computerScoreContainer.firstElementChild.innerText = `Score: ${this.game.players[1].score}`
  }

  displayChoiceButtons(){

    // Populate the container with buttons
    var choicesContainer = this.getUserChoicesContainer()
    var exampleButton = document.querySelector("#example-choice-button")
    var button;

    this.currentAssets.forEach((assetPath, assetIndex) => {
      button = exampleButton.cloneNode(true)

      // Remove the hidden class from the example
      View.show(button)
      // Set the ID
      button.id = assetIndex
      // Set the p text to the label for that asset
      button.children[0].innerText = capitalize(this.game.labels[assetIndex])

      var image = document.createElement("img")
      image.setAttribute("width", "50px")
      image.setAttribute("height", "50px")
      image.setAttribute("src", assetPath)
      button.appendChild(image)

      choicesContainer.append(button)
    });

    // Display the container
    View.show(choicesContainer)
  }

  displayDialogueBox(){
    var dialogueBox = this.getDialogueContainer()
    var message = document.createElement('p')
    message.innerText = "Pick a pokemon!"
    dialogueBox.appendChild(message)
    View.show(dialogueBox)
  }

  displayOutcome(condition){
    // Hide the choice buttons
    // Show the choices that the user and computer made
    // Change the message in the dialogue box based on the result
    // Let the user start a new round (by displaying a start new round button)

    var dialogueBox = this.getDialogueContainer()
    dialogueBox.innerText = ""

    var message = document.createElement("p")
    message.innerText = `You sent out ${capitalize(this.game.players[0].latestChoice)}.`
    dialogueBox.appendChild(message)

    message = document.createElement("p")
    message.innerText = `OPPONENT sent out ${capitalize(this.game.players[1].latestChoice)}.`
    dialogueBox.appendChild(message)

    var messages = {
      win: "Your move was super effective! You WIN.",
      draw: "It's not very effective...it's a DRAW.",
      lose: "The opponent's move was super effective! You LOSE."
    }
    message = document.createElement("p")
    message.innerText = `${messages[condition.toLowerCase()]}`

    dialogueBox.appendChild(message)
  }

  displayChoices(playerChoice, computerChoice){
    // Clear any old messages
    this.output.innerText = ""

    // Create a new paragraph with the message and add it
    var message = document.createElement("p")
    message.innerText = `You send out ${currentLabels[playerChoice]}!`
    this.output.appendChild(message)

    message = document.createElement("p")
    message.innerText = `Opponent sends out ${currentLabels[computerChoice]}!`
    this.output.appendChild(message)
  }

}
//
// const assets = {
//   simple: ["./assets/charmander.png", "./assets/bulbasaur.png", "./assets/squirtle.png"],
//   complex: ["./assets/bulbasaur.png", "./assets/charmander.png", "./assets/squirtle.png", "./assets/pikachu.png", "./assets/geodude.png"]
// };
// var activeLabel = "pokemon"
//
// var currentAsset = assets[activeLabel];
//
// const view = {
//   option1: undefined,
//   option2: undefined,
//   option3: undefined,
//   choices: undefined,
//   output: undefined,
//   displayChoiceLabels: function(labels) {
//     this.option1.children[0].innerText = labels[0];
//     var image = document.createElement("img")
//     image.setAttribute("width", "50px")
//     image.setAttribute("height", "50px")
//     image.setAttribute("src", currentAsset[0])
//     this.option1.append(image)
//
//     this.option2.children[0].innerText = labels[1]
//     // image = document.createElement("img")
//     image = image.cloneNode()
//     image.setAttribute("src", currentAsset[1])
//     this.option2.append(image)
//
//     this.option3.children[0].innerText = labels[2]
//     // image = document.createElement("img")
//     image = image.cloneNode()
//     image.setAttribute("src", currentAsset[2])
//     this.option3.append(image)
//   },
//   queryChoiceButtons: function(){
//     this.option1 = document.getElementById("0")
//     this.option2 = document.getElementById("1")
//     this.option3 = document.getElementById("2")
//   },
//   queryContainers: function(){
//     this.choices = document.getElementById("playerChoicesContainer")
//     this.output = document.getElementById("outputContainer")
//   },
//   displayOutcome: function(condition){
//     var messages = {
//       win: "Your move was super effective! You WIN.",
//       draw: "It's not very effective...it's a DRAW.",
//       lose: "The opponent's move was super effective! You LOSE."
//     }
//     // console.log(messages[condition.toLowerCase()])
//     var message = document.createElement("p")
//     message.innerText = `${messages[condition.toLowerCase()]}`
//     this.output.appendChild(message)
//   },
//   displayChoices: function(playerChoice, computerChoice){
//     // Clear any old messages
//     this.output.innerText = ""
//
//     // Create a new paragraph with the message and add it
//     var message = document.createElement("p")
//     message.innerText = `You send out ${currentLabels[playerChoice]}!`
//     this.output.appendChild(message)
//
//     message = document.createElement("p")
//     message.innerText = `Opponent sends out ${currentLabels[computerChoice]}!`
//     this.output.appendChild(message)
//
//     // console.log("player", currentLabels[playerChoice])
//     // console.log("computer", currentLabels[computerChoice])
//   }
// }
