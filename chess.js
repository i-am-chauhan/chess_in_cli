const { formatBoard } = require('./src/board.js');
const readline = require('readline-sync').question;
const chalk = require('chalk');
const {
    playGame,
    createInitialBoard
} = require('./src/lib.js');

const column = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
}

const parseInput = function (position, userMove) {
    const currentPosition = [position[1] - 1, column[position[0]]];
    const move = [userMove[1] - 1, column[userMove[0]]];
    return { currentPosition, move };
}

const kingIsThere = function(king, board){
    return board.some(row => row.includes(king));
}

const main = function () {
    let board = createInitialBoard();
    let team = ["first", "second"];
    let king = ["K", "k"];
    let count = 0;
    console.log(formatBoard(board));
    while (kingIsThere(king[count%2], board)) {
        let piecePosition = readline("select the piece: ");
        let userMove = readline("choose your move: ");
        let { currentPosition, move } = parseInput(piecePosition, userMove);
        let details = playGame(currentPosition, move, board, team[count % 2]);
        board = details["board"];
        console.clear();
        console.log(formatBoard(board));
        count++;
        if (details["message"]) {
            console.log(chalk.red(details["message"]));
            count--;
        }
    }
    console.log(team[(count-1)%2] + " team has won");
}

main();
