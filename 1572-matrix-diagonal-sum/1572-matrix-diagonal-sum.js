/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length
    let sum = 0, posX = 0, posY = mat[0].length - 1

    for (let i = 0; i < n; i++) {
        sum += mat[i][posX]

        if (i === posX && i === posY) {
            posX++
            posY--
            continue
        }

        sum += mat[i][posY]
        posX++
        posY--
    }

    return sum
};