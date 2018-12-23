const { getAllCombinations } = require("../util.js");

class King {
    constructor(position) {
        this.position = position;
    }

    allPositionDiffs() {
        return getAllCombinations([0,1,-1],[0,1,-1]).slice(1).sort();
    }

    allPossibleMoves() {
        return this.allPositionDiffs().map(x =>
            [this.position[0] + x[0], this.position[1] + x[1]]);
    }

    validPossibleMoves() {
        return this.allPossibleMoves().filter(cell =>
            cell.every(index => index >= 0 && index < 8));
    }
}

exports.King = King;