let livros = []
const endPointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscaLivrosApi ()

async function getBuscaLivrosApi() {
    const res = await fetch(endPointApi)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirLivros(livrosDesconto)
}

