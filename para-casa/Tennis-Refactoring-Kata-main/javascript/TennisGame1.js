function TennisGame1(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
}

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === this.player1Name) {
        this.player1Score++;
    } else if (playerName === this.player2Name) {
        this.player2Score++;
    }
};

TennisGame1.prototype.getScore = function() {
    if (this.player1Score === this.player2Score) {
        return this.getEqualScore();
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        return this.getAdvantageOrWin();
    } else {
        return this.getRegularScore();
    }
};

TennisGame1.prototype.getEqualScore = function() {
    let score = ""
    if(this.player1Score === this.player2Score){
        switch (this.player1Score) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score =  "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }
    }
};

TennisGame1.prototype.getAdvantageOrWin = function() {
    const scoreDifference = Math.abs(this.player1Score - this.player2Score);

    if (scoreDifference === 1) {
        return "Advantage " + (this.player1Score > this.player2Score ? this.player1Name : this.player2Name);
    } else {
        return "Win for " + (this.player1Score > this.player2Score ? this.player1Name : this.player2Name);
    }
};

TennisGame1.prototype.getRegularScore = function() {
    for (var i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1;
        else {
            score += "-";
            tempScore = this.m_score2;
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
    return score;
}
    // const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

    // return scoreNames[this.player1Score] + "-" + scoreNames[this.player2Score];
//};


 module.exports = TennisGame1;
