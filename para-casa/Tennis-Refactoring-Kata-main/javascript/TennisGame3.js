class TennisGame3 {
    constructor(p1N, p2N) {
        this.p1N = p1N;
        this.p2N = p2N;
        this.p1Score = 0;
        this.p2Score = 0;
    }

    getScore() {
        if (this.isRegularScore()) {
            const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
            const p1ScoreName = scoreNames[this.p1Score];
            const p2ScoreName = scoreNames[this.p2Score];

            if (this.p1Score === this.p2Score) {
                return `${p1ScoreName}-All`;
            } else {
                return `${p1ScoreName}-${p2ScoreName}`;
            }
        } else if (this.isDeuce()) {
            return "Deuce";
        } else {
            const leadingPlayer = this.p1Score > this.p2Score ? this.p1N : this.p2N;
            const scoreDifference = Math.abs(this.p1Score - this.p2Score);

            if (scoreDifference === 1) {
                return `Advantage ${leadingPlayer}`;
            } else {
                return `Win for ${leadingPlayer}`;
            }
        }
    }

    wonPoint(playerName) {
        if (playerName === "player1") {
            this.p1Score++;
        } else {
            this.p2Score++;
        }
    }

    isRegularScore() {
        return this.p1Score < 4 && this.p2Score < 4 && this.p1Score + this.p2Score < 6;
    }

    isDeuce() {
        return this.p1Score === this.p2Score && this.p1Score >= 3;
    }
}
