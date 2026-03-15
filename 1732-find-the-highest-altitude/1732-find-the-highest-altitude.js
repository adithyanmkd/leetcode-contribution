/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const n = gain.length
    const prefixSum = []
    prefixSum[0] = gain[0]

    for (let i = 1; i < n; i++) {
     prefixSum[i] = prefixSum[i - 1] + gain[i]   
    }

    const res = Math.max(...prefixSum)
    return res > 0 ? res : 0
};