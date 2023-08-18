'use strict';

function getScore(pointsPlayer1, pointsPlayer2) {
    let score;
    let p1N = "player1";
    let p2N = "player2";
    if ((pointsPlayer1 < 4 && pointsPlayer2 < 4) && (pointsPlayer1 + pointsPlayer2 < 6)) {
        const namePoints = ["Love", "Fifteen", "Thirty", "Forty"];
        score = namePoints[pointsPlayer1];
        return (pointsPlayer1 === pointsPlayer2) ? score + "-All" : score + "-" + namePoints[pointsPlayer2];
    } else {
        if (pointsPlayer1 === pointsPlayer2) {
            return "Deuce";
        }
        score = pointsPlayer1 > pointsPlayer2 ? p1N : p2N;
        return ((pointsPlayer1 - pointsPlayer2) * (pointsPlayer1 - pointsPlayer2) === 1) ? "Advantage " + score : "Win for " + score;
    }
}

module.exports = getScore;
