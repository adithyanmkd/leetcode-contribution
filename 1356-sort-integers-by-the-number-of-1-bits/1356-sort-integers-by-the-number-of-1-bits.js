/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const countBits = (num) => {
        let weight = 0

        while (num) {
            weight++
            num &= (num - 1)
        }

        return weight
    }

    arr.sort((a, b) => {
        const bitA = countBits(a)
        const bitB = countBits(b)

        if (bitA === bitB) return a - b
        return bitA - bitB
    })
    console.log(arr)
    return arr
};