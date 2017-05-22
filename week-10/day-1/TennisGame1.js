var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1") {
        this.m_score1 += 1;
    }
    else {
        this.m_score2 += 1;
    }
};


function draw(mScore) {
     switch (mScore) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            default:
                return "Deuce";
        }
}

function winnerIs(minusResult) {
    switch(minusResult) {
            case 1:
                return "Advantage player1";
            case -1:
                return "Advantage player2";
            case 2:
                return "Win for player1";
            case 3:
                 return "Win for player1";
            case 4:
                 return "Win for player1";
            default:
                return "Win for player2";
        }
}


TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    var minusResult = this.m_score1 - this.m_score2;
    if (this.m_score1 === this.m_score2) {
       score = draw(this.m_score1);
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = winnerIs(minusResult);
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}