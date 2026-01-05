/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = []
    let [left, right] = [0, matrix[0].length]
    let [top, bottom] = [0, matrix.length]

    while (left < right && top < bottom) {
        // top to right traverse
        for (let i = left; i < right; i++) {
            result.push(matrix[top][i])
        }

        top++

        // top to bottom traverse
        for (let i = top; i < bottom; i++) {
            result.push(matrix[i][right - 1])
        }

        right--

        if (!(left < right && top < bottom)) break

        // right to bottom traverse
        for (let i = right - 1; i >= left; i--) {
            result.push(matrix[bottom - 1][i])
        }

        bottom--

        // bottom to top traverse
        for (let i = bottom - 1; i >= top; i--) {
            result.push(matrix[i][left])
        }

        left++
    }

    return result
};