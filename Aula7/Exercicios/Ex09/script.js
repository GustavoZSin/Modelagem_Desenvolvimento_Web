const botaoAdicionar = document.getElementById("adicionar");
const caixasContainer = document.getElementById("caixas");

function adicionarCaixaTexto() {
    const novaCaixa = document.createElement("input");
    novaCaixa.type = "text";
    novaCaixa.className = "caixa-texto";
    caixasContainer.appendChild(novaCaixa);
}

botaoAdicionar.addEventListener("click", adicionarCaixaTexto);