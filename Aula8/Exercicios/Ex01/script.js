let btnAdicionar = document.getElementById("btnAdicionar");
let ulItens = document.getElementById("ulItens");

btnAdicionar.addEventListener('click', adicionar)

function adicionar(){
    let txbConteudo = document.getElementById("txbConteudo");
    let conteudo = txbConteudo.value;

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(conteudo));

    ulItens.appendChild(li);

    txbConteudo.value = "";
    txbConteudo.focus();
}