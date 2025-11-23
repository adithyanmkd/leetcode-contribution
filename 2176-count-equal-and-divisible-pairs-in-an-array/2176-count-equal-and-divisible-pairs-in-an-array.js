/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    const n = nums.length
    let pair = 0

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const isDivisible = (i * j) % k === 0

            if (nums[i] === nums[j] && isDivisible) {
                pair++
            }
        }
    }

    console.log(pair)
    return pair
};