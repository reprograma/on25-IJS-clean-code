class TennisGame2 {
    scores = ['Love', 'Fifteen', 'Thirty'];
    score = "";

    constructor(player1Name, player2Name) {
        this.P1point = 0;
        this.P2point = 0;

        this.P1res = "";
        this.P2res = "";

        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    showAdvantage(){
        if (this.P1point > this.P2point && this.P2point >= 3){
            this.score = "Advantage player1"
        } else if (this.P2point > this.P1point && this.P1point >= 3){
            this.score = "Advantage player2";
        }

        return this.score;
    }

    getScore() {
        this.P1res = this.scores[this.P1point];
        this.P2res = this.scores[this.P2point];
        this.score = this.P1res + "-" + this.P2res;

        if (this.P1point === this.P2point) {
            this.P1point < 3 ? this.score = this.scores[this.P1point] + "-All" : score = "Deuce";
        }

        this.showAdvantage();

        this.showWinner();

        return this.score;
    }

    showWinner(){
        if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
            this.score = "Win for player1";
        }

        if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
            this.score = "Win for player2";
        }

        return this.score;
    }
    
    SetP1Score(number) {
        for (var i = 0; i < number; i++) {
            this.P1Score();
        }
    }

    SetP2Score(number) {
        for (var i = 0; i < number; i++) {
            this.P2Score();
        }
    }

    P1Score() {
        this.P1point++;
    }

    P2Score() {
        this.P2point++;
    }

    wonPoint(player) {
        player === "player1" ? this.P1Score() : this.P2Score();
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}