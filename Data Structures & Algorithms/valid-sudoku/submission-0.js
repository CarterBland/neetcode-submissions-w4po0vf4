class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const subBoxes = Array.from({length: 3}, () => Array.from({length: 3}, () => new Map()));

        for (let i = 0; i < 9; i++) {
            const rowMap = new Map();
            const columnMap = new Map();

            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.') {
                    let currentBox = subBoxes[Math.floor(i / 3)][Math.floor(j / 3)]
                    
                    if (rowMap.has(board[i][j]) || currentBox.has(board[i][j])) {
                        return false;
                    }

                    rowMap.set(board[i][j], true)
                    currentBox.set(board[i][j], true)
                }

                if (board[j][i] !== '.') {
                    if (columnMap.has(board[j][i])) {
                        return false;
                    }
                    columnMap.set(board[j][i], true)
                }
            }
        }

        return true;
    }
}
