/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b)
    const pairsSum = []
    let left = 0
    let right = nums.length - 1


    while (left <= right) {
        pairsSum.push(sorted[left] + sorted[right])
        left++
        right--
    }

    return Math.max(...pairsSum)
};