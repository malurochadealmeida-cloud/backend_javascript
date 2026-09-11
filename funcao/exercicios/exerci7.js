//7. Crie uma função classificarNota que recebe uma nota (0 a 10) e retorna "Aprovado" ou "Reprovado".

function classificarNota (nota){

    if(nota>=6){
        return "Aprovado"
    }else{
        return "Reprovado"
    }
}
console.log(classificarNota(7))

  