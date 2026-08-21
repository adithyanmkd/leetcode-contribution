/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length
    let [left, right] = [0, 0]

    while (right < n) {
        let count = 1

        while (nums[right] === nums[right + 1] && right + 1 < n) {
            right++
            count++
        }

        const min = Math.min(2, count)
        for (let i = 0; i < min; i++) {
            nums[left] = nums[right]
            left++
        }

        right++
    }

    return left
};