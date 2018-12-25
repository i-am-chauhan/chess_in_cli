const { zip } = require("../util.js");

class Bishop {
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
    return { upRightDiffs, upLeftDiffs, bottomRightDiffs, bottomLeftDiffs };
  }

  placeMove(diff) {
    return [this.position[0] + diff[0], this.position[1] + diff[1]];
  }

  allPossibleMoves() {
    const allMoveDiffs = this.allPositionDiffs();
    const upRightMoves = allMoveDiffs.upRightDiffs.map(this.placeMove, this);
    const upLeftMoves = allMoveDiffs.upLeftDiffs.map(this.placeMove, this);
    const bottomRightMoves = allMoveDiffs.bottomRightDiffs.map(
      this.placeMove,
      this
    );
    const bottomLeftMoves = allMoveDiffs.bottomLeftDiffs.map(
      this.placeMove,
      this
    );
    return { upRightMoves, upLeftMoves, bottomRightMoves, bottomLeftMoves };
  }

  filterMoves(move) {
    return move.every(index => index >= 0 && index < 8);
  }

  validPossibleMoves() {
    const possibleMoves = this.allPossibleMoves();
    const validUpRightMoves = possibleMoves.upRightMoves.filter(
      this.filterMoves
    );
    const validUpLeftMoves = possibleMoves.upLeftMoves.filter(this.filterMoves);
    const validBottomRightMoves = possibleMoves.bottomRightMoves.filter(
      this.filterMoves
    );
    const validBottomLeftMoves = possibleMoves.bottomLeftMoves.filter(
      this.filterMoves
    );
    return {
      validUpRightMoves,
      validUpLeftMoves,
      validBottomRightMoves,
      validBottomLeftMoves
    };
  }
}

exports.Bishop = Bishop;
