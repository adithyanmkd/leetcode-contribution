/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const freq = new Map()

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    const res = []

    for (let [key, val] of freq) {
        if (val === 1) {
            res.push(key)
        }

        if (res.length === 2) break
    }

    return res
};