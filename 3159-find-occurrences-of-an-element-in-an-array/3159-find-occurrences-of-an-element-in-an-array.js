/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function(nums, queries, x) {
    const n = nums.length
    const map = new Map()
    let occ = 1

    for (let i = 0; i < n; i++) {
        if (nums[i] === x) {
            map.set(occ, i)
            occ++
        }
    }

    let res = []

    for (let query of queries) {
        if (map.has(query)) {
            res.push(map.get(query))
        } else {
            res.push(-1)
        }
    }

    return res
};