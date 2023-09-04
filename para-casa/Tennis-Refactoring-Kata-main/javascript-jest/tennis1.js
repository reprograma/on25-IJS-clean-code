'use strict';

function getScore(m_score1, m_score2) {
    var score = "";
    var tempScore = 0;
    if (m_score1 === m_score2) {
        return {
            0: score = "Love-All",
            1: score = "Fifteen-All",
            2: score = "Thirty-All",
            3: score = "Deuce",
            4: score = "Deuce"
        } [m_score1] || 'Error!'        
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        var minusResult = m_score1 - m_score2;
        if (minusResult === 1) {
            score = "Advantage player1";
        } else if (minusResult === -1) {
            score = "Advantage player2";
        } else if (minusResult >= 2) {
            score = "Win for player1";
        } else {
            score = "Win for player2";
        }
    } else { //quando m_score < 4
        for (let i = 1; i < 3; i++) {
            if (i === 1) {
                tempScore = m_score1;
            } else {
                score += "-";
                tempScore = m_score2;
            } 
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break; 
            }
        }
    }
    return score;
}

module.exports = getScore;
