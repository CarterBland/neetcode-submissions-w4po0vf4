class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);

        const results = [];
        for (let i = 0; i < sortedNums.length - 2; i++) {
            const num = sortedNums[i];

            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
            
            let l = i + 1;
            let r = sortedNums.length - 1;

            while (l < r) {
                const sum = num + sortedNums[l] + sortedNums[r];

                if (sum === 0) {
                    results.push([num, sortedNums[l], sortedNums[r]]);

                    l++;
                    r--;


                    while (l < r && sortedNums[l] === sortedNums[l - 1]) l++;
                    while (l < r && sortedNums[r] === sortedNums[r + 1]) r--;
                } else if (sum < 0) {
                    l++;
                } else {
                    r--;
                }
            }
        }

        return results;
    }
}
