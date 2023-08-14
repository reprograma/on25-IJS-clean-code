'use strict';


function getScore(player1Points, player2Points) {
    let pointsDescriptionList = ["Love", "Fifteen", "Thirty", "Forty"];

    // NÃO TEM UM GANHADOR
    if (player1Points < 4 && player2Points < 4) { 
        scorePlayer1 = pointsDescriptionList[player1Points];
        scorePlayer2 = pointsDescriptionList[player2Points];

        if(player1Points === player2Points){
            return scorePlayer1 + "-All"
        } else{
            return scorePlayer1 + "-" + scorePlayer2
        }

    //QUANDO O JOGO PODE ACABAR (COM VENCEDOR OU NÃO)
    } else { 
        if (player1Points === player2Points) {
            return "Deuce";
        } else if(player1Points > player2Points) {
            let pointsDifference = player1Points - player2Points

            if(pointsDifference === 1) {
                return "Advantage player1"
            } else{
                return "Win for player1"
            }
        } else{
            let pointsDifference = player2Points - player1Points

            if(pointsDifference === 1) {
                return "Advantage player2"
            } else{
                return "Win for player2"
            }
        }
    }
}

module.exports = getScore;
