'use strict';

function getScore(P1point, P2point) {
    let pointNames = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    }

    var score = "";

    if (P1point === P2point) {
        if (P1point < 3) {
            score = pointNames[P1point] + "-All";
        } else {
            score = "Deuce";
        }
    } else if (P1point >= 4 || P2point >= 4) {
        var pointDifference = P1point - P2point;
        if (pointDifference === 1) {
            score = "Advantage player1";
        } else if (pointDifference === -1) {
            score = "Advantage player2";
        } else if (pointDifference >= 2) {
            score = "Win for player1";
        } else if (pointDifference <= -2) {
            score = "Win for player2";
        }
    } else {
        var P1res = pointNames[P1point];
        var P2res = pointNames[P2point];
        score = P1res + "-" + P2res;
    }

    return score;
}

module.exports = getScore;
