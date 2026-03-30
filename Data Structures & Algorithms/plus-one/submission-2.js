class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        digits[digits.length-1] += 1
        
        let offset = 0;

        while(digits[digits.length - 1 - offset] > 9){
            digits[digits.length - 1 - offset] = 0
            if ((digits.length - 2 - offset) >= 0) {
                digits[digits.length - 2 - offset] += 1
            } else {
                digits.unshift(1)
            }

            offset++;
        }

        return digits;
    }
}
