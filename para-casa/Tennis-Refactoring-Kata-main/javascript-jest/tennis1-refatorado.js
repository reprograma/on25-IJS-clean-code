function getScore(score1, score2) {
  const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];

  if (score1 === score2) {
    if (score1 < 3) {
      return `${scoreNames[score1]}-All`;
    } else {
      return `Deuce`;
    }
  } else if (score1 >= 4 || score2 >= 4) {
    const diference = score1 - score2;
    const higherNumber = Math.max(score1, score2);
    const player = higherNumber === score1 ? "player1" : "player2"

    if (Math.abs(diference) === 1) {
      return `Advantage ${player}`;
    } else {
      return `Win for ${player}`;
    }
  } else {
    return `${scoreNames[score1]}-${scoreNames[score2]}`;
  }
}

module.exports = getScore;
