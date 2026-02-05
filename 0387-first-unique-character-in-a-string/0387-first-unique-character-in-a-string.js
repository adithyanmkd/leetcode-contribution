/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const n = s.length
    const visited = new Set()

    for (let i = 0; i < n; i++) {
        if (i === s.lastIndexOf(s[i]) && !visited.has(s[i])) {
            return i
        }

        visited.add(s[i])
    }

    return -1
};