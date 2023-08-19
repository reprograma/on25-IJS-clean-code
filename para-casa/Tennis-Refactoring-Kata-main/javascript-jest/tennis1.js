'use strict';

function getScore(m_score1, m_score2) {
    const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
    let  score = "";
    var tempScore = 0;
    if (m_score1 === m_score2) {
        if (m_score1 < 3) {
            score = scoreNames[m_score1] + "-All";
        } else {
            score = "Deuce";
        }
    } else if (m_score1 >= 4 || m_score2 >= 4) {
        const minusResult = m_score1 - m_score2;
        if (minusResult === 1) {
            score = "Advantage player1";
        } else if (minusResult === -1) {
            score = "Advantage player2";
        } else if (minusResult >= 2) {
            score = "Win for player1";
        } else {
            score = "Win for player2";
        }
    } else {
        for (let i = 1; i < 2; i++) {
            const tempScore = (i === 0) ? m_score1 : m_score2;
            score += (i === 0) ? "" : "-";
            score += scoreNames[tempScore];  
            
        }
    }
    return score;
}

module.exports = getScore;
