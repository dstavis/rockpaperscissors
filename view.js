const assets = {
  normal: ["./assets/happy-rocks.png", "./assets/happy-scissors.png", "./assets/happy-paper.png"]
}

const view = {
  option1: undefined,
  option2: undefined,
  option3: undefined,
  choices: undefined,
  output: undefined,
  displayChoiceLabels: function(labels) {
    this.option1.innerText = labels[0]
    var image = document.createElement("img")
    image.setAttribute("width", "50px")
    image.setAttribute("height", "50px")
    image.setAttribute("src", assets.normal[0])
    this.option1.append(image)

    this.option2.innerText = labels[1]
    // image = document.createElement("img")
    image = image.cloneNode()
    image.setAttribute("src", assets.normal[1])
    this.option2.append(image)

    this.option3.innerText = labels[2]
    // image = document.createElement("img")
    image = image.cloneNode()
    image.setAttribute("src", assets.normal[2])
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
      win: "WIN",
      draw: "DRAW",
      lose: "LOSE"
    }
    console.log(messages[condition.toLowerCase()])
  },
  displayChoices: function(playerChoice, computerChoice){
    console.log("player", currentLabels[playerChoice])
    console.log("computer", currentLabels[computerChoice])
  },
}
