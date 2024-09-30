/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let suma;
    let indice1;
    let indice2;

    for(let i = 0; i<nums.length;i++){
        suma = nums[i] + nums[i+1];
        console.log(suma)
        if(suma === target){
           indice1 = Number(i);
           indice2 = Number(i+1);
           return [indice1,indice2]
        }
    }
};
console.log(twoSum([2,7,11,15],26

))