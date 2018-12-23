const assert = require('assert');
const { Bishop } = require('../../src/piece/bishop.js');

describe('Bishop', function () {
    describe('validPossibleMoves', function () {
        it('should return empty array of moves for postion is out of board', function () {
            let pawn = new Bishop([-11, -11]);
            let actualOutput = pawn.validPossibleMoves();
            assert.deepEqual(actualOutput, []);
        })

        it('should return all possible valid moves for input [0,1]', function () {
            let pawn = new Bishop([0, 1]);
            let actualOutput = pawn.validPossibleMoves();
            let expectedOutPut = [[1, 0],
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 5],
            [5, 6],
            [6, 7]];
            assert.deepEqual(actualOutput, expectedOutPut);
        })
    });
});
