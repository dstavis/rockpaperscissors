class Game {
  static activeGame;

  constructor(mode){
    this.mode = mode;
    this.players = [];
    this.rounds = 0;
    this.labels = Game.#labelOptions[mode];

    this.view = new View(this)

    this.setup()
    Game.activeGame = this;
  }

  setup(){
    this.players.push(new Player('user'))
    this.players.push(new Player('computer'))
  }

  start(){
    this.view.displayChoiceButtons()
    this.view.displayScores()
    this.view.getUserChoicesContainer().addEventListener("click", this.userClickedChoiceButton)
    this.view.displayDialogueBox()
  }

  userClickedChoiceButton(eventObject){
    if(eventObject.target.closest("button").id){

      var activeGame = Game.activeGame
      var user = activeGame.players[0]
      var computer = activeGame.players[1]

      var userChoiceID = parseInt(eventObject.target.closest("button").id)
      user.makeChoice(activeGame.labels[userChoiceID])
      var computerChoiceID = computer.makeRandomChoice(activeGame.mode)
      computer.makeChoice(activeGame.labels[computerChoiceID])

      activeGame.determineWinner(userChoiceID, computerChoiceID)
    }
  }

  adjustScore(result){
    if(result.includes("WIN")){
      this.players[0].score++
    } else if(result.includes("LOSE")){
      this.players[1].score++
    }
  }

  determineWinner(userChoice, computerChoice) {
    var result;

    if(this.mode === "simple"){
      var result = this.#determineWinnerSimple(userChoice, computerChoice)
    } else if(this.mode === "complex"){
      var result = this.#determineWinnerComplex(userChoice, computerChoice)
    }
    this.view.displayOutcome(result)

    this.adjustScore(result)
    this.view.displayScores()
  }

  #determineWinnerSimple(playerChoice, computerChoice){
    if(playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0){
      return "WIN"
    } else if(playerChoice === computerChoice) {
      return "DRAW"
    } else {
      return "LOSE"
    }
  }

  #determineWinnerComplex(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
      return "DRAW"
    }

    // Pikachu vs. Bulbasaur
    if(playerChoice === 3 && computerChoice === 0){
      return "FLYWIN";
    } else if(computerChoice === 3 && playerChoice === 0){
      return "FLYLOSE"
    }

    // Pikachu vs. Charmander
    if(playerChoice === 1 && computerChoice === 3){
      return "BURNWIN";
    } else if(computerChoice === 1 && playerChoice === 3){
      return "BURNLOSE"
    }

    if(bothEven(playerChoice, computerChoice) || bothOdd(playerChoice, computerChoice)){
      return playerChoice < computerChoice ? "WIN" : "LOSE"
    } else {
      return playerChoice > computerChoice ? "WIN" : "LOSE"
    }
  }


  static #labelOptions = {
    simple: ["charmander", "bulbasaur", "squirtle"],
    complex: ["bulbasaur", "charmander", "squirtle", "pikachu", "geodude"],
  }
}
