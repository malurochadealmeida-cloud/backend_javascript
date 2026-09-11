const livro={
    nome:"As veias abertas da América Latina",
    publicacao:1971,
    autor: "Eduardo Galeano",
    disponivel:true

}

livro.disponivel=false

livro.paginas= 307



console.log("O livro "+livro.nome + " do autor "+ livro.autor+", que foi lançado em "+ livro.publicacao )

delete livro.publicacao

console.log(livro )
