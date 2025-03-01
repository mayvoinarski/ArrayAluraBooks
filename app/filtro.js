const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros () {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtroDisponibilidade() : 
    filtroCategoria(categoria)
    exibirLivros(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValor(livrosFiltrados);
        exibeValorTotal (valorTotal)
    }
}

function filtroCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtroDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibeValorTotal (valorTotal){
    elementoValorTotal.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}

