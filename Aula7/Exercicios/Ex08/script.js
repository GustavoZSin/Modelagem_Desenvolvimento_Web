const arrayElementos = [];
const botaoAdicionar = document.getElementById("adicionar");
const inputElemento = document.getElementById("elemento");
const lista = document.getElementById("lista");

function adicionarElemento() {
    const valor = inputElemento.value.trim();

    if (valor !== "") {
        arrayElementos.push(valor);
        atualizarLista();
        inputElemento.value = ""; 
        inputElemento.focus();
    }
}

function atualizarLista() {
    lista.innerHTML = ""; 
    
    arrayElementos.forEach(function(elemento) {
        const itemLista = document.createElement("li");
        itemLista.textContent = elemento;
        lista.appendChild(itemLista);
    });
}

botaoAdicionar.addEventListener("click", adicionarElemento);