/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let number = String(n).split('')
    let result = 0
    let isAdd = true

    for (let num of number) {
        if (isAdd) {
            result += Number(num)
            isAdd = false
        } else {
            result -= Number(num)
            isAdd = true
        }
    }

    return result
};