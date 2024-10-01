class Solution {
    subarraySum(arr, n, s) {

        let suma = 0;
        let valorInicial = 0;

        for(let i = 0;i < n; i++){
               suma += arr[i];

               while(suma > s && i <= n){
                suma -= arr[valorInicial];
               
                valorInicial++;
               }
               console.log(suma)

        if(suma === s){
            return `${valorInicial+1}${i+1}`;
        }
    }  

            return -1;   
    }

}
let arr = [1,2,3,7,5];
let n = 5;
let s = 12;
let sol = new Solution();

console.log(sol.subarraySum(arr,n,s));