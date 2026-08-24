/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArr = [...nums1, ...nums2].sort((a, b) => a - b)
    const n = mergedArr.length

    if (mergedArr.length % 2 === 1) {
        const index = Math.floor(n / 2)
        
        return mergedArr[index]
    } else {
        const firstIndex = Math.floor(n / 2) - 1
        const secondIndex = Math.floor(n / 2)
        const result = (mergedArr[firstIndex] + mergedArr[secondIndex]) / 2

        return result
    }
};