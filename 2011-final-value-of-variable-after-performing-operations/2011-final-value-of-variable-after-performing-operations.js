/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let num = 0
    let n = operations.length

    for(let i = 0; i < n; i++){
        if(operations[i].includes("--")){
            num--
        }else if(operations[i].includes("++")){
            num++
        }
    }

    return num
};