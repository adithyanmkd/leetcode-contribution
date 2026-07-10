/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const n = s.length
    const charSet = new Set()
    let res = 0
    let left = 0

    for (let i = 0; i < n; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[left])
            left++
        }

        charSet.add(s[i])
        res = Math.max(res, i - left + 1)
    }

    return res
};