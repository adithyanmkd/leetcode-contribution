/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const n = arr.length
    const map = new Map()

    for (let num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    let luckyInt = -1

    for (let [key, val] of map) {
        if (key === val && val > luckyInt) {
            luckyInt = val
        }
    }

    return luckyInt
};