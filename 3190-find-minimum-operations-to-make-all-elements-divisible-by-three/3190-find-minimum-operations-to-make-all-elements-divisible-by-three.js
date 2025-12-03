/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const size = nums.length

    let count = 0

    for(let i = 0; i < size; i++){
        if(nums[i] % 3 == 0){
            continue
        }else{
            let addValue = nums[i] + 1;
            let subValue = nums[i] - 1;
            if(addValue % 3 === 0 || subValue % 3 === 0){
                count++
            }
        }
    }
    
    return count
};