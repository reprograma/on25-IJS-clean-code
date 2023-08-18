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
    if (this.player1Score >= 3) {
        return "Deuce";
    } else {
        return [
            "Love-All",
            "Fifteen-All",
            "Thirty-All"
        ][this.player1Score];
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
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

    return scoreNames[this.player1Score] + "-" + scoreNames[this.player2Score];
};


 module.exports = TennisGame1;
