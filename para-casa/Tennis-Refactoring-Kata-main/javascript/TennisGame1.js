class TennisGame1 {
	constructor(player1Name, player2Name) {
		this.m_score1 = 0;
		this.m_score2 = 0;
		this.player1Name = player1Name;
		this.player2Name = player2Name;
	}

	wonPoint(playerName) {
		if (playerName === this.player1Name) {
			this.m_score1++;
		} else {
			this.m_score2++;
		}
	}
}
getScore();
let score = '';
let tempScore = 0;
if (this.m_score1 === this.m_score2) {
	switch (this.m_score1) {
		case 0:
			score = 'Love-All';
			break;
		case 1:
			score = 'Fifteen-All';
			break;
		case 2:
			score = 'Thirty-All';
			break;
		default:
			score = 'Deuce';
			break;
	}
} else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
	let minusResult = this.m_score1 - this.m_score2;

	switch (minusResult) {
		case 1:
			score = 'Advantage player1';
			break;
		case -1:
			score = 'Advantage player2';
			break;
		default:
			if (minusResult >= 2) {
				score = 'Win for player1';
			} else {
				score = 'Win for player2';
			}
			break;
	}
} else {
	for (let i = 1; i < 3; i++) {
		if (i === 1) tempScore = this.m_score1;
		else {
			score += '-';
			if (i === 1) tempScore = this.m_score1;
			else {
				score += '-';
				tempScore = this.m_score2;
			}
			switch (tempScore) {
				case 0:
					score += 'Love';
					break;
				case 1:
					score += 'Fifteen';
					break;
				case 2:
					score += 'Thirty';
					break;
				case 3:
					score += 'Forty';
					break;
			}
		}
	}

	return console.log(score);
}

const game1 = new TennisGame1('Thay', 'Bruna');
console.log(game1);
game1.wonPoint('Thay');
console.log(game1);
game1.getScore();

module.exports = { TennisGame1 };
