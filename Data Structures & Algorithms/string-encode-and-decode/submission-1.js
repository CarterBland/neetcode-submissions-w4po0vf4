class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";

        for (const str of strs) {
            encodedString += `${str.length}#${str}`;
        }

        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {
            // 1. find the '#'
            let j = i;
            while (s[j] !== '#') {
                j++;
            }

            // 2. parse length
            const length = parseInt(s.slice(i, j));

            // 3. extract the string
            const str = s.slice(j + 1, j + 1 + length);
            result.push(str);

            // 4. move pointer forward
            i = j + 1 + length;
        }

        return result;
    }
}
