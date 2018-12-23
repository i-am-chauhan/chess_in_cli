const assert = require('assert');
const { Pawn } = require('../../src/piece/pawn.js');

describe('Pawn', function () {
    describe('allPossibleMoves', function () {
        it('should return [[ -2, 0 ], [ -1, 0 ], [ -3, 0 ]] for input [-2, -1]', function () {
            let pawn = new Pawn([-2, -1], "firstTeam");
            let actualOutput = pawn.allPossibleMoves();
            assert.deepEqual(actualOutput, [[ -2, 0 ], [ -1, 0 ], [ -3, 0 ]]);
        })

        it('should return [[0,2],[1,2],[-1,2]] for input [0,1]', function () {
            let pawn = new Pawn([0,1], "firstTeam");
            let actualOutput = pawn.allPossibleMoves();
            assert.deepEqual(actualOutput, [[0,2], [1,2], [-1,2]]);
        })
    });

    describe('validPossibleMoves', function () {
        it('should return empty array of moves for postion is out of board', function () {
            let pawn = new Pawn([-2, -1], "firstTeam");
            let actualOutput = pawn.validPossibleMoves();
            assert.deepEqual(actualOutput, []);
        })

        it('should return [[0,2],[1,2]] for input [0,1]', function () {
            let pawn = new Pawn([0,1], "firstTeam");
            let actualOutput = pawn.validPossibleMoves();
            assert.deepEqual(actualOutput, [[0,2], [1,2]]);
        })
    });
});
