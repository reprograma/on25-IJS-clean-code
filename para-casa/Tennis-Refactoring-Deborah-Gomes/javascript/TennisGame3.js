class TennisGame3 {
    constructor(player1Name, player2Name) {
        this.p1Score = 0;
        this.p2Score = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.scoreLabels = ["Love", "Fifteen", "Thirty", "Forty"];
    }

    wonPoint(playerName) {
        playerName === "player1" ? this.p1Score++ : this.p2Score++;
    }

    getScore() {
        if (this.p1Score === this.p2Score) {
            if (this.p1Score < 3) {
                return this.scoreLabels[this.p1Score] + "-All";
            } else {
                return "Deuce";
            }
        } else {
            if (this.p1Score >= 4 || this.p2Score >= 4) {
                const scoreDifference = this.p1Score - this.p2Score;
                const leadingPlayer = scoreDifference > 0 ? this.player1Name : this.player2Name;
                return Math.abs(scoreDifference) === 1 ? `Advantage ${leadingPlayer}` : `Win for ${leadingPlayer}`;
            } else {
                return `${this.scoreLabels[this.p1Score]}-${this.scoreLabels[this.p2Score]}`;
            }
        }
    }
}

module.exports = TennisGame3;

