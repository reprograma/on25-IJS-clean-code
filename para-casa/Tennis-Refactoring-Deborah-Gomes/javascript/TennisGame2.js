class TennisGame2 {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.scores = ["Love", "Fifteen", "Thirty", "Forty"];
        this.P1point = 0;
        this.P2point = 0;
    }

    wonPoint(player) {
        player === "player1" ? this.P1Score() : this.P2Score();
    }

    P1Score() {
        this.P1point++;
    }

    P2Score() {
        this.P2point++;
    }

    getScore() {
        if (this.P1point === this.P2point) {
            return this.P1point < 3 ? `${this.scores[this.P1point]}-All` : "Deuce";
        }

        if (this.P1point > 0 && this.P2point === 0) {
            return `${this.scores[this.P1point]}-Love`;
        }

        if (this.P2point > 0 && this.P1point === 0) {
            return `Love-${this.scores[this.P2point]}`;
        }

        if (this.P1point > this.P2point && this.P1point < 4) {
            return `${this.scores[this.P1point]}-${this.scores[this.P2point]}`;
        }

        if (this.P2point > this.P1point && this.P2point < 4) {
            return `${this.scores[this.P1point]}-${this.scores[this.P2point]}`;
        }

        if (this.P1point > this.P2point && this.P2point >= 3) {
            return "Advantage player1";
        }

        if (this.P2point > this.P1point && this.P1point >= 3) {
            return "Advantage player2";
        }

        if (this.P1point >= 4 && this.P2point >= 0 && this.P1point - this.P2point >= 2) {
            return "Win for player1";
        }

        if (this.P2point >= 4 && this.P1point >= 0 && this.P2point - this.P1point >= 2) {
            return "Win for player2";
        }
    }
}

module.exports = TennisGame2;
