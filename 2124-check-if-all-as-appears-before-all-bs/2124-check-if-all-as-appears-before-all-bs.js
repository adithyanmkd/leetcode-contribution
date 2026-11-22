/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    const sorted = [...s].sort().join('')
    return s === sorted
};