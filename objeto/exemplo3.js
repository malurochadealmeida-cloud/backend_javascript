const filme={
    titulo: "Interestelar",
    nota: 9.0,
    diretor: "Chistopher Nolan",
    generos: [
        "Drama", 
        "Aventura", 
        "Ficção Científica"
    ]

}
for(const chave in filme){

    if(chave=="nota"){
        if(filme[chave] > 8){
            console.log("Filme muito bom!")
        }
    }
}
    
for(const chave in filme){
    console.log(chave+": "+ filme[chave])
}