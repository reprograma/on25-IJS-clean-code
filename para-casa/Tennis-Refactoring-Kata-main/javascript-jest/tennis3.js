'use strict';

function getScore(pointsP1, pointsP2) {
    let s;
    const players = ["player1" , "player2"]

    if ((pointsP1 < 4 && pointsP2 < 4) && (pointsP1 + pointsP2 < 6)) {
        let p = ["Love", "Fifteen", "Thirty", "Forty"];
        s = p[pointsP1];
        return (pointsP1 === pointsP2) ? s + "-All" : s + "-" + p[pointsP2];
    } else {
        if (pointsP1 === pointsP2) return "Deuce"

        s = pointsP1 > pointsP2 ? players[0] : players[1];
        return ((pointsP1 - pointsP2) * (pointsP1 - pointsP2) === 1) ? "Advantage " + s : "Win for " + s;
    }


    // switch () {
    //     case 1:

    //     break,

    //  }
}

module.exports = getScore;
