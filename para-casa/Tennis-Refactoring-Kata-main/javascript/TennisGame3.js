class TennisGame3 {

    player2;
    player1;
    player1N;
    player2N;

    constructor(p1N, p2N) {
        this.player2 = 0;
        this.player1 = 0;

        this.player1N = p1N;
        this.player2N = p2N;
    };

    getScore() {
        let score;

        if ((this.player1 < 4 && this.player2 < 4) && (this.player1 + this.player2 < 6)) {
            let points = ["Love", "Fifteen", "Thirty", "Forty"];
            score = points[this.player1];
            return (this.player1 == this.player2) ? score + "-All" : score + "-" + points[this.player2];
        } else {
            if (this.player1 == this.player2) {
                return "Deuce";
            }

            score = this.player1 > this.player2 ? this.player1N : this.player2N;
            return ((this.player1 - this.player2) * (this.player1 - this.player2) == 1) ? "Advantage " + score : "Win for " + score;
        }
    };

    wonPoint(playerName) {
        if (playerName == "player1")
            this.player1 += 1;
        else
            this.player2 += 1;

    };


}

module.exports = TennisGame3;