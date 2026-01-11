/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let indexPosition = false

   nums.forEach((val, index) => {
    if(val === target){
        indexPosition = index
    }
   })

   if(indexPosition){
    return indexPosition
   }else{
    nums.push(target)
    let indexPos = nums.sort((a, b) => a -b).indexOf(target)
    return indexPos
   }
};