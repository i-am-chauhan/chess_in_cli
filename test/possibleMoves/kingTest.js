const assert = require("assert");
const { King } = require("../../src/possibleMoves/king.js");

describe("King", function() {
  describe("allPossibleMoves", function() {
    it("should return all 8 possible moves for input [0,1]", function() {
      const pawn = new King([0, 1]);
      const actualOutput = pawn.allPossibleMoves();
      const expectedOutput = [
        [-1, 0],
        [-1, 1],
        [-1, 2],
        [0, 0],
        [0, 2],
        [1, 0],
        [1, 1],
        [1, 2]
      ];
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe("validPossibleMoves", function() {
    it("should return empty array of moves for postion is out of board", function() {
      const king = new King([-2, -1]);
      const actualOutput = king.validPossibleMoves();
      assert.deepEqual(actualOutput, { allMoves: [] });
    });

    it("should return 5 valid moves that are present for input [0,1]", function() {
      const king = new King([0, 1], "firstTeam");
      const actualOutput = king.validPossibleMoves();
      const expectedOutput = {
        allMoves: [[0, 0], [0, 2], [1, 0], [1, 1], [1, 2]]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
