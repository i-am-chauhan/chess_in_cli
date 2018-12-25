const assert = require("assert");
const { Rook } = require("../../src/piece/rook.js");

describe("Rook", function() {
  describe("validPossibleMoves", function() {
    it("should return empty array of moves for postion is out of board", function() {
      let rook = new Rook([-5, -11]);
      let actualOutput = rook.validPossibleMoves();
      let expectedOutput = {
        validUpSideMoves: [],
        validLeftSideMoves: [],
        validDownSideMoves: [],
        validRightSideMoves: []
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return all valid moves that are present for input [0,1]", function() {
      let rook = new Rook([0, 1]);
      let actualOutput = rook.validPossibleMoves();
      let expectedOutput = {
        validUpSideMoves: [[0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
        validLeftSideMoves: [],
        validDownSideMoves: [[0, 0]],
        validRightSideMoves: [
          [1, 1],
          [2, 1],
          [3, 1],
          [4, 1],
          [5, 1],
          [6, 1],
          [7, 1] ]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
