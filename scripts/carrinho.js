//Formatador de moeda para BRL
let formatarMoeda = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

window.onload = () => montarPagina()

//Carrega carrinho e chama função que monta tabela
function montarPagina() {
    let carrinho = carregarCarrinho()
    atualizarTabela(carrinho)
}

//Constrói tabela de itens do carrinnho
function atualizarTabela(carrinho) {
    let htmlTabela = ''
    carrinho.forEach(p => {
        htmlTabela += `<tr><td>${p.produto}</td>
            <td>
            <div id="linha-${p.id}">
            <button type="button" class="btn btn-danger" onclick="removerUm(${p.id})">-</button>
            <span class="fw-bold fs-5 ms-1 me-1">${p.quantidade} </span>
            <button type="button" class="btn btn-success" onclick="adicionarUm(${p.id})">+</button>
            </div>
            </td>
            <td>${formatarMoeda.format(p.valor)}</td>
            <td>${formatarMoeda.format(p.quantidade * p.valor)}</td>
            <td><button type="button" class="btn btn-link" onclick="excluir(${p.id})" id="item-${p.id}">Excluir</button></td>
            </tr>`
    })

    let total = carrinho.reduce((soma, produto) => {
        return soma + parseFloat(produto.valor) * parseFloat(produto.quantidade);
    }, 0)

    htmlTabela += `<tr><td></td>
        <td></td>
        <td></td>
        <td class="table-success">${formatarMoeda.format(total)}</td>
        <td></td>
        </tr>`
    document.getElementById("t-corpo").innerHTML = htmlTabela;
}

//Chama função que addiciona unidade e atualiza tabela
function adicionarUm(idProduto) {
    let carrinho = addItem(idProduto, `linha-${idProduto}`);
    atualizarTabela(carrinho)
}

//Chama função que remove unidade e atualiza tabela
function removerUm(idProduto) {
    let carrinho = removerUnidade(idProduto, `linha-${idProduto}`);
    atualizarTabela(carrinho)
}

//Chama função que exclui item e atualiza tabela
function excluir(idProduto) {
    let carrinho = excluirItem(idProduto);
    atualizarTabela(carrinho)
}
