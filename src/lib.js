const { King } = require('./possibleMoves/king.js');
const { Queen } = require('./possibleMoves/queen.js');
const { Rook } = require('./possibleMoves/rook.js');
const { Bishop } = require('./possibleMoves/bishop.js');
const { Knight } = require('./possibleMoves/knight.js');
const { Pawn } = require('./possibleMoves/pawn.js');

const team1 = {
    "K": King,
    "Q": Queen,
    "H": Knight,
    "B": Bishop,
    "R": Rook,
    "P": Pawn
}

const team2 = {
    "k": King,
    "q": Queen,
    "h": Knight,
    "b": Bishop,
    "r": Rook,
    "p": Pawn
}

const contains = function (set, subset) {
    return set.some(element =>
        element[0] == subset[0] && element[1] == subset[1]
    );
}

const createBoard = function () {
    return new Array(8).fill([]).map(x => new Array(8).fill(" "));
}

const createInitialBoard = function () {
    let board = createBoard();
    board[0] = ["R", "H", "B", "Q", "K", "B", "H", "R"];
    board[1] = new Array(8).fill("P");
    board[6] = new Array(8).fill("p");
    board[7] = ["r", "h", "b", "k", "q", "b", "h", "r"];
    return board;
}

const slicer = function (set, subset) {
    let result = [];
    for (let index = 0; index < set.length; index++) {
        if (set[index][0] == subset[0] && set[index][1] == subset[1])
            return result;
        result.push(set[index]);
    }
}

const hasNotBarrier = function (move, allPossibleMoves, board) {
    const possibleDirections = Object.keys(allPossibleMoves);
    const directionOfMove = possibleDirections.filter(direction =>
        contains(allPossibleMoves[direction], move)
    );
    const possibleMoves = allPossibleMoves[directionOfMove[0]];
    return slicer(possibleMoves,move).every(x => board[x[0]][x[1]] == " ");
}

const isPlaceEmpty = function (move, board) {
    return board[move[0]][move[1]] == " ";
}

const hasSibling = function (team, move, board) {
    const siblings = Object.keys(team);
    return siblings.includes(board[move[0]][move[1]]);
}

const getTeam = function (symbol) {
    if (Object.keys(team1).includes(symbol))
        return { siblings: team1, team: "firstTeam" };
    return { siblings: team2, team: "secondTeam" };
}

const isMovePossible = function (allPossibleMoves, move) {
    const possibleDirections = Object.keys(allPossibleMoves);
    return possibleDirections.some(direction =>
        contains(allPossibleMoves[direction], move)
    );
}

const isMoveValid = function (symbol, currentPosition, move, board) {
    const { siblings, team } = getTeam(symbol);
    const pieceWithoutBarrier = [Knight, Pawn, King];
    const pieceType = siblings[symbol];
    const piece = new pieceType(currentPosition, team);
    const allPossibleMoves = piece.validPossibleMoves();

    const moveNotPossible = !isMovePossible(allPossibleMoves, move);
    if (moveNotPossible) return false;

    const placeOccupied = !isPlaceEmpty(move, board);
    const belongToOwnTeam = hasSibling(siblings, move, board);
    if (placeOccupied && belongToOwnTeam) return false;

    const stoppablePiece = !pieceWithoutBarrier.includes(pieceType);
    if (!stoppablePiece) return true;
    
    const isMovable = !hasNotBarrier(move, allPossibleMoves, board);
    if (isMovable) return false;
    return true;
}

const playGame = function(currentPosition, move, board, team) {
    const siblings = { first: Object.keys(team1), second: Object.keys(team2)};
    let chessBoard = board.slice();
    const symbol = board[currentPosition[0]][currentPosition[1]];

    if(!siblings[team].includes(symbol)){
        return {message: "Please! choose your piece.", board: board};
    }
    if (isMoveValid(symbol, currentPosition, move, board)) {
        chessBoard[move[0]][move[1]] = symbol;
        chessBoard[currentPosition[0]][currentPosition[1]] = " ";
        return { message: false, board: chessBoard};
    }
    return { message:"Not a valid move.", board:chessBoard };
}

module.exports = {
    playGame,
    createInitialBoard
}