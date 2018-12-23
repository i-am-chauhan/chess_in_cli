class Pawn {
    constructor(position, team) {
        this.position = position;
        this.team = team;
        this.difference = {};
        this.difference.firstTeam = [[0, 1], [1, 1], [-1, 1]];
        this.difference.secondTeam = [[0, -1], [-1, -1], [1, -1]];
    }

    allPossibleMoves() {
        return this.difference[this.team].map(x =>
            [this.position[0] + x[0], this.position[1] + x[1]]);
    }

    validPossibleMoves() {
        return this.allPossibleMoves().filter(cell =>
            cell.every(index => Math.abs(index) == index));
    }
};

exports.Pawn = Pawn;