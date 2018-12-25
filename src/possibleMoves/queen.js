const { zip } = require("../util.js");

class Queen {
  constructor(position) {
    this.position = position;
    this.positiveIndexDiffs = [1, 2, 3, 4, 5, 6, 7];
    this.negativeIndexDiffs = [-1, -2, -3, -4, -5, -6, -7];
  }

  allPositionDiffs() {
    const upRightDiffs = zip(this.positiveIndexDiffs, this.positiveIndexDiffs);
    const upLeftDiffs = zip(this.negativeIndexDiffs, this.positiveIndexDiffs);
    const bottomRightDiffs = zip(
      this.positiveIndexDiffs,
      this.negativeIndexDiffs
    );
    const bottomLeftDiffs = zip(
      this.negativeIndexDiffs,
      this.negativeIndexDiffs
    );
    const upSideDiffs = zip(new Array(8).fill(0), this.positiveIndexDiffs);
    const downSideDiffs = zip(new Array(8).fill(0), this.negativeIndexDiffs);
    const rightSideDiffs = zip(this.positiveIndexDiffs, new Array(8).fill(0));
    const leftSideDiffs = zip(this.negativeIndexDiffs, new Array(8).fill(0));
    return {
      upRightDiffs,
      upSideDiffs,
      upLeftDiffs,
      leftSideDiffs,
      bottomLeftDiffs,
      downSideDiffs,
      bottomRightDiffs,
      rightSideDiffs
    };
  }

  placeMove(diff) {
    return [this.position[0] + diff[0], this.position[1] + diff[1]];
  }

  allPossibleMoves() {
    const {
      upRightDiffs,
      upSideDiffs,
      upLeftDiffs,
      leftSideDiffs,
      bottomLeftDiffs,
      downSideDiffs,
      bottomRightDiffs,
      rightSideDiffs
    } = this.allPositionDiffs();
    const upRightMoves = upRightDiffs.map(this.placeMove, this);
    const upSideMoves = upSideDiffs.map(this.placeMove, this);
    const upLeftMoves = upLeftDiffs.map(this.placeMove, this);
    const leftSideMoves = leftSideDiffs.map(this.placeMove, this);
    const bottomLeftMoves = bottomLeftDiffs.map(this.placeMove, this);
    const downSideMoves = downSideDiffs.map(this.placeMove, this);
    const bottomRightMoves = bottomRightDiffs.map(this.placeMove, this);
    const rightSideMoves = rightSideDiffs.map(this.placeMove, this);
    return {
      upRightMoves,
      upSideMoves,
      upLeftMoves,
      leftSideMoves,
      bottomLeftMoves,
      downSideMoves,
      bottomRightMoves,
      rightSideMoves
    };
  }

  filterMoves(move) {
    return move.every(index => index >= 0 && index < 8);
  }

  validPossibleMoves() {
    const {
      upRightMoves,
      upSideMoves,
      upLeftMoves,
      leftSideMoves,
      bottomLeftMoves,
      downSideMoves,
      bottomRightMoves,
      rightSideMoves
    } = this.allPossibleMoves();
    const validUpRightMoves = upRightMoves.filter(this.filterMoves);
    const validUpSideMoves = upSideMoves.filter(this.filterMoves);
    const validUpLeftMoves = upLeftMoves.filter(this.filterMoves);
    const validLeftSideMoves = leftSideMoves.filter(this.filterMoves);
    const validBottomLeftMoves = bottomLeftMoves.filter(this.filterMoves);
    const validDownSideMoves = downSideMoves.filter(this.filterMoves);
    const validBottomRightMoves = bottomRightMoves.filter(this.filterMoves);
    const validRightSideMoves = rightSideMoves.filter(this.filterMoves);
    return {
      validUpRightMoves,
      validUpSideMoves,
      validUpLeftMoves,
      validLeftSideMoves,
      validBottomLeftMoves,
      validDownSideMoves,
      validBottomRightMoves,
      validRightSideMoves
    };
  }
}

exports.Queen = Queen;
