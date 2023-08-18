// // 'use strict';

// function getScore(m_score1, m_score2) {
//   let score = "";
//   let tempScore = 0;
//   if (m_score1 === m_score2) {
//     switch (m_score1) {
//       case 0:
//         score = "Love-All";
//         break;
//       case 1:
//         score = "Fifteen-All";
//         break;
//       case 2:
//         score = "Thirty-All";
//         break;
//       default:
//         score = "Deuce";
//         break;
//     }
//   } else if (m_score1 >= 4 || m_score2 >= 4) {
//     var minusResult = m_score1 - m_score2;
//     if (minusResult === 1) {
//       score = "Advantage player1";
//     } else if (minusResult === -1) {
//       score = "Advantage player2";
//     } else if (minusResult >= 2) {
//       score = "Win for player1";
//     } else {
//       score = "Win for player2";
//     }
//   } else {
//     for (var i = 1; i < 3; i++) {
//       if (i === 1) {
//         tempScore = m_score1;
//       } else {
//         score += "-";
//         tempScore = m_score2;
//       }
//       switch (tempScore) {
//         case 0:
//           score += "Love";
//           break;
//         case 1:
//           score += "Fifteen";
//           break;
//         case 2:
//           score += "Thirty";
//           break;
//         case 3:
//           score += "Forty";
//           break;
//       }
//     }
//   }
//   return score;
// }

// module.exports = getScore;

"use strict";

function getScore(player1Score, player2Score) {
  const scoreDescription = ["Love", "Fifteen", "Thirty", "Forty"];

  if (player1Score === player2Score) {
    return equalScore(player1Score);
  } else if (player1Score >= 4 || player2Score >= 4) {
    return advantageOrWinScore(player1Score, player2Score);
  } else {
    return normalScore(player1Score, player2Score);
  }

  function equalScore(score) {
    if (score >= 3) {
      return "Deuce";
    } else {
      return `${scoreDescription[score]}-All`;
    }
  }

  function advantageOrWinScore(player1Score, player2Score) {
    const minorScore = player1Score - player2Score;
    if (Math.abs(minorScore) === 1) {
      return `Advantage player${minorScore === 1 ? 1 : 2}`;
    } else {
      return `Win for player${minorScore > 1 ? 1 : 2}`;
    }
  }

  function normalScore(player1Score, player2Score) {
    let score = "";
    let tempScore = 0;
    for (let i = 1; i < 3; i++) {
      tempScore = i === 1 ? player1Score : player2Score;
      score += i === 2 ? "-" : "";
      score += scoreDescription[tempScore];
    }
    return score;
  }
}

module.exports = getScore;
