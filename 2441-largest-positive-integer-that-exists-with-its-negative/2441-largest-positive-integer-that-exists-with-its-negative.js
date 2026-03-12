/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let set = new Set(nums)
    let max = -Infinity

    for (let num of nums) {
        if (num > 0 && num > max && set.has(-num)) {
            max = num
        }
    }

    return max === -Infinity ? -1 : max
};