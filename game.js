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

  determineWinner(userChoice, computerChoice) {
    if(this.mode === "simple"){
      var result = this.#determineWinnerSimple(userChoice, computerChoice)
    } else if(this.mode === "complex"){
      var result = this.#determineWinnerComplex(userChoice, computerChoice)
    }
    this.view.displayOutcome(result)
  }

  #determineWinnerSimple(playerChoice, computerChoice){
    if(playerChoice === 0 && computerChoice === 1 || playerChoice === 1 && computerChoice === 2 || playerChoice === 2 && computerChoice === 0){
      // view.displayOutcome("WIN")
      // TODO: Refactor so that it's the main, not the game, that speaks to the view
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
