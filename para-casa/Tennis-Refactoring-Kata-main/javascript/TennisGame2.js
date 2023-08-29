class TennisGame {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Score = 0;
    this.player2Score = 0;
    this.scoreLabels = ["Love", "Fifteen", "Thirty", "Forty"];
  }

  getScore() {
    if (this.isScoreEqual()) {
      if (this.player1Score < 3) {
        return this.scoreLabels[this.player1Score] + "-All";
      }
      return "Deuce";
    } else if (this.hasAdvantage()) {
      const leadingPlayer =
        this.player1Score > this.player2Score
          ? this.player1Name
          : this.player2Name;
      return `Advantage ${leadingPlayer}`;
    } else if (this.hasWinner()) {
      const winningPlayer =
        this.player1Score > this.player2Score
          ? this.player1Name
          : this.player2Name;
      return `Win for ${winningPlayer}`;
    } else {
      return `${this.scoreLabels[this.player1Score]}-${
        this.scoreLabels[this.player2Score]
      }`;
    }
  }

  isScoreEqual() {
    return this.player1Score === this.player2Score;
  }

  hasAdvantage() {
    return (
      Math.abs(this.player1Score - this.player2Score) === 1 &&
      (this.player1Score >= 3 || this.player2Score >= 3)
    );
  }

  hasWinner() {
    return (
      Math.abs(this.player1Score - this.player2Score) >= 2 &&
      (this.player1Score >= 4 || this.player2Score >= 4)
    );
  }

  player1Scores() {
    this.player1Score++;
  }

  player2Scores() {
    this.player2Score++;
  }

  wonPoint(player) {
    if (player === "player1") {
      this.player1Scores();
    } else {
      this.player2Scores();
    }
  }
}

if (typeof window === "undefined") {
  module.exports = TennisGame;
}
