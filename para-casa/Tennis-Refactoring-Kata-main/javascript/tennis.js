class TennisGame {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.score = {
            player1: 0,
            player2: 0
        };
    }

    wonPoint(playerName) {
        if (playerName === this.player1Name) {
            this.score.player1++;
        } else {
            this.score.player2++;
        }
    }

    getScore() {
        if (this.isScoreEqual()) {
            return this.getEqualScore();
        } else if (this.isAdvantageOrWin()) {
            return this.getAdvantageOrWinScore();
        } else {
            return this.getRegularScore();
        }
    }

    isScoreEqual() {
        return this.score.player1 === this.score.player2;
    }

    getEqualScore() {
        const scoreNames = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
        return this.score.player1 <= 3 ? scoreNames[this.score.player1] : scoreNames[3];
    }

    isAdvantageOrWin() {
        return this.score.player1 >= 4 || this.score.player2 >= 4;
    }

    getAdvantageOrWinScore() {
        const scoreDifference = Math.abs(this.score.player1 - this.score.player2);
        if (scoreDifference === 1) {
            const leadingPlayer = this.score.player1 > this.score.player2 ? this.player1Name : this.player2Name;
            return `Advantage ${leadingPlayer}`;
        } else {
            const winningPlayer = this.score.player1 > this.score.player2 ? this.player1Name : this.player2Name;
            return `Win for ${winningPlayer}`;
        }
    }

    getRegularScore() {
        const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
        return `${scoreNames[this.score.player1]}-${scoreNames[this.score.player2]}`;
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame;
}
