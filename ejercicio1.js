class Solution {
    subarraySum(arr, n, s) {

        let suma = 0;
        let valorInicial = 0;
        let encontrar = 0;
        for(let i = 0;i < n; i++){
            while(suma > s && i <= n){
                suma -= arr[valorInicial];
                valorInicial++;
                encontrar = suma;
               }

               suma += arr[i];

        if(encontrar === s){
            let indice = i;
            let 
            return `${valorInicial+1}${i+1}`;
        }
    }  

            return -1;   
    }

}
let arr=[1,0];
let n= 2;
let s= 0;
let sol = new Solution();

console.log(sol.subarraySum(arr,n,s));