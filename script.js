

//1 - crie uma função que exiba uma mensagem no console

function exibaMsg() {
    console.log("A função foi chamada e utilizada com sucesso!")
}
exibaMsg()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function recebaNome(nome) {
    console.log(`A função exibe o meu nome que é ${nome}`)
}
recebaNome("João")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function preferencias(segNome, idade, estilo) {
    console.log(`O meu nome é ${segNome}, eu tenho ${idade} anos, e gosto de ${estilo}!! `)
}
preferencias("João", 19, "rock")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function filmAndMusic(filme, musica) {
    console.log(`O filme ${filme} é com certeza um dos melhores filmes já feitos assim como ${musica} está entre as melhores musicas `)
}
filmAndMusic("Lord of the Rings", "Paranoid")

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function tripleNumber(numero) {
    return console.log(numero * 3)
}
tripleNumber(4)
