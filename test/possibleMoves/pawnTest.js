const assert = require("assert");
const { Pawn } = require("../../src/possibleMoves/pawn.js");

describe("Pawn", function () {
  describe("allPossibleMoves", function () {
    it("should return all possible moves for input [-2, -1]", function () {
      const pawn = new Pawn([-2, -1], "firstTeam");
      const actualOutput = pawn.allPossibleMoves();
      const expectedOutput = {
        runningPossibles: [[-1, -1]],
        killingPossibles: [[-1, 0], [-1, -2]]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return all possible moves for input [0,1]", function () {
      const pawn = new Pawn([0, 1], "secondTeam");
      const actualOutput = pawn.allPossibleMoves();
      const expectedOutput = {
        runningPossibles: [[-1, 1]],
        killingPossibles: [[-1, 0], [-1, 2]]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe("validPossibleMoves", function () {
    it("should return empty array of moves for postion is out of board", function () {
      const pawn = new Pawn([-2, -1], "firstTeam");
      const actualOutput = pawn.validPossibleMoves();
      const expectedOutput = { runningMoves: [], killingMoves: [] };
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return all valid possible moves for input [0,1]", function () {
      const pawn = new Pawn([0, 1], "firstTeam");
      const actualOutput = pawn.validPossibleMoves();
      const expectedOutput = {
        runningMoves: [[1, 1]],
        killingMoves: [[1, 2], [1, 0]]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
