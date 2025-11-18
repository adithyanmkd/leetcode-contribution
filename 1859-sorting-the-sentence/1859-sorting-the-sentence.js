/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const result = []
    const words = s.split(" ")

    for (let word of words) {
        let pos = word[word.length - 1]
        result[pos - 1] = word.slice(0, word.length - 1)
    }

    return result.join(' ')
};