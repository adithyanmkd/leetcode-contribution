/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count = 0
    let temp = num

    for(let i = 0; i < num; i++){
        if(temp == 0) break

        if(temp % 2 == 0){
            temp /= 2
            count++
        }

        if(temp % 2 == 1){
            temp -= 1
            count++
        }
    }

    return count

};