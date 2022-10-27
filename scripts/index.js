let hidden = true;
let estoque =[{"id":1,"categoria":"Eletrodomestico","produto":"Micro-ondas","estoque":8, "valor":699.90},
{"id":2,"categoria":"Eletrodomestico","produto":"Geladeira","estoque":3, "valor":2190},
{"id":3,"categoria":"Eletrodomestico","produto":"Máquina de Lavar","estoque":4, "valor":1800},
{"id":4,"categoria":"Eletrodomestico","produto":"Air Fryer","estoque":10, "valor":380},
{"id":5,"categoria":"Eletrodomestico","produto":"Liquidificador","estoque":12, "valor":120},
{"id":6,"categoria":"Eletrodomestico","produto":"Aspirador de pó","estoque":12, "valor":275.50},
{"id":7,"categoria":"Eletrodomestico","produto":"Grill","estoque":15, "valor":89.90},
{"id":8,"categoria":"Eletrodomestico","produto":"Ventilador","estoque":6, "valor":110},
{"id":9,"categoria":"Eletrodomestico","produto":"Blender","estoque":20, "valor":99},
{"id":10,"categoria":"Eletrodomestico","produto":"Ar condicionado","estoque":8, "valor":1899},
{"id":11,"categoria":"Eletrodomestico","produto":"Exaustor","estoque":1, "valor":899},
{"id":12,"categoria":"Eletrodomestico","produto":"Cafeteira","estoque":16, "valor":295},
{"id":13,"categoria":"Informática","produto":"Mouse Logitech","estoque":13, "valor":60},
{"id":14,"categoria":"Informática","produto":"Teclado Logitech","estoque":10, "valor":79.90},
{"id":15,"categoria":"Informática","produto":"Notebook Lenovo","estoque":12, "valor":3999},
{"id":16,"categoria":"Informática","produto":"Notebook Dell","estoque":7, "valor":4200},
{"id":17,"categoria":"Informática","produto":"Web Cam","estoque":17, "valor":115},
{"id":18,"categoria":"Informática","produto":"Monitor 25","estoque":10, "valor":750},
{"id":19,"categoria":"Informática","produto":"Roteador WiFi","estoque":8, "valor":160},
{"id":20,"categoria":"Informática","produto":"Impressora","estoque":4, "valor":419.90},
{"id":21,"categoria":"Informática","produto":"Fone de ouvido","estoque":21, "valor":99},
{"id":22,"categoria":"Informática","produto":"Placa de vídeo","estoque":8, "valor":900},
{"id":23,"categoria":"Informática","produto":"Processador intel","estoque":14, "valor":750},
{"id":24,"categoria":"Informática","produto":"Memória Ram 8GB","estoque":24, "valor":250},
{"id":25,"categoria":"Informática","produto":"Cabo HDMI","estoque":25, "valor":30},
{"id":26,"categoria":"Informática","produto":"Desktop i7 16GB","estoque":3, "valor":4600},
{"id":27,"categoria":"Informática","produto":"Headset","estoque":12, "valor":160},
{"id":28,"categoria":"Móveis","produto":"Guarda-roupa casal","estoque":7, "valor":1499},
{"id":29,"categoria":"Móveis","produto":"Guarda-roupa solteiro","estoque":3, "valor":999},
{"id":30,"categoria":"Móveis","produto":"Cama Box casal","estoque":4, "valor":1399},
{"id":31,"categoria":"Móveis","produto":"Cama Box solteiro","estoque":7, "valor":899},
{"id":32,"categoria":"Móveis","produto":"Sofá 2 lugares","estoque":8, "valor":790.90},
{"id":33,"categoria":"Móveis","produto":"Sofá 3 lugares","estoque":9, "valor":1099},
{"id":34,"categoria":"Móveis","produto":"Rack para TV","estoque":21, "valor":449.90},
{"id":35,"categoria":"Móveis","produto":"Painél para TV","estoque":13, "valor":300},
{"id":36,"categoria":"Móveis","produto":"Mesa de cabeceira","estoque":17, "valor":149},
{"id":37,"categoria":"Móveis","produto":"Cômoda 4 gavetas","estoque":13, "valor":699.90},
{"id":38,"categoria":"Móveis","produto":"Sapateira","estoque":22, "valor":190},
{"id":39,"categoria":"Móveis","produto":"Mesa de escritório","estoque":16, "valor":490},
{"id":40,"categoria":"Móveis","produto":"Mesa de jantar","estoque":7, "valor":850}]

if(localStorage.getItem("estoque")==null){
    console.log("Recriando JSON de estoque no local storage")
    localStorage.setItem('estoque', JSON.stringify(estoque))
}

window.onload = ()=>{
    document.getElementById('dropdown-toggle').addEventListener('click', (e) => showDropdown(e));
    
}
function showDropdown(e) {
    if (hidden) {
        document.getElementById('dropdown-menu').classList.add('display')
        hidden = false;
    } else {
        document.getElementById('dropdown-menu').classList.remove('display')
        hidden = true;
    }
}

function pesquisar(){
    let termo = document.getElementById("termoPesquisa").value
    if(termo.trim() != ""){
        top.location.href = `?pesquisa=${termo}` 
    }
}