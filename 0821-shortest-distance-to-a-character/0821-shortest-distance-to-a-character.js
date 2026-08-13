/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const n = s.length
    const allIndexes = []
    const result = []

    for (let i = 0; i < n; i++) {
        if (s[i] === c) {
            allIndexes.push(i)
        }
    }

    for (let i = 0; i < n; i++) {
        let min = Infinity

        for (let index of allIndexes) {
            if (Math.abs(i - index) < min) {
                min = Math.abs(i - index)
            }
        }

        result[i] = min
    }

    return result
};