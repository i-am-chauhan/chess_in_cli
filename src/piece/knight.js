const { getAllCombinations } = require("../util.js");

class Knight {
    constructor(position) {
        this.position = position;
    }

    possibleMoveDifferences() {
        let moveDifference = getAllCombinations(
            [1, -1, 2, -2],
            [1, -1, 2, -2]
        );
        return moveDifference.filter(x =>
            Math.abs(x[0]) != Math.abs(x[1])
        ).sort();
    }

    allPossibleMoves() {
        return this.possibleMoveDifferences().map(x =>
            [x[0] + this.position[0], x[1] + this.position[1]]);
    }

    validPossibleMoves() {
        return this.allPossibleMoves().filter(cell =>
            cell.every(index => index >= 0 && index < 8));
    }
};

exports.Knight = Knight;