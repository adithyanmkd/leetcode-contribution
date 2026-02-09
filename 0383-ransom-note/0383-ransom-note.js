/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let magazineMap = new Map()
    let rMap = new Map()

    for (let char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1)
    }

    for (let char of ransomNote) {
        rMap.set(char, (rMap.get(char) || 0) + 1)
    }


    for (let [key, val] of rMap) {
        if (!magazineMap.has(key) || magazineMap.get(key) < val) {
            return false
        }
    }

    return true
};