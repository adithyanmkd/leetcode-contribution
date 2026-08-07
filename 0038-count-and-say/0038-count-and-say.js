/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let current = "1"

    for (let i = 1; i < n; i++) {
        let nextSeq = []
        let len = current.length
        let j = 0

        while (j < len) {
            let count = 1

            while (j + 1 < len && current[j] === current[j + 1]) { 
                count++
                j++
            }

            nextSeq.push(count, current[j])
            j++
        }

        current = nextSeq.join("")
    }

    console.log(current)
    return current
};
