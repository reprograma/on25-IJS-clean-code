var TennisGame3 = function (p1N, p2N) {
  this.p2 = 0;
  this.p1 = 0;

  this.p1N = p1N;
  this.p2N = p2N;

  p1p2sum = this.p1 + this.p2;
  p1p2even = this.p1 == this.p2;
  p1p2notEven = this.p1 != this.p2;
};

TennisGame3.prototype.getScore = function () {
  var s;
  var names = ["Love", "Fifteen", "Thirty", "Forty"];
  score = p[this.p1];

  if (this.p1 < 4 && this.p2 < 4 && p1p2sum < 6) {
    return p1p2even + score + "-All";
  } else { 
    return score + "-" + names[this.p2];
  }
  } else {
    if (p1p2even) {
    return "Deuce";
    } //se for um empate, porém se a pontuação de p1 ou p2 for cada uma maior que 4 ou a soma dos dois maior que 6
    s = this.p1 > this.p2 ? this.p1N : this.p2N;
    return (this.p1 - this.p2) * (this.p1 - this.p2) == 1
      ? "Advantage " + s
      : "Win for " + s;
  }


TennisGame3.prototype.wonPoint = function (playerName) {
  if (playerName == "player1") this.p1 += 1;
  else this.p2 += 1;
};

if (typeof window === "undefined") {
  module.exports = TennisGame3;
}







//Original


var TennisGame3 = function (p1N, p2N) {
  this.p2Score = 0;
  this.p1Score = 0;

  this.p1Name = p1Name;
  this.p2Name = p2Name;

   ;
};

TennisGame3.prototype.getScore = function () {
  var s;
  if (this.p1Score < 4 && this.p2Score < 4 && this.p1Score + this.p2Score < 6) {
    var names = ["Love", "Fifteen", "Thirty", "Forty"];
    score = names[this.p1Score];

    if(this.p1Score == this.p2Score) {
      return score + "-All"
    } else {
      return score + "-" + names[this.p2Score];
    }
    
  } else {
    if (this.p1 == this.p2) {
      return "Deuce";}

    score = this.p1 > this.p2 ? this.p1N : this.p2N;
    return (this.p1 - this.p2) * (this.p1 - this.p2) == 1
      ? "Advantage " + score
      : "Win for " + score;
  }
};

TennisGame3.prototype.wonPoint = function (playerName) {
  if (playerName == "player1") this.p1 += 1;
  else this.p2 += 1;
};

if (typeof window === "undefined") {
  module.exports = TennisGame3;
}
