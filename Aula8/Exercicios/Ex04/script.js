let liNomes = Array.from(document.getElementById("ulNomes").getElementsByTagName("li"));
let txtValorParaFiltrar = document.getElementById("txtValorParaFiltrar");
let ulNomesFiltrados = document.getElementById("ulNomesFiltrados");

txtValorParaFiltrar.addEventListener('input', filtrar);

function filtrar(){
    ulNomesFiltrados.innerHTML = "";

    if(txtValorParaFiltrar.value != null && txtValorParaFiltrar.value != ""){
        liNomes.forEach(nome => {
            if (nome.textContent.toLowerCase().includes(txtValorParaFiltrar.value.toLowerCase())) {
                adicionar(nome.textContent);
            }
        });
    }
}

function adicionar(conteudo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(conteudo));

    ulNomesFiltrados.appendChild(li);
}