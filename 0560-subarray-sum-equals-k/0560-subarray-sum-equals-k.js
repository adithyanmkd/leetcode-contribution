/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const n = nums.length
    let count = 0
    
    for (let i = 0; i < n; i++) {
        let currSum = 0

        for (let j = i; j < n; j++) {
            currSum += nums[j]

            if (currSum === k) {
                count++
            }
        }
    }

    return count
};