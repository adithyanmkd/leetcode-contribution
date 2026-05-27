/**
 * @param {number[]} arr
 * @return {boolean}
 */

var checkIfExist = function(arr) {
    let seen = new Set()

    for(let num of arr){
        if(seen.has(num / 2) || seen.has(num * 2)) return true

        seen.add(num)
    }

    return false
};