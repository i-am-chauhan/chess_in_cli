const assert = require('assert');
const { King } = require('../../src/piece/king.js');

describe('King', function () {
    describe('allPossibleMoves', function () {
        it('should return all 8 possible moves for input [0,1]', function () {
            let pawn = new King([0, 1]);
            let actualOutput = pawn.allPossibleMoves();
            let expectedOutput = [[-1, 0],
            [-1, 1],
            [-1, 2],
            [0, 0],
            [0, 2],
            [1, 0],
            [1, 1],
            [1, 2]];
            assert.deepEqual(actualOutput, expectedOutput);
        })
    });

    describe('validPossibleMoves', function () {
        it('should return empty array of moves for postion is out of board', function () {
            let pawn = new King([-2, -1]);
            let actualOutput = pawn.validPossibleMoves();
            assert.deepEqual(actualOutput, []);
        })

        it('should return 5 valid moves that are present for input [0,1]', function () {
            let pawn = new King([0, 1], "firstTeam");
            let actualOutput = pawn.validPossibleMoves();
            let expectedOutput = [[0, 0], [0, 2], [1, 0], [1, 1], [1, 2]];
            assert.deepEqual(actualOutput, expectedOutput);
        })
    });
});
