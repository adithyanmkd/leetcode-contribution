/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length
    let prev = nums[0]
    let insertPos = 1

    for (let i = 1; i < n; i++) {
        if (prev !== nums[i]) {
            prev = nums[i]
            nums[insertPos] = nums[i]
            insertPos++
        }
    }

    return insertPos
};