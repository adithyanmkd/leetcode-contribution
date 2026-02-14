/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // if(x > 0){
    //     let converted = String(x).split("").reverse().join("")
    //     let reversedNum = Number(converted)
    //     if(reversedNum > 2147483647 || reversedNum < -2147483648){
    //         return 0
    //     }

    //     return Number(converted)
    // }else{
    //     let converted = String(x).split("").slice(1).reverse().join("")
    //     let reversedNum = Number(converted)
    //     if(reversedNum > 2147483647 || reversedNum < -2147483648){
    //         return 0
    //     }
    //     let negVal = reversedNum * (-1)
    //     return negVal
    // }

    let reversedNum = Number(String(Math.abs(x)).split("").reverse().join("")) * Math.sign(x)
    return (reversedNum < -(2**31) || reversedNum > (2**31 - 1)) ? 0 : reversedNum
};