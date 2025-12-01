/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    let match = 0

    for (let word of words) {
        let wordPrefix = word.substring(0, pref.length)
        if (wordPrefix === pref) {
            match++
        }
    }

    return match
};