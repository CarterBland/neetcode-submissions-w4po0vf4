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
        const map = new Map();

        for (const char of str) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        return [...map.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([char, count]) => `${char}${count}`)
        .join('');
    }

    equivalentMaps(map1, map2) {
        if (map1.size === map2.size) {
            for (const key of map1.keys()) {
                if (map1.get(key) !== map2.get(key)) {
                    return false
                }
            }
            return true;
        }
        return false;
    }
}
