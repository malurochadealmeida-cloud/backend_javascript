//5. Crie uma função maiorNumero que recebe três números e retorna o maior deles.

function maiorNumero (n1,n2,n3){
 if(n1>=n2 && n1>=n3){
    return n1

 } else if(n2>=n1 && n2>=n3){
    return n2
 }else{
    return n3
 }

 }

console.log("O maior número é: ", maiorNumero(13,14,15))

