/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    const n = nums.length
    let current = 0
    const result = []

    for (let i = 0; i < n; i++) {
        current = current * 2 + nums[i]
        result[i] = current % 5 === 0
        current = current % 5
    }

    return result
};