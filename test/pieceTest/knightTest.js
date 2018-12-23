const assert = require('assert');
const { Knight } = require('../../src/piece/knight.js');

describe('Knight', function () {
    describe('allPossibleMoves', function () {
        it('should return all 8 valid moves for input [0,1]', function () {
            let pawn = new Knight([0, 1]);
            let actualOutput = pawn.allPossibleMoves();
            let expectedOutput = [[-1, -1],
            [-1, 3],
            [-2, 0],
            [-2, 2],
            [1, -1],
            [1, 3],
            [2, 0],
            [2, 2]];
            assert.deepEqual(actualOutput, expectedOutput);
        })
    });

    describe('validPossibleMoves', function () {
        it('should return empty array of moves for postion is out of board', function () {
            let pawn = new Knight([-5, -1]);
            let actualOutput = pawn.validPossibleMoves();
            assert.deepEqual(actualOutput, []);
        })

        it('should return all valid moves that are present for input [0,1]', function () {
            let pawn = new Knight([0, 1], "firstTeam");
            let actualOutput = pawn.validPossibleMoves();
            let expectedOutput = [ [ 1, 3 ], [ 2, 0 ], [ 2, 2 ] ];
            assert.deepEqual(actualOutput, expectedOutput);
        })
    });
});
