/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let common = 0, min = Math.min(a, b)

    while (min >= 0) {
        let isCommon = a % min === 0 && b % min === 0
        if (isCommon) common++
        min--
    }

    return common
};