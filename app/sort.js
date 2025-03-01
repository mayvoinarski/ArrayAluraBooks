let btnPreco = document.getElementById('btnOrdenarPorPreco')

btnPreco.addEventListener('click', ordernarPreco)

function ordernarPreco () {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirLivros(livrosOrdenados)
}

