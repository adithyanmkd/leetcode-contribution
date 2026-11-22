/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
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