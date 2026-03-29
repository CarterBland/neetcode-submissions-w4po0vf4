class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const arr = Array.from({ length: nums.length + 1 }, () => []);
        const result = [];

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const [key, value] of map.entries()) {
            arr[value].push(key);
        }

        for (let i = arr.length - 1; i >= 0 && result.length < k; i--) {
            for (const num of arr[i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
