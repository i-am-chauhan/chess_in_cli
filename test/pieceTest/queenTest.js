const assert = require("assert");
const { Queen } = require("../../src/piece/queen.js");

describe("Queen", function() {
  describe("validPossibleMoves", function() {
    it("should return empty array of moves for postion is out of board", function() {
      const queen = new Queen([-5, -11]);
      const actualOutput = queen.validPossibleMoves();
      const expectedOutput = {
        validUpRightMoves: [],
        validUpSideMoves: [],
        validUpLeftMoves: [],
        validLeftSideMoves: [],
        validBottomLeftMoves: [],
        validDownSideMoves: [],
        validBottomRightMoves: [],
        validRightSideMoves: []
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });

    it("should return all valid moves that are present for input [0,1]", function() {
      const queen = new Queen([0, 1]);
      const actualOutput = queen.validPossibleMoves();
      const expectedOutput = {
        validUpRightMoves: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]],
        validUpSideMoves: [[0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]],
        validUpLeftMoves: [],
        validLeftSideMoves: [],
        validBottomLeftMoves: [],
        validDownSideMoves: [[0, 0]],
        validBottomRightMoves: [[1, 0]],
        validRightSideMoves: [
          [1, 1],
          [2, 1],
          [3, 1],
          [4, 1],
          [5, 1],
          [6, 1],
          [7, 1]
        ]
      };
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
