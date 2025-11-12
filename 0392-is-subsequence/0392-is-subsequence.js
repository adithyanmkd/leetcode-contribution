/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const n = t.length
    let build = ''
    let pos = 0

    for (let char of t) {
        if (s.includes(char)) {
            if (s[pos] === char) {
                build += char
                pos++
            }
        }
    }

    console.log(build, s)
    return build === s
};