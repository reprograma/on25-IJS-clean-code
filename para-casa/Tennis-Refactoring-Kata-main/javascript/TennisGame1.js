class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.firstScore = 0;
        this.secondScore = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.score = "";
        this.tempScore = 0;
    };

    wonPoint() {
        if (playerName === "player1")
            this.firstScore += 1;
        else
            this.secondScore += 1;
    };

    getScore() {
        if (this.firstScore === this.secondScore) {
            if (this.firstScore < 3) {
                this.score = this.scoreArray[this.firstScore];

                console.log(this.score);
            } else {
                this.score = this.scoreArray[3];

                console.log(this.score);
            };
        } else if (this.firstScore >= 4 || this.secondScore >= 4) {
            let minusResult = this.firstScore - this.secondScore;

            if (minusResult === 1) {
                console.log("Advantage player1");
                
            } else if (minusResult === -1) {
                console.log("Advantage player2");

            } else if (minusResult >= 2) {
                console.log("Win for player1");

            } else {
                console.log("Win for player2");
            };
        } else {
            for (var i = 1; i < 3; i++) {
                if (i === 1) tempScore = this.firstScore;
                else {
                    score += "-";
                    tempScore = this.secondScore;
                }
                switch (tempScore) {
                    case 0:
                        score += "Love";
                        break;
                    case 1:
                        score += "Fifteen";
                        break;
                    case 2:
                        score += "Thirty";
                        break;
                    case 3:
                        score += "Forty";
                        break;
                };
            };
        };
        return score;
    };
};

TennisGame1.prototype.getScore = function () {
    var score = "";
    var tempScore = 0;
    if (this.firstScore === this.secondScore) {
        switch (this.firstScore) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    } else if (this.firstScore >= 4 || this.secondScore >= 4) {
        var minusResult = this.firstScore - this.secondScore;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.firstScore;
            else {
                score += "-";
                tempScore = this.secondScore;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}