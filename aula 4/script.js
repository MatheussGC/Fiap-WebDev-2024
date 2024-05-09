/* function somar(num1, num2){
    return num1 + num2
}
 
console.log(somar(5, 8)) */

/* const pessoas = ["marcelo", "Matheus", "Ana", "Lucas", 18, true]
console.log(pessoas[]) */

function escolhaComp(){
    const jokeipo = ["Pedra", "Papel", "Tesoura"]
    let numeroAleatorio = Math.floor(Math.random() * jokeipo.length)
    return jokeipo[numeroAleatorio] 
} 
console.log(escolhaComp())

function jogar(escolhaDoUsuario){

    let escolhaPC = escolhaComp()                  
    let resultado                                  

    if(escolhaDoUsuario === escolhaPC){
        resultado = "Empate!"
    }


}

