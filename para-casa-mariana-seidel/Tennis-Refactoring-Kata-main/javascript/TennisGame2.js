class TennisGame2 {
    
    playerName1;
    playerName2;
    p1Point = 0;
    p2Point = 0;
    p1Res = '';
    p2Res = '';
    scoreName = '';
    score = [
        'Love',
        'Fifteen',
        'Thirty',
        'Forty'
    ]

    constructor(playerName1, playerName2) {
        this.playerName1 = playerName1
        this.playerName2 = playerName2
    }

    set p1Score(number){
        for(let i = 0; i < number; i++){
            this.p1Point++
        }
    }

    set p2Score(number){
        for(let i = 0; i < number; i++){        
            this.p2Point++
        }
    }

    wonPoint(){
        this.playerName1 === 'player1' ? this.p1Point++ : this.p2Point++
    }

    nameScore(point1, point2, res1, res2){
        for(let i= point1; i < 4; i++){
            res1 = `${this.score[i]}`
            for(let i =  point2; i < 3; i++){
                res2 = `${this.score[i]}`
                return this.scoreName = `${res1}-${res2}`
            }   
        }
       return this.scoreName
    }

    getScore(){
        if(this.p1Point === this.p2Point && this.p1Point < 3){
            for(let i = this.p1Point; i < 3; i++){
                return this.scoreName = `${this.score[i]}-All`
            }           
        } else if (this.p1Point === this.p2Point && this.p1Point > 2){
            return this.scoreName = 'Deuce'
        }

        if((this.p1Point > 0 && this.p2Point === 0) || (this.p1Point > this.p2Point && this.p1Point < 4)){
            this.nameScore(this.p1Point, this.p2Point, this.p1Res, this.p2Res)
        }

        if(this.p2Point > this.p1Point && this.p2Point < 4){
            this.nameScore(this.p2Point, this.p1Point, this.p2Res, this.p1Res)
            const words = this.scoreName.split('-')
            this.scoreName = words[1].concat(`-${words[0]}`)
        }

        this.p1Point >= 4 && this.p2Point >= 0 && (this.p1Point - this.p2Point) >= 2 ? this.scoreName = 'Win for player 1':
        this.p2Point >= 4 && this.p1Point >= 0 && (this.p2Point - this.p1Point) >= 2 ? this.scoreName = 'Win for player 2' : 
        this.p1Point > this.p2Point && this.p2Point >=3 ? this.scoreName = 'Advantage player 1':
        this.p2Point > this.p1Point && this.p1Point >=3 ? this.scoreName = 'Advantage player 2': undefined

        return this.scoreName
    }
}

module.exports = { TennisGame2 }

const tennis = new TennisGame2 ('player0', 'player2')
tennis.p1Point = 0
tennis.p2Point = 2
console.log(tennis.getScore())
tennis.wonPoint()
console.log(tennis)
