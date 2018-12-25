const { zip } = require("../util.js");

class Rook {
  constructor(position) {
    this.position = position;
    this.positiveIndexDiffs = [1, 2, 3, 4, 5, 6, 7];
    this.negativeIndexDiffs = [-1, -2, -3, -4, -5, -6, -7];
  }

  allPositionDiffs() {
    const upSideDiffs = zip(new Array(8).fill(0), this.positiveIndexDiffs);
    const downSideDiffs = zip(new Array(8).fill(0), this.negativeIndexDiffs);
    const rightSideDiffs = zip(this.positiveIndexDiffs, new Array(8).fill(0));
    const leftSideDiffs = zip(this.negativeIndexDiffs, new Array(8).fill(0));
    return {
      upSideDiffs,
      leftSideDiffs,
      downSideDiffs,
      rightSideDiffs
    };
  }

  placeMove(diff) {
    return [this.position[0] + diff[0], this.position[1] + diff[1]];
  }

  allPossibleMoves() {
    const {
      upSideDiffs,
      leftSideDiffs,
      downSideDiffs,
      rightSideDiffs
    } = this.allPositionDiffs();
    const upSideMoves = upSideDiffs.map(this.placeMove, this);
    const leftSideMoves = leftSideDiffs.map(this.placeMove, this);
    const downSideMoves = downSideDiffs.map(this.placeMove, this);
    const rightSideMoves = rightSideDiffs.map(this.placeMove, this);
    return {
      upSideMoves,
      leftSideMoves,
      downSideMoves,
      rightSideMoves
    };
  }

  filterMoves(move) {
    return move.every(index => index >= 0 && index < 8);
  }

  validPossibleMoves() {
    const {
      upSideMoves,
      leftSideMoves,
      downSideMoves,
      rightSideMoves
    } = this.allPossibleMoves();
    const validUpSideMoves = upSideMoves.filter(this.filterMoves);
    const validLeftSideMoves = leftSideMoves.filter(this.filterMoves);
    const validDownSideMoves = downSideMoves.filter(this.filterMoves);
    const validRightSideMoves = rightSideMoves.filter(this.filterMoves);
    return {
      validUpSideMoves,
      validLeftSideMoves,
      validDownSideMoves,
      validRightSideMoves
    };
  }
}

exports.Rook = Rook;
