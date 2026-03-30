class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const bucket = Array.from({length: nums.length + 1}, () => []);
        const result = [];

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        
        for (const [num, frequency] of map.entries()) {
            bucket[frequency].push(num);
        }

        for (let i = 0; i < nums.length; i++) {
            for (const num of bucket[nums.length - i]) {
                result.push(num);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
