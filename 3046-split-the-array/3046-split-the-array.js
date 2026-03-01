/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    const nums1 = [], nums2 = []
    const n = nums.length

    nums.sort()

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) nums1.push(nums[i])
        else nums2.push(nums[i])
    }

    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const ansN = nums.length / 2

    const result = ansN === set1.size && ansN === set2.size
    return result
};