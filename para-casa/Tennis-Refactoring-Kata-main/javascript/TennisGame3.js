function TennisGame3(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
}

TennisGame3.prototype.getScore = function() {
    if (this.player1Score === this.player2Score) {
        return this.getEqualScore();
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        return this.getAdvantageOrWin();
    } else {
        return this.getRegularScore();
    }
};

TennisGame3.prototype.getEqualScore = function() {
    const scoreNames = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
    return this.player1Score < 3 ? scoreNames[this.player1Score] : scoreNames[3];
};

TennisGame3.prototype.getAdvantageOrWin = function() {
    const scoreDifference = Math.abs(this.player1Score - this.player2Score);
    const leadingPlayer = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;

    if (scoreDifference === 1) {
        return "Advantage " + leadingPlayer;
    } else {
        return "Win for " + leadingPlayer;
    }
};

TennisGame3.prototype.getRegularScore = function() {
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
    return scoreNames[this.player1Score] + "-" + scoreNames[this.player2Score];
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName === "player1") {
        this.player1Score++;
    } else {
        this.player2Score++;
    }
};




if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
