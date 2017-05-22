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

function position(score){
    switch (score) {
            case 0:
                return "Love";
            case 1:
                return "Fifteen";
            case 2:
                return "Thirty";
            case 3:
                return "Forty";
        }
}

TennisGame1.prototype.getScore = function() {
    var score = "";
    var minusResult = this.m_score1 - this.m_score2;
    if (this.m_score1 === this.m_score2) {
       score = draw(this.m_score1);
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = winnerIs(minusResult);
    } else {
        score += position(this.m_score1);
        score += "-";
        score += position(this.m_score2);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
