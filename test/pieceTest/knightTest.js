const assert = require("assert");
const { Knight } = require("../../src/piece/knight.js");

describe("Knight", function() {
  describe("allPossibleMoves", function() {
    it("should return all 8 valid moves for input [0,1]", function() {
      const knight = new Knight([0, 1]);
      const actualOutput = knight.allPossibleMoves();
      const expectedOutput = [
        [-1, -1],
        [-1, 3],
        [-2, 0],
        [-2, 2],
        [1, -1],
        [1, 3],
        [2, 0],
        [2, 2]
      ];
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });

  describe("validPossibleMoves", function() {
    it("should return empty array of moves for postion is out of board", function() {
      const knight = new Knight([-5, -1]);
      const actualOutput = knight.validPossibleMoves();
      assert.deepEqual(actualOutput, []);
    });

    it("should return all valid moves that are present for input [0,1]", function() {
      const knight = new Knight([0, 1], "firstTeam");
      const actualOutput = knight.validPossibleMoves();
      const expectedOutput = [[1, 3], [2, 0], [2, 2]];
      assert.deepEqual(actualOutput, expectedOutput);
    });
  });
});
