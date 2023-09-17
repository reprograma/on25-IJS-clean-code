class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
        this.scores = ["Love", "Fifteen", "Thirty", "Forty"];
        this.m_score1 = 0;
        this.m_score2 = 0;
    }

    wonPoint(playerName) {
        playerName === "player1" ? this.m_score1++ : this.m_score2++;
    }

    getScore() {
        if (this.m_score1 === this.m_score2) {
            if (this.m_score1 < 3) {
                return `${this.scores[this.m_score1]}-All`;
            }
            return "Deuce";
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            const minusResult = this.m_score1 - this.m_score2;
            if (Math.abs(minusResult) === 1) {
                const leadingPlayer = minusResult > 0 ? this.player1Name : this.player2Name;
                return `Advantage ${leadingPlayer}`;
            } else {
                const winningPlayer = minusResult > 0 ? this.player1Name : this.player2Name;
                return `Win for ${winningPlayer}`;
            }
        } else {
            return `${this.scores[this.m_score1]}-${this.scores[this.m_score2]}`;
        }
    }
}

module.exports = TennisGame1;
