/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let result = 0

    for (let i = n; i < Infinity; i++) {
        const binary = i.toString(2)

        if (!binary.includes("0")) {
            result = parseInt(binary, 2)
            break
        }
    }

    return result
   
};