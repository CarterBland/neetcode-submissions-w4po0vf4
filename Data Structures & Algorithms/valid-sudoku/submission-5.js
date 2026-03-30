class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowSets = Array.from({length: 9}, () => new Set());
        const columnSets = Array.from({length: 9}, () => new Set());
        const boxSets = Array.from({length: 3}, () => Array.from({length: 3}, () => new Set()));

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = board[i][j];
                
                if (cell !== '.') {
                    const box = boxSets[Math.floor(i / 3)][Math.floor(j / 3)];

                    if (rowSets[i].has(cell) || columnSets[j].has(cell) || box.has(cell)) {
                        return false;
                    } 

                    box.add(cell);
                    rowSets[i].add(cell);
                    columnSets[j].add(cell);
                }
            }
        }

        return true;
    }
}
