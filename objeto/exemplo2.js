const comida ={
    nome:"Enroladinho de salchicha",
preco: 8.00
}
// Trocar um valor que já existe 
comida.nome = "Enroladinho de salsicha"
// Criar um novo valor 
comida.validade="2 dias "

console.log(comida) 

console.log("O meu salgado favorito na cantina do senai " + comida.nome)
console.log("Ela custa "+ comida.preco)

//Remover um campo 
delete comida.nome

console.log(comida)