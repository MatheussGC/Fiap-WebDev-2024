const resultado = document.getElementById("resultado")

function calcular(){
    var numero = parseInt(document.getElementById("numero").value)
    /* const numeros = [] */
    for( i=0; i <=10 ;i++){
        console.log(`A tabuada do ${numero} é: ${numero} x ${i} é igual a ${numero *i}`)
        
        /* var tabuada = numero *i 
        numeros.push(tabuada)
        console.log(numeros) */
    }
    /* resultado.innerText = numeros */

}
