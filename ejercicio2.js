
class Solution {
    binarysearch(arr, k) {
       let indice = 0;
        
       for(let i = 0; i<arr.length;i++){
           if(arr[i]===k){
               indice = i;
               return indice;
           }
          
              
           
       }
        return -1;
    }
}

let arr=[1,2,67,89,0,23,3];
let n= 0;
let sol = new Solution();
console.log(sol.binarysearch(arr,n));