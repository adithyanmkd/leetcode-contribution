/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    const mirror = String(n).split('').reverse().join('')
    const res = Math.abs(Number(mirror) - n) 
    return res
};