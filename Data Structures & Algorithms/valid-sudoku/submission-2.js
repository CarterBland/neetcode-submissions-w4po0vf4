class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSets = Array.from({length: 9}, () => new Set());
        let columnSets = Array.from({length: 9}, () => new Set());
        let boxSets = Array.from({length: 9}, () => Array.from({length: 9}, () => new Set()));

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const cell = board[i][j];
                
                if (cell !== '.') {
                    let box = boxSets[Math.floor(i / 3)][Math.floor(j / 3)];

                    if (rowSets[j].has(cell) || columnSets[i].has(cell) || box.has(cell)) {
                        return false;
                    } 

                    box.add(cell);
                    rowSets[j].add(cell);
                    columnSets[i].add(cell);
                }
            }
        }

        return true;
    }
}
