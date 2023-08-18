class TennisGame {
    constructor(player1Name, player2Name) {
        this.player1Score = 0;
        this.player2Score = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    // Registra um ponto para o jogador
    wonPoint(playerName) {
        if (playerName === this.player1Name)
            this.player1Score++;
        else
            this.player2Score++;
    }

    // Verifica se os jogadores têm o mesmo numero de pontos
    isTied() {
        return this.player1Score === this.player2Score;
    }

    // Retorna a pontuação 
    getTiedScore() {
        if (this.player1Score >= 3) {
            return "Deuce";
        } else {
            const scoreNames = ["Love", "Fifteen", "Thirty"];
            return `${scoreNames[this.player1Score]}-All`;
        }
    }

    // Verifica se algum jogador tem vantagem ou vence
    hasAdvantageOrWinner() {
        return this.player1Score >= 4 || this.player2Score >= 4;
    }

    // Retorna a pontuação quando um jogador tem vantagem ou vence
    getAdvantageOrWinnerScore() {
        const scoreDifference = Math.abs(this.player1Score - this.player2Score);
        if (scoreDifference === 1) {
            const leadingPlayer = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
            return `Advantage ${leadingPlayer}`;
        } else {
            const winningPlayer = this.player1Score > this.player2Score ? this.player1Name : this.player2Name;
            return `Win for ${winningPlayer}`;
        }
    }

    // Retorna a pontuação atual do jogo
    getInGameScore() {
        const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
        return `${scoreNames[this.player1Score]}-${scoreNames[this.player2Score]}`;
    }

    // Retorna a pontuação completa do jogo
    getScore() {
        if (this.isTied()) {
            return this.getTiedScore();
        } else if (this.hasAdvantageOrWinner()) {
            return this.getAdvantageOrWinnerScore();
        } else {
            return this.getInGameScore();
        }
    }
}

if (typeof window === "undefined") {
    module.exports = TennisGame;
}
