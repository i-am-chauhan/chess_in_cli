const assert = require('assert');
const { Queen } = require('../../src/piece/queen.js');

describe('Queen', function () {
    describe('validPossibleMoves', function () {
        it('should return empty array of moves for postion is out of board', function () {
            let queen = new Queen([-5, -11]);
            let actualOutput = queen.validPossibleMoves();
            assert.deepEqual(actualOutput, []);
        })

        it('should return all valid moves that are present for input [0,1]', function () {
            let queen = new Queen([0, 1]);
            let actualOutput = queen.validPossibleMoves();
            let expectedOutput = [[0, 0],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 1],
            [2, 3],
            [3, 1],
            [3, 4],
            [4, 1],
            [4, 5],
            [5, 1],
            [5, 6],
            [6, 1],
            [6, 7],
            [7, 1]];
            assert.deepEqual(actualOutput, expectedOutput);
        })
    });
});
