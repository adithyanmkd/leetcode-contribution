/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const arr = new Array(n).fill(null).map((_, index) => index + 1)

    let leftSum = 0
    let rightSum = 0

    arr.forEach((val) => rightSum += val)
    for (let i = 0; i < n; i++) {
        const curr = arr[i]
        rightSum -= curr

        if (leftSum === rightSum) {
            return arr[i]
        }

        leftSum += curr
    }

    return -1
};