function TennisGame2(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
}

TennisGame2.prototype.getScore = function() {
    if (this.player1Score === this.player2Score) {
        return this.getEqualScore();
    } else if (this.player1Score >= 4 || this.player2Score >= 4) {
        return this.getAdvantageOrWin();
    } else {
        return this.getRegularScore();
    }
};

TennisGame2.prototype.getEqualScore = function() {
    const scoreNames = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
    return this.player1Score < 3 ? scoreNames[this.player1Score] : scoreNames[3];
};

TennisGame2.prototype.getAdvantageOrWin = function() {
    const scoreDifference = Math.abs(this.player1Score - this.player2Score);
    const leadingPlayer = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;

    if (scoreDifference === 1) {
        return "Advantage " + leadingPlayer;
    } else {
        return "Win for " + leadingPlayer;
    }
};

TennisGame2.prototype.getRegularScore = function() {
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
    return scoreNames[this.player1Score] + "-" + scoreNames[this.player2Score];
};

TennisGame2.prototype.P1Score = function() {
    this.player1Score++;
};

TennisGame2.prototype.P2Score = function() {
    this.player2Score++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1") {
        this.P1Score();
    } else {
        this.P2Score();
    }
};

TennisGame2.prototype.SetP1Score = function(number) {
    for (let i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    for (let i = 0; i < number; i++) {
        this.P2Score();
    }
};


if (typeof window === "undefined") {
    module.exports = TennisGame2;
}

