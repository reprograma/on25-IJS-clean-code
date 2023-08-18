'use strict';


function getScore(pointsPlayer1, pointsPlayer2) {
    const namePoints = ["Love", "Fifteen", "Thirty", "Forty", "Deuce"];

  let score = "";
  let tempScore = 0;

    if(pointsPlayer1 === pointsPlayer2){
        return toEqualGame(pointsPlayer1);
    }else  if (pointsPlayer1 >= 4 || pointsPlayer2 >= 4){
        return advantageWinGame(pointsPlayer1, pointsPlayer2);
    }else{
        return followGame(pointsPlayer1, pointsPlayer2);
    }

    function toEqualGame(pointsPlayer1) {
        if(pointsPlayer1 >= 3){
            return `${namePoints[4]}`;
        }else{
            return `${namePoints[pointsPlayer1]}-All`;
        }
    }

    function advantageWinGame(pointsPlayer1, pointsPlayer2){
        const minusResult = pointsPlayer1 - pointsPlayer2;
        if (minusResult === 1) {score = "Advantage player1";}
        else if (minusResult === -1) {score = "Advantage player2";}
        else if (minusResult >= 2) {score = "Win for player1";}
        else {score = "Win for player2";}
        return score;
    }

    function followGame(pointsPlayer1, pointsPlayer2){
        for (let i = 1; i < 3; i++) {
            if (i === 1) {tempScore = pointsPlayer1;}
            else {
                score += "-";
                tempScore = pointsPlayer2;
            }
            score += namePoints[tempScore];
    }       

    return score;
}
}

module.exports = getScore;
