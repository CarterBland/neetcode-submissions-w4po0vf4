class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let number = 0;

        for (let i = 0; i < digits.length; i++) {
            number += digits[i] * 10**(digits.length - i - 1)
        }

        number += 1;

        return number.toString().split("");
    }
}
