/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
    const n = nums.length
    const freq = new Map()

    for (let i = 0; i <= n - k; i++) {
        const seen = new Set()

        for (let j = i; j < i + k; j++) {
            seen.add(nums[j])
        }

        for (let num of seen) {
            freq.set(num, (freq.get(num) || 0) + 1)
        }
    }

    let largest = -1 

    for (let [key, count] of freq) {
        if (count === 1) {
            largest = Math.max(largest, key)
        }
    }

    return largest
};