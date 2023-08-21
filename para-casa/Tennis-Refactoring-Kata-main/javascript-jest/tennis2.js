'use strict';

function getScore(player1Points, player2Points) {
    function getPointsText(points) {
        switch (points) {
            case 0:
                return "Love";
            case 1:
                return "Fifteen";
            case 2:
                return "Thirty";
            case 3:
                return "Forty";
        }
    }

    if (player1Points === player2Points) {
        if (player1Points < 3) {
            return getPointsText(player1Points) + "-All";
        } else {
            return "Deuce";
        }
    } else if (player1Points >= 4 || player2Points >= 4) {
        const pointDifference = player1Points - player2Points;
        switch (pointDifference) {
            case 1:
                return "Advantage player1";
            case -1:
                return "Advantage player2";
            default:
                return pointDifference >= 2 ? "Win for player1" : "Win for player2";
        }
    } else {
        const player1Result = getPointsText(player1Points);
        const player2Result = getPointsText(player2Points);
        return `${player1Result}-${player2Result}`;
    }
}

module.exports = getScore;
