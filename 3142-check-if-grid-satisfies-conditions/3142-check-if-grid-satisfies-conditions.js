/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    const n = grid.length
    let converted = new Set()

    for (let row of grid) {
        const str = row.join('')
        let valid = true

        for (let i = 1; i < str.length; i++) {
            if (row[i] === row[i - 1]) {
                return false
            }
        }

        converted.add(str)
    }

    return converted.size === 1
};