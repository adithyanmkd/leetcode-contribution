/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (goal.length !== s.length) return false

    let splitted = s.split('')
    let n = splitted.length

    for (let i = 0; i < n; i++) {
        let shiftedChar = splitted.shift()
        splitted.push(shiftedChar)

        let convertedIntoStr = splitted.join('')
        if (convertedIntoStr === goal) {
            return true
        }
    }

    return false
};