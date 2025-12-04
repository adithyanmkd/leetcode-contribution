/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    
    if(nums.length === 1){
        return [nums]
    }

    for(let i = 0; i < nums.length; i++){
        let currentVal = nums[i]
        const remainingElm = nums.slice(0, i).concat(nums.slice(i + 1))
        const remainingPerm = permute(remainingElm)

        for(let perm of remainingPerm){
            result.push([currentVal, ...perm])
        }
    }

    return result
};