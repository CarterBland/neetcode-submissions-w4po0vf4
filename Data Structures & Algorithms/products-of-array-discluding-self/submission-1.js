class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftProducts = [];
        let rightProducts = [];
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let leftProduct = i === 0 ? 1 : leftProducts[i-1] * nums[i - 1];
            let rightProduct = i === 0 ? 1 : rightProducts[i-1] * nums[nums.length - i];
            
            leftProducts.push(leftProduct);
            rightProducts.push(rightProduct);
        }

        rightProducts.reverse();

        for (let i = 0; i < nums.length; i++) {
            result.push(leftProducts[i] * rightProducts[i]);
        }

        return result;
    }
}
