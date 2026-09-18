const alunos =[]

function addAluno(){
    const nomeInserido= prompt("Digite o nome do aluno!")
    const emailInserido = prompt("Digite o email do aluno!")

    const aluno ={
        id:alunos.length + 1,
        nome: nomeInserido,
        email: emailInserido
    }

    alunos.push(aluno)// Adiciona o aluno na lista 
}

function showAluno(){
    console.log ("=== ALUNOS ===")

    for(let i=0;i<alunos.length;i++){
console.log(`nome: ${alunos[i].id}, nome: ${alunos[i].nome}, email: ${alunos[i].email}`)

    }
}

    function buscarPorNome(){
        const nomeProcurado= prompt("Digite o nome do aluno(a)")

            const alunoEncontrado = alunos.find(aluno => aluno.nome.toLowerCase == nomeProcurado.toLowerCase)

            if(alunoEncontrado){
                console.log("Aluno encontrado: "+ alunoEncontrado.nome+",id"+alunoEncontrado.id+",email"+alunoEncontrado.email)

            }else{

                console.log("Aluno não encontrado")
            }

    }

    function excluirPorId(){
        const idProcurado = prompt("Digite o id do aluno: ")

        const indexDoAluno = alunos.findIndex(a=> a.id== idProcurado)

        if(indexDoAluno !=-1){
        alunos.splice(indexDoAluno,1)
        alert("Removido com sucesso")

        }else{
            alert("Aluno não encontrado")
                                                                                          
        }
}
    