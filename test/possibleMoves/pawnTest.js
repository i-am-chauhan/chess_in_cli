const assert = require("assert");
const { Pawn } = require("../../src/possibleMoves/pawn.js");

describe("Pawn", function() {
  describe("allPossibleMoves", function() {
    it("should return [[ -2, 0 ], [ -1, 0 ], [ -3, 0 ]] for input [-2, -1]", function() {
      const pawn = new Pawn([-2, -1], "firstTeam");
      const actualOutput = pawn.allPossibleMoves();
      const expectedOutput = {
        runningPossibles: [[-2, 0]],
        killingPossibles: [[-1, 0], [-3, 0]]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return [[0,2],[1,2],[-1,2]] for input [0,1]", function() {
      const pawn = new Pawn([0, 1], "secondTeam");
      const actualOutput = pawn.allPossibleMoves();
      const expectedOutput = {
        runningPossibles: [[0, 0]],
        killingPossibles: [[-1, 0], [1, 0]]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe("validPossibleMoves", function() {
    it("should return empty array of moves for postion is out of board", function() {
      const pawn = new Pawn([-2, -1], "firstTeam");
      const actualOutput = pawn.validPossibleMoves();
      const expectedOutput = { runningMoves: [], killingMoves: [] };
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return [[0,2],[1,2]] for input [0,1]", function() {
      const pawn = new Pawn([0, 1], "firstTeam");
      const actualOutput = pawn.validPossibleMoves();
      const expectedOutput = { runningMoves: [[0, 2]], killingMoves: [[1, 2]] };
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
