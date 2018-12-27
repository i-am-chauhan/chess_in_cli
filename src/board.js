const Table = require('cli-table');
const chalk = require('chalk');

const symbols = {
    "r": '♖',
    "h": "♘",
    "b": "♗",
    "k": '♔',
    "q": '♕',
    "p": '♙',
    "R": '♜',
    "H": '♞',
    "B": '♝',
    "Q": '♛',
    "K": '♚',
    "P": '♟',
    " ": ""
}

const replaceWithSymbols = function (table, count, list) {
    count++;
    table.push(list.map(elements =>
        symbols[elements]).concat(chalk.blue(count))
    );
    return count;
}

const formatBoard = function (board) {
    const table = new Table({
        head: ["a", "b", "c", "d", "e", "f", "g", "h"],
        colWidths: new Array(8).fill(4)
    })
    const tableChanger = replaceWithSymbols.bind(null, table);
    board.reduce(tableChanger, 0);
    return table.toString();
}

exports.formatBoard = formatBoard;