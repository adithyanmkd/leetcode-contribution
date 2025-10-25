/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    // hard code
    if (dividend === -2147483648 && divisor === -1) return 2147483647

    const result = dividend / divisor

    if (result > 0) {
        return Math.floor(result)
    } else {
        return Math.ceil(result)
    }
};