/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    if (num1 <= 0 || num2 <= 0) return 0
    let bal = null
    let operations = 0

    if (num1 > num2) {
        num1 = num1 - num2
        bal = num1
        operations++
    } else {
        num2 = num2 - num1
        bal = num2
        operations++
    }

    while (bal > 0) {
        if (num1 > num2) {
            num1 = num1 - num2
            bal = num1
            operations++
        } else {
            num2 = num2 - num1
            bal = num2
            operations++
        }
    }

    console.log(operations)
    return operations
};