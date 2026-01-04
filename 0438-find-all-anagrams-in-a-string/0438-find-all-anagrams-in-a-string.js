/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const n = p.length
    const sLen = s.length
    const map = new Map()   
    let key = new Array(26).fill(0)
    
    for (let i = 0; i < n; i++) {
        let index = p.charCodeAt(i) - 97 // 97 is 'a' charCode
        key[index]++
    }

    key = key.join('#')
    const result = []

    for (let i = 0; i <= sLen - n; i++) {
        const window = s.substring(i, n + i)
        let currKey = new Array(26).fill(0)

        for (let i = 0; i < window.length; i++) {
            const index = window.charCodeAt(i) - 97
            currKey[index]++
        }

        currKey = currKey.join("#")

        if (currKey === key) {
            result.push(i)
        }
    }

    return result
};