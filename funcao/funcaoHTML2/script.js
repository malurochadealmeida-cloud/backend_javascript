let lista = []

function adicionar(){

     let produto= prompt("Digite o nome do produto: ")
     lista.push(produto)
     alert("Produto adicionado com sucesso!")
    mostrarProdutos()
    
}

function mostrarProdutos(){
        console.clear() //limpa o console das mensagens anteriores
    for(let i=0;i<lista.length;i++){
        console.log(lista[i])
        
    }
}

function retirarUltimo(){

lista.pop()
    alert("Ultimo produto removido com sucesso!")

    mostrarProdutos()


}