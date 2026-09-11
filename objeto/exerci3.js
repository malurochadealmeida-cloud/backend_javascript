const mercado={
    arroz:10,
    feijao:3,
    macarrao:15,
    leite:2,
    cafe:8

}
for(const disponivel in mercado){
    
    if(mercado[disponivel] > 3){
        console.log(disponivel+"-" +mercado[disponivel] +":Disponível!")

    }else{
        console.log(disponivel+"- "+mercado[disponivel] +":Está acabando!")
    }
}

    