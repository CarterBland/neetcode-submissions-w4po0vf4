class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const length = height.length;

        let area = 0;
        const leftMaxHeights = [];
        const rightMaxHeights = new Array(length).fill(0);

        for (let i = 0; i < length; i++) {
            const leftCurrentMax = i !== 0 ? leftMaxHeights[i-1] : 0;
            const rightCurrentMax = i !== 0 ? rightMaxHeights[length-i] : 0;
            
            leftMaxHeights.push(Math.max(leftCurrentMax, height[i]));
            rightMaxHeights[length-1-i] = Math.max(rightCurrentMax, height[length - 1 - i]);
        }

        for (const [index, curr] of height.entries()) {
            area += Math.min(leftMaxHeights[index], rightMaxHeights[index]) - curr;
        }

        return area;
    }
}
