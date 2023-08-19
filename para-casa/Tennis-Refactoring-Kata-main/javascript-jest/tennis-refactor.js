"use strict";

let score = "";

function getScore(P1point, P2point) {
  const resultPoint1 =
    P1point === 1
      ? "Fifteen"
      : P1point === 2
      ? "Thirty"
      : P1point === 3
      ? "Forty"
      : "oi 1";
  const resultPoint2 =
    P2point === 1
      ? "Fifteen"
      : P2point === 2
      ? "Thirty"
      : P2point === 3
      ? "Forty"
      : "Love 1";

  const P2 = 
  P2point !== 0 ? resultPoint2 : "Love"  ;
 const P1 = 
 P1point !== 0 ? resultPoint1 : "Love" ;
  return (score = P1 + "-" + P2);
}

function drawGame(P1point, P2point) {
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
    score += "-All";
  }

  if (P1point === P2point && P1point > 2) {
    score = "Deuce";
  }
}

function advantagePlayer(P1point, P2point) {
  if (P1point > P2point && P2point >= 3) {
    score = "Advantage player1";
  } else {
    score = "Advantage player2";
  }
}

function winGame(P1point, P2point) {
  if (P1point >= 4 && P2point >= 0 && P1point - P2point >= 2) {
    score = "Win for player1";
  } else {
    score = "Win for player2";
  }
}

module.exports = { getScore, winGame, advantagePlayer, drawGame };

module.exports = getScore;

//console.log(getScore(2, 0));

console.log("Segundo IF --------------------------------");
console.log(getScore(3, 3));

// console.log("Terceiro IF --------------------------------");
// console.log(getScore(2, 0));

// console.log("Quarto IF --------------------------------");
// console.log(getScore(3, 0));

// console.log("Quinto IF --------------------------------");
// console.log(getScore(3, 2));

// console.log("Sexto IF ---------------------------------");
// console.log(getScore(1, 2));

// console.log("Sétino IF --------------------------------");
// console.log(getScore(4, 5));

// console.log("Oitavo IF ---------------------------------");
// console.log(getScore(6, 10));

// console.log("Nono IF ---------------------------------");
// console.log(getScore(4, 1));

// console.log("Nono IF ---------------------------------");
console.log(getScore(1, 4));
// console.log(getScore(6,1))
// console.log(getScore(1,1))
// console.log(getScore(3,1))
// console.log(getScore(3,4))
