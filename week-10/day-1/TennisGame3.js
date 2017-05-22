var TennisGame3 = function(player1Name, player2Name) {
    this.p1 = 0;
    this.p2 = 0;

    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame3.prototype.getScore = function() {
    var score;
    if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
        var position = ["Love", "Fifteen", "Thirty", "Forty"];
        score = position[this.p1];
        return (this.p1 === this.p2) ? score + "-All" : score + "-" + position[this.p2];
    } else {
        if (this.p1 == this.p2) {
            return "Deuce";
        }
        score = this.p1 > this.p2 ? this.player1Name : this.player2Name;
        return ((this.p1 - this.p2) * (this.p1 - this.p2) === 1) ? "Advantage " + score : "Win for " + score;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.p1 += 1;
    else
        this.p2 += 1;
};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}