
var reverse = function(x) {
    //LIMITE DE 32 BIT
    const limite = 2147483648; // 2^31
    //NUMERO AL REVES
    let valor = 0;
    //SIGNO, OPERADOR TERNARIO
    let signo = x < 0 ? -1 : 1;
    //VALOR ABSOLUTO
    x = Math.abs(x);

    while (x > 0) {
        valor = valor * 10 + (x % 10);
        console.log(valor)
        x = Math.floor(x / 10);
    }

    valor *= signo;

    // IMITES DE 32 BITS
    if (valor < -limite || valor > limite - 1) {
        return 0;
    }

    return valor;
}
console.log(reverse(123))
//console.log(2**31); POTENCIACION


