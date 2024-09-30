const btnEnviar = document.getElementById("btnEnviar");
const formulario = document.getElementsByClassName("formulario");
const listaErros = document.getElementById("listaErros");

btnEnviar.addEventListener('click', function(event) {
    event.preventDefault();
    validar();
});

function validar(){
    limparErros();

    var txtNome = document.getElementById("txtNome");
    var txtEmail = document.getElementById("txtEmail");
    var txtMensagem = document.getElementById("txtMensagem");

    var isValid = true;

    if (valorNullOuVazio(txtNome.value)) {
        adicionarErro('Nome está nulo ou vazio!', txtNome);
        isValid = false;
    }

    if (valorNullOuVazio(txtEmail.value)) {
        adicionarErro('Email está nulo ou vazio!', txtEmail);
        isValid = false;
    }

    if (valorNullOuVazio(txtMensagem.value)) {
        adicionarErro('Mensagem está nula ou vazia!', txtMensagem);
        isValid = false;
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
}

function valorNullOuVazio(valor) {
    return valor == null || valor.trim() === "";
}

function adicionarErro(mensagem, campo) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(mensagem));
    listaErros.appendChild(li);
}

function limparErros() {
    listaErros.innerHTML = "";
}