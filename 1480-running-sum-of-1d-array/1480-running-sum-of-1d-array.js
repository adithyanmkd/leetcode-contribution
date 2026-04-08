/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const n = nums.length
    const prefixArr = []

    prefixArr.push(nums[0])
    for (let i = 1; i < n; i++) {
        prefixArr.push(nums[i] + prefixArr[i - 1])
    }

    return prefixArr
};