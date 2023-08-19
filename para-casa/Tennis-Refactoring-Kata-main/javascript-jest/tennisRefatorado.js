'use strict';

function getScore(P1point, P2point) {
    var score = "";
    var P1res;
    var P2res;
    // First if  - empate
    if (P1point === P2point && P1point < 3) {
        if (P1point === 0) {
            score = "Love";
        }
        if (P1point === 1) {
            score = "Fifteen";
        }
        if (P1point === 2) {
            score = "Thirty";
        }
        score += "-Tudoooo";
    }

    // second if
    if (P1point === P2point && P1point > 2) {
        score = "Deuce";
    }

   //third if------jogadora 1 fez ponto e a outra zerou-----------------------
    if (P1point > 0 && P2point === 0) {
        if (P1point === 1) {
            P1res = "Fifteen";
        }
        if (P1point === 2) {
            P1res = "Thirty";
        }
        if (P1point === 3) {
            P1res = "Forty";
        }

        P2res = "Love";
        score = P1res + "-------" + P2res;
    }

    //Fourth if---------jogadora 2 fez ponto e a outra zerou-----------------
    if (P2point > 0 && P1point === 0) {
        if (P2point === 1) {
            P2res = "Fifteen";
        }
        if (P2point === 2) {
            P2res = "Thirty";
        }
        if (P2point === 3) {
            P2res = "Forty";
        }

        P1res = "Love";
        score = P1res + "-oi" + P2res;
    }


    // Fifth if -----mostra pontos de cada uma--------------------
    if (P1point > P2point && P1point < 4) {
        if (P1point === 2) {
            P1res = "Thirty";
        }
        if (P1point === 3) {
            P1res = "Forty";
        }
        if (P2point === 1) {
            P2res = "Fifteen";
        }
        if (P2point === 2) {
            P2res = "Thirty";
        }
        score = P1res + "-" + P2res;
    }


// Sixth if ------Nao precisa desse if--------------------------------
    if (P2point > P1point && P2point < 4) {
        if (P2point === 2) {
            P2res = "Thirty";
        }
        if (P2point === 3) {
            P2res = "Forty";
        }
        if (P1point === 1) {
            P1res = "Fifteen Sixth if  ";
        }
        if (P1point === 2) {
            P1res = "Thirty";
        }
        score = P1res + "-" + P2res;
    }

    //seventh if --------------------------------------
    if (P1point > P2point && P2point >= 3) {
        score = "Advantage player1";
    }

    //eighth if --------------------------------------
    if (P2point > P1point && P1point >= 3) {
        score = "Advantage player2";
    }
    //ninth if --------------------------------------
    if (P1point >= 4 && P2point >= 0 && (P1point - P2point) >= 2) {
        score = "Win for player1";
    }
    //tenth if --------------------------------------
    if (P2point >= 4 && P1point >= 0 && (P2point - P1point) >= 2) {
        score = "Win for player2";
    }
    return score;
}


module.exports = getScore;

console.log(getScore(2,2))

console.log('Segundo IF --------------------------------')
console.log(getScore(3,3))

console.log('Terceiro IF --------------------------------')
console.log(getScore(2,0))

console.log('Quarto IF --------------------------------')
console.log(getScore(3,0))

console.log('Quinto IF --------------------------------')
console.log(getScore(3,2))


console.log('Sexto IF ---------------------------------')
console.log(getScore(1,2))


console.log('Sétino IF --------------------------------')
console.log(getScore(4,5))


console.log('Oitavo IF ---------------------------------')
console.log(getScore(6,3))


console.log('Nono IF ---------------------------------')
console.log(getScore(4,1))

console.log('Nono IF ---------------------------------')
console.log(getScore(1,4))
// console.log(getScore(6,1))
// console.log(getScore(1,1))
// console.log(getScore(3,1))
// console.log(getScore(3,4))