/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const lastWord = s.trim().split(' ').at(-1)
    return lastWord.length
};