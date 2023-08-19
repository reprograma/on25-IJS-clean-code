'use strict';

const
    SCORE_NAMES = ["Love", "Fifteen", "Thirty", "Forty"],
    TIE_SCORE_NAMES = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];

function getScore(playerScore1, playerScore2) {
    if(playerScore1 === playerScore2) {
        if(playerScore1 >= 0 && playerScore1 < TIE_SCORE_NAMES.length) {
            return TIE_SCORE_NAMES[playerScore1];
        } else {
            return "Deuce";
        }
    } else if(playerScore1 >= 4 || playerScore2 >= 4) {
        const scoreDifference = playerScore1 - playerScore2;
        if(Math.abs(scoreDifference) === 1) {
            return `Advantage ${ scoreDifference === 1 ? "player1" : "player2" }`
        } else {
            return `Win for ${ scoreDifference > 1 ? "player1" : "player2" }`
        }
    } else {
        return buildRegularScore(playerScore1) + "-" + buildRegularScore(playerScore2);
    }
}

function buildRegularScore(score) {
    if(score >= 0 && score < SCORE_NAMES.length) {
        return SCORE_NAMES[score];
    } else {
        return "";
    }
}

module.exports = getScore;
