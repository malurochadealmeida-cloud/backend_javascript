// Crie uma função gerarTabuada que recebe um número e imprime a tabuada de 1 a 10 dele.

function gerarTabuada(numero){
    for(let i=1;i<=10;i++){
        console.log(numero + "x"+i+"="+numero*i)
    }
}
gerarTabuada(9)