//Para criar um objeto precisa colocar 
const pessoa={
    nome: "Gabriela Martins",
    idade: 16,
    email:"gabrielaMartins@gmail.com",
    notas: [7,8,8,6,7],
    endereco:{
        cidade: "Carapicuiba",
        UF: "SP"

    }
}
// Para ecessar um valor na variável é só usar o .
    console.log(pessoa.nome)
    console.log(pessoa["nome"])

    console.log(pessoa.endereco.cidade)

    