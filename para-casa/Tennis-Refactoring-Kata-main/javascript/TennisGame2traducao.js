var JogoDeTenis2 = function (nomeJogador1, nomeJogador2) {
    this.PontosJogador1 = 0;
    this.PontosJogador2 = 0;

    this.ResultadoJogador1 = "";
    this.ResultadoJogador2 = "";

    this.nomeJogador1 = nomeJogador1;
    this.nomeJogador2 = nomeJogador2;
};

JogoDeTenis2.prototype.obterPlacar = function () {
    var placar = "";

    if (this.PontosJogador1 === this.PontosJogador2 && this.PontosJogador1 < 3) {
        if (this.PontosJogador1 === 0)
            placar = "Love"; //0x0
        if (this.PontosJogador1 === 1)
            placar = "Fifteen"; //15x15
        if (this.PontosJogador1 === 2)
            placar = "Thirty"; //30x30
        placar += "-All"; //40x40
    }
    if (this.PontosJogador1 === this.PontosJogador2 && this.PontosJogador1 > 2)
        placar = "Deuce"; // 4x5 falta 2 pra ganhar o set

    if (this.PontosJogador1 > 0 && this.PontosJogador2 === 0) {
        if (this.PontosJogador1 === 1)
            this.ResultadoJogador1 = "Fifteen"; //15x0
        if (this.PontosJogador1 === 2) 
            this.ResultadoJogador1 = "Thirty"; //30x0
        if (this.PontosJogador1 === 3)
            this.ResultadoJogador1 = "Forty"; //40x0

        this.ResultadoJogador2 = "Love"; //0
        placar = this.ResultadoJogador1 + "-" + this.ResultadoJogador2;
    }
    if (this.PontosJogador2 > 0 && this.PontosJogador1 === 0) {
        if (this.PontosJogador2 === 1)
            this.ResultadoJogador2 = "Fifteen"; // 0x15
        if (this.PontosJogador2 === 2)
            this.ResultadoJogador2 = "Thirty"; // 0x30
        if (this.PontosJogador2 === 3)
            this.ResultadoJogador2 = "Forty"; // 0x40

        this.ResultadoJogador1 = "Love"; // 0
        placar = this.ResultadoJogador1 + "-" + this.ResultadoJogador2;
    }

    if (this.PontosJogador1 > this.PontosJogador2 && this.PontosJogador1 < 4) {
        if (this.PontosJogador1 === 2)
            this.ResultadoJogador1 = "Thirty";
        if (this.PontosJogador1 === 3)
            this.ResultadoJogador1 = "Forty";
        if (this.PontosJogador2 === 1)
            this.ResultadoJogador2 = "Fifteen";
        if (this.PontosJogador2 === 2)
            this.ResultadoJogador2 = "Thirty";
        placar = this.ResultadoJogador1 + "-" + this.ResultadoJogador2;
    }
    if (this.PontosJogador2 > this.PontosJogador1 && this.PontosJogador2 < 4) {
        if (this.PontosJogador2 === 2)
            this.ResultadoJogador2 = "Thirty";
        if (this.PontosJogador2 === 3)
            this.ResultadoJogador2 = "Forty";
        if (this.PontosJogador1 === 1)
            this.ResultadoJogador1 = "Fifteen";
        if (this.PontosJogador1 === 2)
            this.ResultadoJogador1 = "Thirty";
        placar = this.ResultadoJogador1 + "-" + this.ResultadoJogador2;
    }

    if (this.PontosJogador1 > this.PontosJogador2 && this.PontosJogador2 >= 3) {
        placar = "Vantagem Jogador 1";
    }

    if (this.PontosJogador2 > this.PontosJogador1 && this.PontosJogador1 >= 3) {
        placar = "Vantagem Jogador 2";
    }

    if (this.PontosJogador1 >= 4 && this.PontosJogador2 >= 0 && (this.PontosJogador1 - this.PontosJogador2) >= 2) {
        placar = "Vitória para o Jogador 1";
    }
    if (this.PontosJogador2 >= 4 && this.PontosJogador1 >= 0 && (this.PontosJogador2 - this.PontosJogador1) >= 2) {
        placar = "Vitória para o Jogador 2";
    }
    return placar;
};

JogoDeTenis2.prototype.definirPontosJogador1 = function (numero) {
    var i;
    for (i = 0; i < numero; i++) {
        this.pontuarJogador1();
    }
};

JogoDeTenis2.prototype.definirPontosJogador2 = function (numero) {
    var i;
    for (i = 0; i < numero; i++) {
        this.pontuarJogador2();
    }
};

JogoDeTenis2.prototype.pontuarJogador1 = function () {
    this.PontosJogador1++;
};

JogoDeTenis2.prototype.pontuarJogador2 = function () {
    this.PontosJogador2++;
};

JogoDeTenis2.prototype.vencerPonto = function (jogador) {
    if (jogador === "jogador1")
        this.pontuarJogador1();
    else
        this.pontuarJogador2();
};

if (typeof window === "undefined") {
    module.exports = JogoDeTenis2;
}
