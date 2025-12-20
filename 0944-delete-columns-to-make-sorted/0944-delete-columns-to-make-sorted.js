/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const n = strs.length
    const wordLen = strs[0].length
    const colArr = []
    let prev = null // store previews char code
    let delCol = 0

    if (wordLen === 1) {
        for (let char of strs) {
            const curr = char.charCodeAt(0)

            if (!prev) {
                prev = curr
                continue
            }

            if (curr < prev) {
                return 1 
            }
        }

        return 0
    }
   
    for (let i = 0; i < wordLen; i++) {
        for (let j = 0; j < n; j++) {
            const curr = strs[j].charCodeAt(i)

            if (!prev) {
                prev = curr
                continue
            }

            if (curr < prev) {
                delCol++
                break
            }

            prev = curr
        }

        prev = null
    }

    return delCol
};