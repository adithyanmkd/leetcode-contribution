/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const n = s.length
    const chars = []

    // Lowercase a–z: char codes 97 to 122
    // Uppercase A–Z: char codes 65 to 90
    for (let i = 0; i < n; i++) {
        const code = s[i].charCodeAt(0)
        if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90)) {
            chars.unshift(s[i])
        }
    }

    // splitted org arr
    const orgS = s.split('')
    let pos = 0

    for (let i = 0; i < n; i++) {
        const code = orgS[i].charCodeAt(0)
        const isValid = (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
        if (isValid) {
            orgS[i] = chars[pos]
            pos++
        }
    }

    console.log(orgS)
    return orgS.join('')
};