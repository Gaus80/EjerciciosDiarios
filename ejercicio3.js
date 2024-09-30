/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {   
    let letras = x.toString().toLowerCase().trim();
    let letra;
    let arreglo = [];
    let arregloEvaluado = [];
    let bandera = false;

    let letra1;
    let letra2;
    for(let i = 0; i<letras.length;i++){
      
        letra = letras.charAt(i);
        arreglo.push(letra);
        arregloEvaluado.unshift(letra);
    }
    console.log(arreglo);
    console.log(arregloEvaluado);
    for(let i=0;i<letras.length;i++){
      letra1= arreglo[i];
      letra2 = arregloEvaluado[i];

      if(letra1!==letra2){
        return false;
      }
    }   

    return true;
    
};

console.log(isPalindrome("ANA"));