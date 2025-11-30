/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let result = nums.reduce((acc, val) => (
        acc + val
    ), 0)

    console.log(result % k)
    return result % k
};