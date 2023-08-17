// var TennisGame3 = function(p1N, p2N) {
//     this.p2 = 0;
//     this.p1 = 0;

//     this.p1N = p1N;
//     this.p2N = p2N;
// };

// TennisGame3.prototype.getScore = function() {
//     var s;
//     if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
//         var p = ["Love", "Fifteen", "Thirty", "Forty"];
//         s = p[this.p1];
//         return (this.p1 == this.p2) ? s + "-All" : s + "-" + p[this.p2];
//     } else {
//         if (this.p1 == this.p2)
//             return "Deuce";
//         s = this.p1 > this.p2 ? this.p1N : this.p2N;
//         return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? "Advantage " + s : "Win for " + s;
//     }
// };

// TennisGame3.prototype.wonPoint = function(playerName) {
//     if (playerName == "player1")
//         this.p1 += 1;
//     else
//         this.p2 += 1;

// };

// if (typeof window === "undefined") {
//     module.exports = TennisGame3;
// }

class TennisGame3 {
  player1Name;
  player2Name;
  player2Point = 0;
  player1Point = 0;

  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getPointsName() {
    const namePoints = ["Love", "Fifteen", "Thirty", "Forty"];
    let result = namePoints[this.player1Point];
    return this.player1Point == this.player2Point
      ? result + "-All"
      : result + "-" + namePoints[this.player2Point];
  }

  getPlayersName() {
    const resultName =
      this.player1Point > this.player2Point
        ? this.player1Name
        : this.player2Name;
    return resultName;
  }

  getScore() {
    if (
      this.player1Point < 4 &&
      this.player2Point < 4 &&
      this.player1Point + this.player2Point < 6
    ) {
      return this.getPointsName();
    } else {
      if (this.player1Point == this.player2Point) return "Deuce";
      return (this.player1Point - this.player2Point) *
        (this.player1Point - this.player2Point) ==
        1
        ? "Advantage " + this.getPlayersName()
        : "Win for " + this.getPlayersName();
    }
  }

  wonPoint(playerName) {
    const point =
      playerName == "player1"
        ? (this.player1Point += 1)
        : (this.player2Point += 1);
    return point;
  }
}

if (typeof window === "undefined") {
  module.exports = TennisGame3;
}

const tennis = new TennisGame3("Player1", "Player2");
tennis.player1Point = 3;
tennis.player2Point = 3;
console.log(tennis.getScore());
console.log(tennis.wonPoint("player2"));
