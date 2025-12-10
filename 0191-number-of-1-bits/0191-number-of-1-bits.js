/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0
    let binary = ''

    while (n > 0) {
        const bal = n % 2
        binary = bal + binary
        const divided = Math.floor(n / 2)
        n = divided

        if (bal === 1) count++
    }

    console.log(count)
    return count
};