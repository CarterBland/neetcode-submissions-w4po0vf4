class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const n = position.length;
        const positions = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0]);

        for (const [i, car] of positions.entries()) {
            const arrivalTime = (target - car[0]) / car[1];
            
            if (stack.length === 0 || arrivalTime > stack[stack.length - 1]) {
                stack.push(arrivalTime);
            }
        }

        return stack.length;
    }
}
