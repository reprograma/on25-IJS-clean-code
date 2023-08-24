'use strict';

function getScore(player1Score, player2Score) {
    const scoreStatus = ['Love', 'Fifteen', 'Thirty', 'Forty']

    if(player1Score === player2Score){
        return equalScore(player1Score);
    }else if(player1Score >= 4 || player2Score >= 4){
        return advantageOrWinScore(player1Score, player2Score)
    }else{
        return normalScore(player1Score, player2Score)
    }
    
    function equalScore(score){
        if(score >= 3){
            return 'Deuce'
        }else{
            return `${scoreStatus[score]}-All`
        }
    }

    function advantageOrWinScore(player1Score, player2Score){
        const minorScore = player1Score - player2Score;
        if(Math.abs(minorScore) === 1){
            return `Advantage player${(minorScore === 1 ? 1 : 2)}`
        }else{
            return `Win for player${(minorScore > 1 ? 1 : 2)}`;
        }
    }
    
    function normalScore(player1Score, player2Score) {
        let score = "";
        let tempScore = 0;
        
        for (let i = 1; i < 3; i++) {
            if (i === 1) {
                tempScore = player1Score;
            } else {
                tempScore = player2Score;
                score += "-";
            }
            score += scoreDescription[tempScore];
        }
            return score;
    }
}   


module.exports = getScore;