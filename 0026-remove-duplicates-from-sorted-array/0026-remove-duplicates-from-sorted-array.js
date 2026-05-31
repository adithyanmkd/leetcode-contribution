/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length
    const removed = [...new Set(nums)]

    for (let i = 0; i < removed.length; i++) {
        nums[i] = removed[i]
    }

    let shouldRemove = nums.length - removed.length
    for (let i = 0; i < shouldRemove; i++) {
        nums.pop()
    }
};