/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1
    if (n === 2) return 2

    const prefixSum = [1, 2]
    
    for (let i = 2; i < n; i++) {
        prefixSum[i] = prefixSum[i - 1] + prefixSum[i - 2]
    }

    return prefixSum.at(-1)
};