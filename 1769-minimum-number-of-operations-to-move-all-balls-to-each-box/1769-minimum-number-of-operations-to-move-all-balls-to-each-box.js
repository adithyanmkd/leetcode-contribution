/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length

    // "001011"
    // 2 + 4 + 5 = 11
    // 1 + 3 + 4 = 8
    // 2 + 3 = 5 
    // etc..
    // [11, 8, 5]
    
    const res = []
    for (let i = 0; i < n; i++) {
        let sum = 0

        for (let j = 0; j < n; j++) {
            if (boxes[j] === '1') {
                sum += Math.abs(i - j)
            }
        }
        
        res.push(sum)
    }

    return res
};