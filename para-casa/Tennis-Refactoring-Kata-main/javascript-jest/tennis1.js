function getScore(score1, score2) {
    let score = ["Love", "Fifteen", "Thirty", "Forty"];
    
    if (score1 === score2) {
        if(score1 < 3) {
        return `${score[score1]}-All`;            
        } else {
            return `Deuce`;
        }
    } else if (score1 >= 4 || score2 >= 4) {
        let minusResult = score1 - score2;
        if (minusResult === 1) {score = "Advantage player1";}
        else if (minusResult === -1) {score = "Advantage player2";}
        else if (minusResult >= 2) {score = "Win for player1";}
        else {score = "Win for player2";}
    } else {
        return `${score[score1]}-${score[score2]}`;
    }
    return score;
}

module.exports = getScore;

