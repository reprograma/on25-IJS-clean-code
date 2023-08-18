'use strict';

function getScore(p1, p2) {
    var s;
    const players = ["player1" , "player2"]

    if ((p1 < 4 && p2 < 4) && (p1 + p2 < 6)) {
        var p = ["Love", "Fifteen", "Thirty", "Forty"];
        s = p[p1];
        return (p1 === p2) ? s + "-All" : s + "-" + p[p2];
    } else {
        if (p1 === p2) {
            return "Deuce";
        }
        s = p1 > p2 ? players[0] : players[1];
        return ((p1 - p2) * (p1 - p2) === 1) ? "Advantage " + s : "Win for " + s;
    }
}

module.exports = getScore;
