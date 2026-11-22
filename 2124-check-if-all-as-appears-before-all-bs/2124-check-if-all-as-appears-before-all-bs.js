/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    // const sorted = [...s].sort().join('')
    // return s === sorted

    let flag = false

    for (let char of s) {
        if (char === "b") {
            flag = true
        }

        if (flag && char === "a") {
            return false
        }
    }

    return true
};