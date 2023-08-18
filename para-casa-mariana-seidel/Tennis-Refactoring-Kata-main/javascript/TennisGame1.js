class TennisGame1 {

    playerName1;
    playerName2;
    score1 = 0;
    score2 = 0;
    tempScore = 0;
    scoreName = '';

    constructor(playerName1, playerName2) {
        this.playerName1 = playerName1
        this.playerName2 = playerName2
    }

    wonPoint(){
        this.playerName1 === 'player1' ? this.score1 += 1 : this.score2 += 1
    }

    getScore(){
        const score = [
            'Love',
            'Fifteen',
            'Thirty',
            'Forty'
        ]

        let scoreResult = this.score1 - this.score2

        if(this.score1 === this.score2){
                for (let i = this.score1; i < 3; i++){
                    return this.scoreName = `${score[i]}-All`
                }
                this.scoreName = 'Deuce'
        
        } else if (this.score1 >= 4 || this.score2 >= 4){
                scoreResult === 1 ? this.scoreName = "Advantage player1" : 
                scoreResult === -1 ?  this.scoreName = "Advantage player2" :
                scoreResult >= 2 ? this.scoreName = "Win for player1" : 
                this.scoreName = "Win for player2"

        } else {
            for(let i = this.score1; i < 4; i++){ 
                    this.scoreName += `${score[i]}-`
                    i === 1 ? this.tempScore = this.score1 : this.tempScore = this.score2      

                for (let i = this.tempScore; i < 4; i++){
                       return this.scoreName += score[i]                
                }
            }
        }
        return this.scoreName          
    }
}

module.exports = TennisGame1;

const tennis = new TennisGame1 ('player1', 'player2')
tennis.score1 = 3
tennis.score2 = 3
console.log(tennis.getScore())
tennis.wonPoint()
console.log(tennis)
