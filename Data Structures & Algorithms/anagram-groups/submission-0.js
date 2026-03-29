class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        return strs.reduce((acc, curr) => {
            let index = acc.findIndex((element) => 
                this.equivalentMaps(this.frequencyKeys(element[0]), this.frequencyKeys(curr))
            )


            if (index !== -1) {
                acc[index].push(curr);
            } else {
                acc.push([curr]);
            }

            return acc;
        }, [])
    }

    frequencyKeys(str) {
        const map = new Map();

        for (const char of str) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        return map;
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
