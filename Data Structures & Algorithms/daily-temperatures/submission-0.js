class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = new Array(temperatures.length).fill(0);

        for (const [i, temp] of temperatures.entries()) {
            while (stack.length > 0 && temperatures[stack[stack.length-1]] < temp) {
                result[stack[stack.length-1]] = i - stack[stack.length-1];
                stack.pop();
            }
            stack.push(i);
        }

        return result;
    }
}
