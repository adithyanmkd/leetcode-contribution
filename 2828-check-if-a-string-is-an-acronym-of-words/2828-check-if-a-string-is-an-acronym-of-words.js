/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    const n = words.length
    if (words.length !== s.length) return false

    for (let i = 0; i < n; i++) {
        if (words[i][0] !== s[i]) return false
    }

    return true
};