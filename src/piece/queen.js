class Queen {
    constructor(position) {
        this.position = position;
        this.positiveIndexDiffs = [1, 2, 3, 4, 5, 6, 7];
        this.negativeIndexDiffs = [-1, -2, -3, -4, -5, -6, -7];
    }

    zip(firstList, secondList) {
        return firstList.map((element, index) =>
            [element, secondList[index]]);
    }

    allPositionDiffs() {
        return this.zip(this.positiveIndexDiffs, this.positiveIndexDiffs).concat(
            this.zip(this.negativeIndexDiffs, this.positiveIndexDiffs),
            this.zip(this.positiveIndexDiffs, this.negativeIndexDiffs),
            this.zip(this.negativeIndexDiffs, this.negativeIndexDiffs),
            this.zip(new Array(8).fill(0), this.positiveIndexDiffs),
            this.zip(new Array(8).fill(0), this.negativeIndexDiffs),
            this.zip(this.positiveIndexDiffs, new Array(8).fill(0)),
            this.zip(this.negativeIndexDiffs, new Array(8).fill(0))
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

exports.Queen = Queen;