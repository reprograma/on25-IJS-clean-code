var TennisGame2 = function(player1Name, player2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame2.prototype.pointEquals = function(){
    if(this.P1point == this.P2point){
        if(this.P1point < 3){
            switch(this.P1point){
                case 0:
                    score = "Love";
                    break;
                case 1:
                    score = "Fifteen";
                    break;
                default:
                    score = "Thirty";
            }
            score += "-All";
        } else {
            score = "Deuce";
        }
    }
}

TennisGame2.prototype.p1ScoredMore = function(){
    if(this.P1point > this.P2point){
        if(this.P1point < 4){
            switch(this.P1point){
                case 2:
                    this.P1res = "Thirty";
                    break;
                case 3:
                    this.P1res = "Forty";
                    break;
            }

            switch(this.P2point){
                case 1:
                    this.P2res = "Fifteen";
                    break;
                case 2:
                    this.P2res = "Thirty"; 
            }

            score = this.P1res + "-" + this.P2res;
        }

        if(this.P2point >= 3){
            score = "Advantage player1";
        }
    }
}

TennisGame2.prototype.p2ScoredZero = function (){
    if (this.P1point > 0 && this.P2point === 0) {
        switch(this.P1point){
            case 1:
                this.P1res = "Fifteen";
                break;
            case 2:
                this.P1res = "Thirty";
                break;
            case 3:
                this.P1res = "Forty";
                break;               
        }

        this.P2res = "Love";
        score = this.P1res + "-" + this.P2res;
    }
}

TennisGame2.prototype.p2ScoredMore = function(){
    if (this.P2point > this.P1point){
        if(this.P2point < 4){
            switch(this.P2point){
                case 2:
                    this.P2res = "Thirty";
                    break;
                case 3:
                    this.P2res = "Forty";
                    break;
            }

            switch(this.P1point){
                case 1:
                    this.P1res = "Fifteen";
                    break;
                case 2:
                    this.P1res = "Thirty";
                    break;
                case 3:
                case 4:
                    score = "Advantage player2";
                    break;

            }
            score = this.P1res + "-" + this.P2res;
        }
    }
}

TennisGame2.prototype.p1ScoredZero = function(){
    if (this.P2point > 0 && this.P1point === 0) {
        switch(P2Point){
            case 1:
                this.P2res = "Fifteen";
                break;
            case 2:
                this.P2res = "Thirty";
                break;
            case 3:
                this.P2res = "Forty";
                break;
        }

        this.P1res = "Love";
        score = this.P1res + "-" + this.P2res;
    }
}


TennisGame2.prototype.getScore = function() {
    var score = "";

    this.pointEquals();
    this.p1ScoredMore();
    this.p2ScoredZero();
    this.p2ScoredMore();
    this.p1ScoredZero();

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        score = "Win for player1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        score = "Win for player2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "player1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}