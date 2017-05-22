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
    var result;
     switch (mScore) {
            case 0:
                result = "Love-All";
                break;
            case 1:
                result = "Fifteen-All";
                break;
            case 2:
                result = "Thirty-All";
                break;
            default:
                result = "Deuce";
                break;
        }
    return result;
}

function winnerIs(point1, point2, player1Name, player2Name) {
    var player = point1 > point2 ? player1Name : player2Name;
    var result = ((point1 - point2) * (point1 - point2) === 1) ? "Advantage " + player : "Win for " + player;
    return result;
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
    
    if (this.m_score1 === this.m_score2) {
        score = draw(this.m_score1);
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        score = winnerIs(this.m_score1, this.m_score2, this.player1Name, this.player2Name);
    } else {
        score = position(this.m_score1) + '-' + position(this.m_score2);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
