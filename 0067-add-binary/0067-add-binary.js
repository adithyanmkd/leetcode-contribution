/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // BigInt('0b' + numString)
    const [num1, num2] = [BigInt("0b" + a), BigInt("0b" + b)]
    const sum = BigInt(num1) + BigInt(num2)
    return sum.toString(2)
};