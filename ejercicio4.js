/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
          
    for(let i = 0;i<nums.length;i++){
        console.log("i: " + nums[i])
        for(let j = i +1; j<nums.length;j++){
            console.log("j: " + nums[j])
            if(nums[i] + nums[j] === target){
              return [i, j]
            }
        }
    }
}
    
    
console.log(twoSum([3,2,9,3,5],14));
