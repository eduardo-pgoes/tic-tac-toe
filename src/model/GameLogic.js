/* 
* @classdesc Class representing TicTacToe game logic. 
*/
class GameLogic {
    constructor(gameState = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]]) {
        this.gameState = gameState;
        this.winner = undefined
    }
    
    /* Verifies all the possible ways to win in TicTacToe. */
    verifyGameStateVictory(gameState) {
        // Goes through each way to win; if there's no victory, return undefined.
        let mainDiagonal = this.#verifyMainDiagonal(this.gameState);
        if (mainDiagonal) return mainDiagonal;

        let antiDiagonal = this.#verifyAntiDiagonal(this.gameState);
        if (antiDiagonal) return antiDiagonal;

        let lines = this.#verifyLines(this.gameState);
        if (lines) return lines;

        let columns = this.#verifyColumns(this.gameState);
        if (columns) return columns;

        return undefined;
    }

    /* Sets the game's state. */
    setGameState(gameState) {
        this.gameState = gameState;
    }

    /* Adds a piece to the board - if it's a valid one. */
    addPiece(piece, row, column) {
        if (piece === 'O' || piece === 'X') this.gameState[row][column] = piece;
    }

    /* Verifies a victory in the main diagonal. */
    #verifyMainDiagonal(gameState) {
        if ((gameState[0][0] === gameState[1][1]) && (gameState[1][1] === gameState[2][2])) {
            return gameState[0][0];
        }
        return undefined;
    }

    /* Verifies a victory in the anti diagonal. */
    #verifyAntiDiagonal(gameState) {
        if ((gameState[0][2] === gameState[1][1]) && (gameState[1][1] === gameState[2][0])) {
            return gameState[0][2] !== '' ? gameState[0][2] : undefined;
        }
        return undefined;
    }

    /* Verifies a victory through lines */
    #verifyLines(gameState) {
        for (let i = 0; i < 3; i++) {
            if ((gameState[i][0] === gameState[i][1]) && (gameState[i][1] === gameState[i][2])) {
                return gameState[i][0] !== '' ? gameState[i][0] : undefined; 
            }
        }
        return undefined;
    }

    /* Verifies a victory through columns. */
    #verifyColumns(gameState) {
        for (let i = 0; i < 3; i++) {
            if ((gameState[0][i] === gameState[1][i]) && (gameState[1][i] === gameState[2][i])) {
                return gameState[0][i] !== '' ? gameState[0][i] : undefined; 
            }
        }
        return undefined;
    }
}

export {GameLogic};