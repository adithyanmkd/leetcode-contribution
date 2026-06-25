/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let result = 0

    for(let al of jewels){
        for(let key in stones){
            if(al === stones[key]){
                result++
            }
        }
    }

    return result
};