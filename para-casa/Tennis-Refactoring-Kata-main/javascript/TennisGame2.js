class TennisGame2 {

    player1Point;
    player2Point;
    player1Result;
    player2Result;
    player1Name;
    player2Name;

    constructor(player1Name, player2Name) {
        this.player1Point = 0;
        this.player2Point = 0;

        this.player1Result = "";
        this.player2Result = "";

        this.player1Name = player1Name;
        this.player2Name = player2Name;
    };

    getScore() {
        let score = "";

        if ((this.player1Point === this.player2Point) && this.player1Point < 3) {
            if (this.player1Point === 0) {
                score = "Love";
            }

            if (this.player1Point === 1) {
                score = "Fifteen";
            }

            if (this.player1Point === 2) {
                score = "Thirty";
            }

            score += "-All";
        }

        if ((this.player1Point === this.player2Point) && this.player1Point > 2) {
            score = "Deuce";
        }

        if ((this.player1Point > 0) && (this.player2Point === 0)) {
            if (this.player1Point === 1) {
                this.player1Result = "Fifteen";
            }

            if (this.player1Point === 2) {
                this.player1Result = "Thirty";
            }

            if (this.player1Point === 3) {
                this.player1Result = "Forty";
            }

            this.player2Result = "Love";
            score = this.player1Result + "-" + this.player2Result;
        }

        if ((this.player2Point > 0) && (this.player1Point === 0)) {
            if (this.player2Point === 1) {
                this.player2Result = "Fifteen";
            }

            if (this.player2Point === 2) {
                this.player2Result = "Thirty";
            }

            if (this.player2Point === 3) {
                this.player2Result = "Forty";
            }

            this.player1Result = "Love";
            score = this.player1Result + "-" + this.player2Result;
        }
     
        if ((this.player1Point > this.player2Point) && (this.player1Point < 4)) {
            
            this.setThirtyForty(this.player1Point)
            this.setFifteenThirty(this.player2Point);

            score = this.player1Result + "-" + this.player2Result;
        }

        if ((this.player2Point > this.player1Point) && (this.player2Point < 4)) {
           
            this.setThirtyForty(this.player2Point)
            this.setFifteenThirty(this.player1Point);

            score = this.player1Result + "-" + this.player2Result;
        }

        if ((this.player1Point > this.player2Point) && (this.player2Point >= 3)) {
            score = "Advantage player1";
        }

        if (this.player2Point > this.player1Point && this.player1Point >= 3) {
            score = "Advantage player2";
        }

        if ((this.player1Point >= 4) && (this.player2Point >= 0) && ((this.player1Point - this.player2Point) >= 2)) {
            score = "Win for player1";
        }

        if ((this.player2Point >= 4) && (this.player1Point >= 0) && ((this.player2Point - this.player1Point) >= 2)) {
            score = "Win for player2";
        }
        return score;
    };

    setFifteenThirty(playerPoint) {

        if (playerPoint === 1) {
            this.playerResult = "Fifteen";
        }

        if (playerPoint === 2) {
            this.playerResult = "Thirty";
        }
    }

    setThirtyForty(playerPoint) {

        if (playerPoint === 2) {
            this.playerResult = "Thirty";
        }

        if (playerPoint === 3) {
            this.playerResult = "Forty";
        }
    }

    setPlayer1Score(number) {
        for (let i = 0; i < number; i++) {
            this.player1Point++;
        }
    };

    setPlayer2Score(number) {
        for (let i = 0; i < number; i++) {
            this.player2Point++;
        }
    };

    wonPoint(player) {
        if (player === "player1") {
            this.player1Point++;
        } else {
            this.player2Point++;
        }
    };

}

module.exports = TennisGame2;
