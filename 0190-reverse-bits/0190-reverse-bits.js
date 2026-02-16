/**
 * @param {number} n
 * @return {number}
*/
var reverseBits = function(n) {
    let res = 0

    for (let i = 1; i <= 32; i++) {
        const bit = (n >> i) & 1
        res |= (bit << (31 - i))
    }

    console.log(res)
    return res
};