const pessoasComMaisAURADoSenai = ["Alex", "Reginaldo", "Wilson", "Rafael", "Isabel","Dario"]

// quando está usando for com array é sempre bom usar o método length

for (let i=0;i< pessoasComMaisAURADoSenai.length;i++){

    console.log("posição "+(i+1) + ":" + pessoasComMaisAURADoSenai[i])
}

console.log("=======FOR EACH=======")


for(const pessoa of pessoasComMaisAURADoSenai) {

    console.log(pessoa)
}

// ===========

const numeros=[10,20,30,40,50]

for(let i=0; i<numeros.length;i++){

    console.log(numeros[i])
}


