'use strict';

function getScore(jogador1, jogador2) {
    var placar = "";
    var tempplacar = 0;
    if (jogador1 === jogador2) {
        switch (jogador1) {
            case 0:
                placar = "Love-All"; // 0x0 
                break;
            case 1:
                placar = "Fifteen-All"; // 15x15
                break;
            case 2:
                placar = "Thirty-All"; //30x30
                break;
            default:
                placar = "Deuce"; // 40x40
                break;
        }
    } else if (jogador1 >= 4 || jogador2 >= 4) {
        var minusResult = jogador1 - jogador2;
        if (minusResult === 1) { placar = "Advantage player1"; }
        else if (minusResult === -1) { placar = "Advantage player2"; }
        else if (minusResult >= 2) { placar = "Win for player1"; }
        else { placar = "Win for player2"; }
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) { tempplacar = jogador1; }
            else {
                placar += "-";
                tempplacar = jogador2;
            }
            switch (tempplacar) {
                case 0:
                    placar += "Love";
                    break;
                case 1:
                    placar += "Fifteen";
                    break;
                case 2:
                    placar += "Thirty";
                    break;
                case 3:
                    placar += "Forty";
                    break;
            }
        }
    }
    return placar;
}

module.exports = getScore;
