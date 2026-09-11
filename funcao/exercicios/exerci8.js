//8. Crie uma função que recebe um array de números e retorna a soma total.

function somaTotal (numeros) {
    let soma = 0 

    for(let numero of numeros){

        soma+= numero
    }
    return soma
}
  console.log(somaTotal([3,4,5,6,]))   