/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => b - a)
    const n = nums.length - 1
    let result = 0

    for (let i = 0; i < n; i += 2) {
        result += Math.min(nums[i], nums[i + 1])
    }

    return result
};