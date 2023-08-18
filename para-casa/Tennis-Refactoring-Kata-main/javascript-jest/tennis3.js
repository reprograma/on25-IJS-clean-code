'use strict';

function getScore(pointsP1, pointsP2) {
    let scoreWinner;
    const players = ["player1" , "player2"]

    if ((pointsP1 < 4 && pointsP2 < 4) && (pointsP1 + pointsP2 < 6)) {
        let pointDescription = ["Love", "Fifteen", "Thirty", "Forty"];
        scoreWinner = pointDescription[pointsP1];
        return (pointsP1 === pointsP2) ? `${scoreWinner}-All` : `${scoreWinner}-${pointDescription[pointsP2]}`;
    } else {
        if (pointsP1 === pointsP2) return "Deuce"

        scoreWinner = pointsP1 > pointsP2 ? players[0] : players[1];
        return ((pointsP1 - pointsP2) * (pointsP1 - pointsP2) === 1) ? `Advantage ${scoreWinner}` : `Win for ${scoreWinner}`;
    }
}

module.exports = getScore;
