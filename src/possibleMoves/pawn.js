class Pawn {
  constructor(position, team) {
    this.position = position;
    this.team = team;
    this.difference = {};
    this.difference.firstTeam = [[0, 1], [1, 1], [-1, 1]];
    this.difference.secondTeam = [[0, -1], [-1, -1], [1, -1]];
  }

  placeMove(diff) {
    return [this.position[0] + diff[0], this.position[1] + diff[1]];
  }

  allPossibleMoves() {
    const diffs = this.difference[this.team];
    const runningPossibles = diffs.slice(0, 1).map(this.placeMove, this);
    const killingPossibles = diffs.slice(1).map(this.placeMove, this);
    return { runningPossibles, killingPossibles };
  }

  filterMoves(move) {
    return move.every(index => index >= 0 && index < 8);
  }

  validPossibleMoves() {
    const { runningPossibles, killingPossibles } = this.allPossibleMoves();
    const runningMoves = runningPossibles.filter(this.filterMoves);
    const killingMoves = killingPossibles.filter(this.filterMoves);
    return { runningMoves, killingMoves };
  }
}

exports.Pawn = Pawn;
