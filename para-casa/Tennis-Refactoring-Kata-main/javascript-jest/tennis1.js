class getScore {

    scoreArray = [
        "Love-All",
        "Fifteen-All",
        "Thirty-All",
        "Deuce",
    ];

    constructor() {
        this.score = "";
        this.tempScore = 0;
    };

    getScoreByValidator(firstScore, secondScore) {
        if (firstScore === secondScore) {
            if (firstScore < 3 && secondScore < 3) {
                this.score = this.scoreArray[firstScore];
                
                console.log(this.score);
            } else if (firstScore >= 3 && secondScore >= 3) {
                this.score = this.scoreArray[3];

                console.log(this.score);
            } else {
                console.log("report two numbers!");
            };
        } else if (firstScore >= 4 || secondScore >= 4) {
            let minusResult = firstScore - secondScore;

            if (minusResult === 1) {
                console.log("Advantage player1");

            }else if (minusResult === -1) {
                console.log("Advantage player2");

            }else if (minusResult >= 2) {
                console.log("Win for player1");

            }else {
               console.log("Win for player2");
            };
        } else {
            for (var i = 1; i < 3; i++) {
                if (i === 1) { tempScore = firstScore; }
                else {
                    score += "-";
                    tempScore = secondScore;
                };
                
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
    };
}; 

const game = new getScore()
game.getScoreByValidator(6, 6)


module.exports = getScore;
