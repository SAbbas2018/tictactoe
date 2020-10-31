const RandomStrategy = require("./strategies/randomStrategy");
const FirstPossibleStrategy = require("./strategies/firstPossibleStrategy");
const MinMaxStrategy = require("./strategies/minmaxStrategy");
const {
  FIRST_POSSIBLE,
  RANDOM_STRATEGY,
  MINMAX_STRATEGY,
} = require("./constants");
class PlayerTwo {
  constructor(player) {
    this.player = player;
    this.strategy = new FirstPossibleStrategy(this.getPlayer());
  }
  getStrategy() {
    return this.strategy.name();
  }
  getPlayer() {
    return this.player;
  }
  setStrategy(strategy) {
    switch (strategy) {
      case FIRST_POSSIBLE:
        this.strategy = new FirstPossibleStrategy(this.getPlayer());
        break;
      case RANDOM_STRATEGY:
        this.strategy = new RandomStrategy(this.getPlayer());
        break;
      case MINMAX_STRATEGY:
        this.strategy = new MinMaxStrategy(this.getPlayer());
        break;
      default:
        this.strategy = new FirstPossibleStrategy(this.getPlayer());
        break;
    }
  }
  getMove(gameBoard) {
    return this.strategy.getMove(gameBoard);
  }
}

module.exports = PlayerTwo;
