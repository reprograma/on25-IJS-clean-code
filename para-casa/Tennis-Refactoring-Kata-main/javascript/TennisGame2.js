class TennisGame {
  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Score = 0;
    this.player2Score = 0;
    this.scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
  }

  getScore() {
    if (this.isDeuce()) {
      return "Deuce";
    } else if (this.isAdvantage()) {
      return `Advantage ${this.getLeadingPlayerName()}`;
    } else if (this.isWinner()) {
      return `Win for ${this.getLeadingPlayerName()}`;
    } else if (this.player1Score === this.player2Score) {
      return `${this.scoreNames[this.player1Score]}-All`;
    } else {
      return `${this.scoreNames[this.player1Score]}-${
        this.scoreNames[this.player2Score]
      }`;
    }
  }

  isDeuce() {
    return this.player1Score >= 3 && this.player2Score === this.player1Score;
  }

  isAdvantage() {
    return this.player1Score >= 4 || this.player2Score >= 4;
  }

  isWinner() {
    return (
      (this.player1Score >= 4 && this.player1Score - this.player2Score >= 2) ||
      (this.player2Score >= 4 && this.player2Score - this.player1Score >= 2)
    );
  }

  getLeadingPlayerName() {
    return this.player1Score > this.player2Score
      ? this.player1Name
      : this.player2Name;
  }

  wonPoint(player) {
    if (player === "player1") {
      this.player1Score++;
    } else {
      this.player2Score++;
    }
  }
}

if (typeof window === "undefined") {
  module.exports = TennisGame;
}
