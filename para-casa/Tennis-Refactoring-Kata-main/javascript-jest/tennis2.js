/*
1 A game is won by the first player to have won at least four points in total and at least two points 
more than the opponent.

2 The running score of each game is described in a manner peculiar to tennis: scores from zero to three 
points are described as “Love”, “Fifteen”, “Thirty”, and “Forty” respectively.

3 If at least three points have been scored by each player, and the scores are equal, the score is “Deuce”.

4 If at least three points have been scored by each side and a player has one more point than his opponent, 
the score of the game is “Advantage” for the player in the lead.
*/

'use strict';

function getScore(pointsPlayer1, pointsPlayer2) {
    let isDeuce = verifyScoreHasDeuce(pointsPlayer1, pointsPlayer2);
    if(isDeuce) {
        return isDeuce;
    } 

    let isDraw = verifyScoreHasDraw(pointsPlayer1, pointsPlayer2);
    if(isDraw) {
        return isDraw;
    } 

    let isVictory = verifyScoreHasVictory(pointsPlayer1, pointsPlayer2);
    if(isVictory) {
        return isVictory;
    }

    let isAdvantage = verifyScoreHasAdvantage(pointsPlayer1, pointsPlayer2);
    if(isAdvantage) {
        return isAdvantage;
    }

    let isOtherType = verifyScoresOtherTypes(pointsPlayer1, pointsPlayer2);
    if(isOtherType) {
        return isOtherType;
    }   
}

function verifyScoreHasDeuce(pointsPlayer1, pointsPlayer2) {
    //Empate Deuce (>=3)
    if (pointsPlayer1 === pointsPlayer2 && pointsPlayer1 > 2) {
        let score = "Deuce";
        return score;
    } else {
        return false;
    }
}

function verifyScoreHasDraw(pointsPlayer1, pointsPlayer2) {
    //Empate (0-2)
    let score;
    if (pointsPlayer1 === pointsPlayer2 && pointsPlayer1 < 3) {
        if (pointsPlayer1 === 0) {
            score = "Love";
        }
        if (pointsPlayer1 === 1) {
            score = "Fifteen";
        }
        if (pointsPlayer1 === 2) {
            score = "Thirty";
        }
        score += "-All";
        return score;
    } else {
        return false;
    }
}

function verifyScoreHasVictory(pointsPlayer1, pointsPlayer2) {
    // Vitória
    let score;
    if (pointsPlayer1 >= 4 && pointsPlayer2 >= 0 && (pointsPlayer1 - pointsPlayer2) >= 2) {
        score = "Win for player1";
        return score;
    } else if (pointsPlayer2 >= 4 && pointsPlayer1 >= 0 && (pointsPlayer2 - pointsPlayer1) >= 2) {
        score = "Win for player2";
        return score;
    } else {
        return false;
    }
}

function verifyScoreHasAdvantage(pointsPlayer1, pointsPlayer2) {
    // Vantagem
    let score;
    if (pointsPlayer1 > pointsPlayer2 && pointsPlayer2 >= 3) {
        score = "Advantage player1";
        return score;
    } else if (pointsPlayer2 > pointsPlayer1 && pointsPlayer1 >= 3) {
        score = "Advantage player2";
        return score;
    } else {
        return false;
    }
}

function verifyScoresOtherTypes(pointsPlayer1, pointsPlayer2) {
    // Outros scores
    let score;
    let pointsPlayer1Alias;
    let pointsPlayer2Alias;

    pointsPlayer1Alias = getPointsAlias(pointsPlayer1);
    pointsPlayer2Alias = getPointsAlias(pointsPlayer2);

    //pointsPlayer2Alias = "Love";
    score = pointsPlayer1Alias + "-" + pointsPlayer2Alias;
    
    return score;
}

function getPointsAlias(points) {     
    let allAlias = ["Love", "Fifteen", "Thirty", "Forty"];

    let pointsAlias = allAlias[points];
    return pointsAlias;
}

module.exports = getScore;
