class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const binarySearch = (left, right) => {
            if (left > right) {
                return -1;
            }

            const middleIndex = Math.floor((left + right) / 2);
            const value = nums[middleIndex];

            if (value === target) {
                return middleIndex;
            } else if (value > target) {
                return binarySearch(left, middleIndex - 1)
            } else {
                return binarySearch(middleIndex + 1, right)
            }
        }

        return binarySearch(0, nums.length - 1);
    }
}
