class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs) {
            const key = this.frequencyKey(str);

            if (map.has(key)) {
                map.set(key, [...map.get(key), str]);

            } else {
                map.set(key, [str]);
            }
        }

        return [...map.values()];
    }

    frequencyKey(str) {
        const arr = new Array(26).fill(0);
        
        for (const char of str) {
            const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            arr[index]++;
        }

        return arr.join("#");
    }
}
