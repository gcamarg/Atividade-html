window.onload = () => checarFiltros()

//Checa parametros de rota e chama função que popula home
function checarFiltros(){
    const parametros = new URLSearchParams(top.location.search)
    const categoria = parametros.get('categoria')
    const termo = parametros.get('pesquisa')
    let listaEstoque = carregarEstoque();
    if(categoria != null) {
        let pCategoria = listaEstoque.filter(p=>p.categoria == categoria)
        carregarHome(pCategoria)
        return
    }
    if(termo != null){
        let pPesquisa = listaEstoque.filter(p=>p.produto.toLocaleLowerCase().includes(termo.toLocaleLowerCase()))
        carregarHome(pPesquisa)
        return
    }
    carregarHome(listaEstoque)
}

//Monta a página inicial
function carregarHome(listaProdutos){
    let innerHTML = ''
    const shuffled = listaProdutos.sort(() => 0.5 - Math.random());
    shuffled.slice(0,12).forEach(e => {
        let corBG = Math.floor(Math.random()*16777215).toString(16); //Cor do fundo
        let corFonte = (Number(`0x1${corBG}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase() //Cor inversa da do bg para fonte
        innerHTML += `<div class="col-sm-3" id="card-container-${e.id}">
            <div class="card m-2">
                <div class="m-2 text-center" style="height: 200px; background-color: #${corBG}"><h5 class="card-title mt-2" style="color: #${corFonte}">${e.produto}</h5></div>
                <button type="button" class="btn btn-primary col-sm-auto m-3" id="${e.id}" onclick="addItem(${e.id}, 'card-container-${e.id}')">Comprar</button>
            </div>
        </div>`
    })

    document.getElementById("container").innerHTML = innerHTML;

}

    