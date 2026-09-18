const texto = "Eu amo Javascript!  "

console.log(texto.trim())// Remove espeço vazio só do começo e do final da palavra
console.log(texto.toUpperCase())// Em caixa alto
console.log(texto.toLowerCase())// Em caixa baixa
console.log(texto.replace("Javascript", "HMTL"))// substitui uma palavra por outra 
console.log(texto.includes("amo"))// verifica se dentro do texto tem palavra

const melhorMeme = "Troll face"
console.log("O melhor meme do mundo é o "+ melhorMeme)
console.log(`O melhor meme do mundo é o ${melhorMeme}`)