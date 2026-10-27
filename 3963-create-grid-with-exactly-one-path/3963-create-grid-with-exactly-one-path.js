/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function (m, n) {
    const grid = []

    for (let row = 0; row < m; row++) {
        let line = []

        for (let col = 0; col < n; col++) {
            if (row === m - 1) {
                line.push(".")
            } else {
                if (col === 0) {
                    line.push(".")
                } else {
                    line.push("#")
                }
            }
        }

        grid.push(line.join(""))
    }

    return grid
}

