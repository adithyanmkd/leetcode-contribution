/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if (n === 1) return [0]

    const res = []
    
    if (n % 2 === 1) res.push(0) // if n is odd

    for (let i = 1; i <= n / 2; i++) {
        res.push(i)
        res.push(-i)
    }

    return res
};