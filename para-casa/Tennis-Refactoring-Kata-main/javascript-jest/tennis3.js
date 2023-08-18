'use strict';

function getScore(player1, player2) {
    var winner;
    let pointsPlayer1 = "player1";
    let pointsPlayer2 = "player2";
    if ((player1 < 4 && player2 < 4) && (player1 + player2 < 6)) {
        var resultado = ["Love", "Fifteen", "Thirty", "Forty"];
        winner = resultado[player1];
        return (player1 === player2) ? winner + "-All" : winner + "-" + resultado[player2];
    } else {
        if (player1 === player2) {
            return "Deuce";
        }
        winner = player1 > player2 ? pointsPlayer1 : pointsPlayer2;
        return ((player1 - player2) * (player1 - player2) === 1) ? "Advantage " + winner : "Win for " + winner;
    }
}

module.exports = getScore;
