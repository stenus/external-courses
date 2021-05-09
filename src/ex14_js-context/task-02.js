function Hangman(word) {
  this.word = word;
  this.rightSymbols = [];
  this.wrongSymbols = [];
  this.numberOfErrors = 0;
  this.maxNumberOfErrors = 6;

  this.guess = function (symbol) {
    if (this.getErrorsLeft() === 0) {
      console.log("You lose!");
      return this;
    }

    if (!this.getGuessedString().includes("_")) {
      console.log("You won!");
      return this;
    }

    if (this.word.includes(symbol)) {
      this.rightSymbols.push(symbol);
      let guessedString = this.getGuessedString();

      if (guessedString.includes("_")) {
        console.log(guessedString);
      } else {
        console.log(guessedString + " | You won!");
      }
    } else {
      this.wrongSymbols.push(symbol);
      this.numberOfErrors += 1;
      console.log(
        `wrong letter, errors left ${this.getErrorsLeft()} | ${this.getWrongSymbols().join(
          ", "
        )}`
      );
    }

    return this;
  };

  this.getGuessedString = function () {
    let guessedString = "";
    for (let symbol of this.word) {
      if (this.rightSymbols.includes(symbol)) {
        guessedString += symbol;
      } else {
        guessedString += "_";
      }
    }
    return guessedString;
  };

  this.getErrorsLeft = function () {
    return this.maxNumberOfErrors - this.numberOfErrors;
  };

  this.getWrongSymbols = function () {
    return this.wrongSymbols;
  };

  this.getStatus = function () {
    return `${getGuessedString} | errors left ${this.getErrorsLeft()}`;
  };

  this.startAgain = function (word) {
    this.word = word;
    this.rightSymbols = [];
    this.wrongSymbols = [];
    this.numberOfErrors = 0;
  };
}

let hangman = new Hangman();
module.exports = hangman;
