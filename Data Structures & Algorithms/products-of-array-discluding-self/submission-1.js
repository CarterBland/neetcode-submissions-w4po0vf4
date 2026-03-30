class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProducts = [];
        let suffixProducts = [];
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            let preCurr = 1;
            let sufCurr = 1;
            
            if (i > 0) {
                preCurr = prefixProducts[i - 1] * nums[i - 1];
                sufCurr = suffixProducts[i - 1] * nums[nums.length - i];
            }

            prefixProducts.push(preCurr);
            suffixProducts.push(sufCurr);
        }
        
        suffixProducts.reverse();

        for (let i = 0; i < nums.length; i++) {
            result.push(prefixProducts[i] * suffixProducts[i]);
        }

        return result;
    }
}
