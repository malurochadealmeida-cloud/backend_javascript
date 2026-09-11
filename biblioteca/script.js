let livros= []

function cadastrar(){
    let nome=prompt("Digite o nome do livro "+ livros)
    livros.push(nome)
    alert("Livro " + nome + "cadastrado com sucesso!")

}

    function listar(){
        console.clear()
        for(let i=0;i<livros.length;i++){
        console.log(livros[i]," livros cadastrados")
 
        
    }
 }
    function quantidade(){
       alert( livros.length)

    }
    
    function removerUltimo(){
        livros.pop()
        alert("Ultimo livro removido com sucesso!")
        listar()
        

    }
    function limpar(){
       livros = []
        
    }

