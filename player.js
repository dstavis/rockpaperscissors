class Player {
  constructor(type){
    this.score = 0;
    this.type = type || "computer";
    this.latestChoice;
  }

  makeRandomChoice(mode){
    var numberOfChoices = mode === "simple" ? 3 : 5
    var randomNumber = Math.floor(Math.random() * 3)
    var computerChoice = randomNumber;
    this.latestChoice = computerChoice;
    return computerChoice;
  }

  makeChoice(choiceName){
    this.latestChoice = choiceName
  }
}
