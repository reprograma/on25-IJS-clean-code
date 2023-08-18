class JogoDeTenis2 {
    constructor(player1Name, player2Name) {
        this.P1point = 0;
        this.P2point = 0;
        this.P1res = "";
        this.P2res = "";
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.score = "";
    }

    Score() {
        if (this.P1point === this.P2point && this.P1point < 3) {
            switch (this.P1point) {
                case 0:
                    this.P1res = this.P2res = "Love";
                    this.score = "Love -All";
                    break;
                case 1:
                    this.P1res = this.P2res = "Fifteen";
                    this.score = "Fifteen -All";
                    break;
                case 2:
                    this.P1res = this.P2res = "Thirty";
                    this.score = "Thirty -All";
                    break;
            }
        } if (this.P1point === this.P2point && this.P1point > 2) {
            this.score = "Deuce";
        } if (this.P1point !== this.P2point && this.P1point > 3) {
            switch (this.P1point) {
                case 0:
                    this.P1res = "Love";
                    break;
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
            switch (this.P2point) {
                case 0:
                    this.P2res = "Love";
                    break;
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
            this.score = this.P1res + "-" + this.P2res;
        } if (this.P1point > this.P2point && this.P2point >= 3) {
            this.score = `Vantagem ${this.player1Name}`;
        } if (this.P2point > this.P1point && this.P1point >= 3) {
            this.score = `Vantagem ${this.player2Name}`;
        } if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
            this.score = `Vitória para o ${this.player1Name}`;
        } if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
            this.score = `Vitória para o ${this.player2Name}`;
        }
        return this.score;
    }

    setScore(player, number) {
        if (player == this.player1Name) {
            this.P1point = number;
        } if (player == this.player2Name) {
            this.P2point = number;
        } else {
            console.log("Informe um jogador válido")
        }
    }
}



const jogo1 = new JogoDeTenis2("Ana", "Paulo");
jogo1.setScore("Ana", 2);
jogo1.setScore("Paulo", 2);
jogo1.Score();