/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const rowLength = grid.length
    const colN = grid[0].length
    let count = 0
    let looped = 0

    for (let row of grid) {
        let left = 0
        let right = colN - 1
        let firstNegative = colN // first negative index

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (row[mid] < 0) {
                firstNegative = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        count += colN - firstNegative
    }

    return count
};