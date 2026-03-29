class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        } 
        
        const sCharMap = this.charMap(s);
        const tCharMap = this.charMap(t);

        for (const key of sCharMap.keys()) {
            if (sCharMap.get(key) !== tCharMap.get(key)) {
                return false;
            }
        }

        return true;
    }

    charMap(str) {
        const map = new Map();

        for (let i = 0; i < str.length; i++) {
            if (map.has(str[i])) {
                map.set(str[i], map.get(str[i]) + 1)
            } else {
                map.set(str[i], 1)
            }
        }

        return map;
    }
}
