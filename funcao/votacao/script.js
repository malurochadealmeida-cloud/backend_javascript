const votos={
"Davi Brito":0,
"Raquel Brito":0,
"Virginia Fonseca":0

}

function votar (nome){
    const confirmado= confirm("Tem certeza que deseja votar em "+ nome + "?")

    if(confirmado===true){
        votos[nome] = votos[nome]+1
        alert("Voto registrado em "+ nome)
    

    }
}

    function mostrarVotos(){
        console.clear()
        console.log("=====RESULTADO=====")

        for(const candidatos in votos ){
            console.log(candidatos + ": " + votos[candidatos])
        }

        

    }