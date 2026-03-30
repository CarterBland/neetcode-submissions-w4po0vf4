class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const brackets = new Map([
            ['(', ')'],
            ['{', '}'],
            ['[', ']'],
        ]);
        const stack = [];

        for (let char of s) {
            if (brackets.has(char)) {
                stack.push(char);    
                continue;
            } else if (stack.length !== 0) {
                const lastBracket = stack.pop();
                if (char !== brackets.get(lastBracket)) {
                    return false;
                }
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
