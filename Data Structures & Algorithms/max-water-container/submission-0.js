class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let best = Math.min(heights[l], heights[r]) * (r - l);

        while (l < r) {
            const currentArea = Math.min(heights[l], heights[r]) * (r - l);

            if (currentArea > best) {
                best = currentArea;
            }

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return best;
    }
}
