/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    const n = mat.length
    const pDiagonal = [] // primary diagonal
    const sDiagonal = [] // secondary diagona

    let posX = 0
    let posY = mat[0].length - 1
    for (let i = 0; i < n; i++) {
        pDiagonal.push(mat[i][posX])

        if (i === posX && i === posY) {
            posX++
            posY--
            continue
        }

        sDiagonal.push(mat[i][posY])
        posX++
        posY--
    }

    const sum = [...pDiagonal, ...sDiagonal].reduce((acc, val) => acc + val)
    return sum
};