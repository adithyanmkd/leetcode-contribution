/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    const nums = String(num).split('')

    let count = 0
    for (let dNum of nums) {
        if (num % Number(dNum) === 0) count++
    }

    return count
};