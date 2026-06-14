/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let complement = ""

    while (num > 0) {
        // building binary num
        // after changed 0 into 1 and 1 into 0
        complement = (num % 2) === 1 ? 0 + complement : 1 + complement
        num = Math.floor(num / 2)
    }

    return parseInt(complement, 2)
};