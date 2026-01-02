/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const n = numbers.length
    const map = new Map()

    for (let i = 0; i < n; i++) {
        map.set(numbers[i], i)
    }

    for (let i = 0; i < n; i++) {
        const curr = numbers[i]
        const bal = target - curr

        if (map.has(bal)) {
            return [i + 1, map.get(bal) + 1]
        }
    }
};