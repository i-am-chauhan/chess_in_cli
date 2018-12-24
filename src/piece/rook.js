const { zip } = require('../util.js');

class Rook {
    constructor(position) {
        this.position = position;
        this.positiveIndexDiffs = [1, 2, 3, 4, 5, 6, 7];
        this.negativeIndexDiffs = [-1, -2, -3, -4, -5, -6, -7];
    }

    allPositionDiffs() {
        return zip(new Array(8).fill(0), this.positiveIndexDiffs).concat(
            zip(new Array(8).fill(0), this.negativeIndexDiffs),
            zip(this.positiveIndexDiffs, new Array(8).fill(0)),
            zip(this.negativeIndexDiffs, new Array(8).fill(0))
        ).sort();
    }

    allPossibleMoves() {
        return this.allPositionDiffs().map(x =>
            [this.position[0] + x[0], this.position[1] + x[1]]);
    }

    validPossibleMoves() {
        return this.allPossibleMoves().filter(cell =>
            cell.every(index => index >= 0 && index < 8)
        );
    }
};

exports.Rook = Rook;