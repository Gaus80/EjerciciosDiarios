
var reverse = function(x) {
    let arreglo = [];
    let arreglo2 =[];
    let letras = x.toString();
    let valor ;

    let indices;
    for(let i = 0; i<letras.length;i++){
        valor = letras.charAt(i);
        arreglo.push(valor);    
    }

    let iterador = 0;
    if(arreglo[0]==='-'){
        7 | 
    }

    for(let i = 0;i<arreglo.length;i++){
        if(arreglo[0]==='-'){
            arreglo2[0] = '-'
            arreglo2.unshift(arreglo[i+1]);
            console.log(arreglo2)
        }
          else{
            arreglo2.unshift(arreglo[i]);
            console.log(arreglo2)
          } 
       
    }
 
   
};
console.log(reverse(-123))