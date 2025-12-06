/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length

    if (n < 100) {
        for (let i = 0; i < k; i++) {
            let elm = nums.pop()
            nums.unshift(elm)
        }
        return
    }

    const rightSubArr = nums.slice(n - k, n)
    const leftSubArr = nums.slice(0, n - k)
    const result = [...rightSubArr, ...leftSubArr]

    for (let i = 0; i < n; i++) {
        nums[i] = result[i]
    }
};