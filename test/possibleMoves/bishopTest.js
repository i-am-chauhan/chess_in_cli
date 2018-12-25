const assert = require("assert");
const { Bishop } = require("../../src/possibleMoves/bishop.js");

describe("Bishop", function() {
  describe("validPossibleMoves", function() {
    it("should return empty array of moves for postion is out of board", function() {
      const bishop = new Bishop([-11, -11]);
      const actualOutput = bishop.validPossibleMoves();
      const expectedOutPut = {
        validUpRightMoves: [],
        validUpLeftMoves: [],
        validBottomRightMoves: [],
        validBottomLeftMoves: []
      };
      assert.deepEqual(actualOutput, expectedOutPut);
    });

    it("should return all possible valid moves for input [0,1]", function() {
      const bishop = new Bishop([0, 1]);
      const actualOutput = bishop.validPossibleMoves();
      const expectedOutPut = {
        validUpRightMoves: [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]],
        validUpLeftMoves: [],
        validBottomRightMoves: [[1, 0]],
        validBottomLeftMoves: []
      };
      assert.deepEqual(actualOutput, expectedOutPut);
    });
  });
});
