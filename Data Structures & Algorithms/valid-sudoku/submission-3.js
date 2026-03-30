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
