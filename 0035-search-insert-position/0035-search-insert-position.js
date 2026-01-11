/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const n = nums.length
    let left = 0
    let right = n - 1
    let result = null

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        }

        if (target > nums[mid]) {
            result = mid + 1
            left = mid + 1
        }

        if (target < nums[mid]) {
            result = mid
            right = mid - 1
        }
    }

    return result
};