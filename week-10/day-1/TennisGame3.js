var TennisGame3 = function(player1Name, player2Name) {
    this.point1 = 0;
    this.point2 = 0;

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame3.prototype.getScore = function() {
    var score;
    var result;
    if ((this.point1 < 4 && this.point2 < 4) && (this.point1 + this.point2 < 6)) {
        var position = ["Love", "Fifteen", "Thirty", "Forty"];
        score = position[this.point1];
        result = (this.point1 === this.point2) ? score + "-All" : score + "-" + position[this.point2];
    } else if(this.point1 === this.point2) {
        result = "Deuce"
    } else {
        score = this.point1 > this.point2 ? this.player1Name : this.player2Name;
        result = ((this.point1 - this.point2) * (this.point1 - this.point2) === 1) ? "Advantage " + score : "Win for " + score;
    }
    return result;
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.point1 += 1;
    else
        this.point2 += 1;
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}