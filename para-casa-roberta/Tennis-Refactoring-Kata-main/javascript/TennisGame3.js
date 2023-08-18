var TennisGame3 = function (p1Name, p2Name) {
  this.p2 = 0;
  this.p1 = 0;
  this.p1Name = p1Name;
  this.p2Name = p2Name;
};

TennisGame3.prototype.getScore = function () {
  p1p2sum = this.p1 + this.p2;
  p1p2sub = this.p1 - this.p2;
  p1p2even = this.p1 == this.p2;
  const p = ["Love", "Fifteen", "Thirty", "Forty"];



  if (this.p1 && this.p2 < 4 && p1p2sum < 6) {
    //se p1 e p2 < 4 e soma das potuações <6, retorna array de palavras e pontuação player1
    s = p[this.p1];
     }else if(p1p2even) {
        return s + "-All";
    } else {
        return s + "-" + p[this.p2];
    } else {
    if (p1pseven) return "Deuce";
    s = this.p1 > this.p2 ? this.p1Name : this.p2Name; //se p1 maior que p2, retorna nome player1, senão nome player2
    return p1p2sub * p1p2sub == 1 ? "Advantage " + s : "Win for " + s;
  }
};

TennisGame3.prototype.wonPoint = function (playerName) {
  if (playerName == "player1") this.p1 += 1;
  else this.p2 += 1;
};

if (typeof window === "undefined") {
  module.exports = TennisGame3;
}
