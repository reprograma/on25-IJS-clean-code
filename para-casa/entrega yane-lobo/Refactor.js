class PointsCounter {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.score1 = 0
        this.score2 = 0
    }

    countPoints (player) {
        player === this.player1 ? this.score1++ : this.score2++
    }
}

class Match extends PointsCounter {
    
    getScore() {
        let score = " "
        const scores = {
            0: "Love",
            1: "Fifteen",
            2: "Thirty",
            3: "Forty"
        }

        if(this.score1 === this.score2) {
            if(this.score1 <= 2) {
                score = scores[ this.score1 ] + "-All"
                return score
            } else {
                return "Deuce"
            }
        }

        if(this.score1 >= 4 || this.score2 >= 4) {
            let minusResult = this.score1 - this.score2 
            if (minusResult === 1) {
                score = `Advantage ${this.player1}`
            } else if(minusResult >= 2) {
                score = `Win for ${this.player1}`
            } else if(minusResult === -1) {
                score = `Advantage ${this.player2}`
            } else {
                score = `Win for ${this.player2}`
            }
            return score
        } else {
                score = `${scores[this.score1]}-${scores[this.score2]}`
            return score
        }
    }
}

module.exports = { PointsCounter, Match}


