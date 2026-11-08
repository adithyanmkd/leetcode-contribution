/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    const n = grid.length
    const colLen = grid[0].length
    let rowCount = []
    let colCount = []

    for (let row = 0; row < n; row++) {
        let rCount = 0

        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === 1) {
                rCount++
            }
        }

        rowCount.push(rCount)
    }

    for (let col = 0; col < colLen; col++) {
        // [0, 0], [0, 1]
        // [1, 0], [1, 1]
        // [2, 0], [2, 1]

        let cCount = 0

        for (let row = 0; row < n; row++) {
            if (grid[row][col] === 1) {
                cCount++
            }
        }

        colCount.push(cCount)
    }

    let res = 0

    for (let row = 0; row < n; row++) {
        for (let col = 0; col < colLen; col++) {

            if (grid[row][col] === 1) {
                if (rowCount[row] > 1) {
                    res += 1
                } else if (colCount[col] > 1) {
                    res += 1
                }
            }
        }
    }

    return res
};
