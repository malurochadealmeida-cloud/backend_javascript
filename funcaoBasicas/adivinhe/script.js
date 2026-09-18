function startGame(){
    alert("Bem vindo, vamos treinar multiplicação. Acerte 3 perguntas")
   
    for(let i=0;i<3;i++ ){

    const num1= Math.floor(Math.random()*10)+1 
     const num2= Math.floor(Math.random()*10)+1 
     const num3= Math.floor(Math.random()*10)+1


    const resposta = prompt(`Quanto é ${num1} * ${num2}`)
    const respostaCerta = num1*num2

    if(resposta ==respostaCerta){
        alert("você acertoou! Parabéns")

    }else{
        alert("Você errou!")

    }

    }
}