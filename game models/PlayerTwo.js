const { RandomStrategy } = require("./strategies/randomStrategy");
const { FirstPossibleStrategy } = require("./strategies/firstPossibleStrategy");
const { FIRST_POSSIBLE, RANDOM_STRATEGY } = require("./constants");
class PlayerTwo {
  constructor(player) {
    this.player = player;
    this.strategy = FIRST_POSSIBLE;
  }
  getPlayer() {
    return this.player;
  }
  setStrategy(strategy) {
    switch (strategy) {
      case FIRST_POSSIBLE:
        this.strategy = FIRST_POSSIBLE;
        break;
      case RANDOM_STRATEGY:
        this.strategy = RANDOM_STRATEGY;
        break;
      default:
        this.strategy = FIRST_POSSIBLE;
        break;
    }
  }
  getMove(gameBoard) {
    this.strategy.getMove(gameBoard);
  }
}

module.exports = PlayerTwo;
