/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const n = s.length
    const result = []

    let build = ''
    for (let i = 0; i < n; i++) {
        let pos = Number(s[i])

        if (!isNaN(pos) && s[i] !== " ") {
            result[pos - 1] = build.trim()
            build = ""
            continue
        }

        build += s[i]
    }

    return result.join(' ')
};