/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
 let result = n

    if(result < 9 && result % 2 === 0) return false

    let i = 0

    while(result > 1 && i < 10){
        let converted = String(result).split("")
        let sum = converted.reduce((acc, val) => {
            return Number(val) ** 2 + acc
        }, 0)

        console.log(sum)
        result = sum
        i++
    }

    console.log(result)
    return result === 1 ? true : false
};