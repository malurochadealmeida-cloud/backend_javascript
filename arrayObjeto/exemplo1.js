
const usuarios = [
   {nome:"Ana Sofia ",
   email: "ana@gmail.com",
   idade: 16,
   ativo: true
   },

   {
    nome: "Alberto",
    email: "alberto@gmail",
    idade: 16,
    ativo: false


   },
   {
    nome: "Leandro",    
    email:"leandro@gmail", 
    idade:16,
    ativo: false

   }


]


    console.log(usuarios[2].email)
    console.log(usuarios[0].nome)
{
    for(let i=0;i<usuarios.length;i++){ //!=exibe o inverso
        if(!usuarios[i].ativo){
            console.log(usuarios[i].nome)
        }
    }


}
//filter= filtra todos os elementos com base na condição

const ativos= usuarios.filter(u=> u.ativo === true)
console.log(ativos)

//find = acha um elemento que atende a condição e retorna o primeiro

const clientes16anos= usuarios.find(u => u.idade===16)
 console.log(clientes16anos)


const buscarLeandro = usuarios.find(u=> u.nome.includes("Leandro"))
console.log(buscarLeandro)


//Transforma a lista em um anova lista

const soNomes=usuarios.map(u=>u.nome.toUpperCase())
console.log(soNomes)

