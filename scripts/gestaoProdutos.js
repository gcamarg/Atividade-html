//Script que faz gestão do estoque e carrinhos que estão salvos no local storage

//Carrega itens do estoque
function carregarEstoque() {
    let estoque;
    let sEstoque = localStorage.getItem("estoque");
    estoque = JSON.parse(sEstoque);

    return estoque
}

//Carrega itens do carrinho
function carregarCarrinho() {
    let carrinho;
    let sCarrinho = localStorage.getItem("carrinho");

    if (sCarrinho == null) {
        carrinho = []
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    } else {
        carrinho = JSON.parse(sCarrinho);
    }
    return carrinho
}

//Adiciona um item ao carrinho
function addItem(idProduto, elementoPai) {
    let estoque = carregarEstoque();
    carrinho = carregarCarrinho();

    let idx = estoque.findIndex(p => p.id == idProduto)

    if (estoque[idx].estoque-- > 0) {

        displayMsg(elementoPai, `${estoque[idx].produto} adicionado ao carrinho.`, 'g')

        for (const produto of carrinho) {
            if (produto.id == idProduto) {
                produto.quantidade++
                localStorage.setItem("estoque", JSON.stringify(estoque))
                localStorage.setItem("carrinho", JSON.stringify(carrinho))
                return carrinho
            }
        }
        let prodAdicionar = estoque[idx]

        carrinho.push({
            id: prodAdicionar.id,
            produto: prodAdicionar.produto,
            valor: prodAdicionar.valor,
            quantidade: 1
        })

        localStorage.setItem("estoque", JSON.stringify(estoque))
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    } else {
        displayMsg(elementoPai, `${estoque[idx].produto} fora de estoque`, 'r')
    }
    return carrinho
}

//Remove uma unidade de um determinado produto. Se qtde = 0 exclui o item
function removerUnidade(idProduto, elementoPai) {

    let estoque = carregarEstoque();
    carrinho = carregarCarrinho();

    let idx = estoque.findIndex(p => p.id == idProduto)

    for (const produto of carrinho) {
        if (produto.id == idProduto) {
            produto.quantidade--
            estoque[idx].estoque++
            localStorage.setItem("estoque", JSON.stringify(estoque))

            if (produto.quantidade <= 0) {
                return excluirItem(idProduto)
            }
            displayMsg(elementoPai, `${estoque[idx].produto} removido`, 'r')
            localStorage.setItem("carrinho", JSON.stringify(carrinho))
            return carrinho
        }
    }
}

//Remove todas unidades de um determinado produto
function excluirItem(idProduto) {

    let carrinho = carregarCarrinho()
    let novoCarrinho = carrinho.filter(prod => prod.id != idProduto)

    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
    return novoCarrinho;
}

// Pop-up com a operação feita
function displayMsg(idPai, msg, cor) {
    setTimeout(() => {
        let elementoPai = document.getElementById(idPai)
        let p = document.createElement('p')
        p.className = `card p-3 ${(cor == 'g') ? "text-success" : "text-danger"}`
        p.id = `popup-${cor}-${idPai}`
        p.style = "position: absolute; z-index: 99"
        p.textContent = msg
        elementoPai.appendChild(p)
        setTimeout(() => {
            try {
                elementoPai.removeChild(document.getElementById(`popup-${cor}-${idPai}`))

            } catch (error) {
                //Tratar possiveis erros
            }
        }, 2000)
    }
        , 200)
}