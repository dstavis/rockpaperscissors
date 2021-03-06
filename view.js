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


      View.show(button)
      button.id = assetIndex
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
    message.innerText = `Pick a Pokemon!`
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
      lose: "The opponent's move was super effective! You LOSE.",
      flywin: "W-what?! Your Pikachu used FLY?! It was super effective. You WIN.",
      flylose: "W-what?! OPPONENT's Pikachu used FLY?! It was super effective. You LOSE.",
      burnwin: "Lucky! OPPONENT's Pokemon sustained a burn! You WIN.",
      burnlose: "Oh no...your Pokemon sustained a burn! You LOSE."
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
