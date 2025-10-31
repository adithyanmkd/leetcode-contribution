/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    const numbers = []
    const set = new Set()

    for (let num of nums) {
        if (set.has(num)) {
            numbers.push(num)
            continue
        }

        set.add(num)
    }

    return numbers
};