/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isAlphabet = (char) => {
        return /^[A-Za-z0-9]$/.test(char)
    }

    let build = ''
    for (let char of s) {
        if (isAlphabet(char)) {
            build += char.toLowerCase()
        }
    }

    const n = build.length
    let right = n - 1
    for (let left = 0; left < n; left++) {
        if (build[left] !== build[right]) {
            return false
        }

        right--
    }
    
    return true
};