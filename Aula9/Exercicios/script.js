
const btnAddItem = $("#btnAddItem");
const listaItems = $("#listaItems");
const txbNovoItem = $("#txbNovoItem");
const btnMudarTema = $("#btnMudarTema");
const txbPesquisarItem = $('#txbPesquisarItem');
const contadorItems = $('#contadorItems');
const notificacao = $("#notificacao");
const modalConfirmacao = $("#modalConfirmacao");
let temaAtual = "claro";
let itemAExcluir;

carregarLista();

btnAddItem.on('click', adicionarItem);
btnMudarTema.on('click', mudarTema);
txbPesquisarItem.on('keyup', pesquisarItem);

function adicionarItem(){
    if (txbNovoItem.val().trim() === '') {
        notificar("Digite um valor para adicionar à lista.");
        return;
    }
    criaItemLista(txbNovoItem.val());
    limparCampo(txbNovoItem);
    salvarLista();
}

function criaItemLista(texto){
    let li = $("<li>").text(texto);
    let btnRemover = $("<button>").text("Remover").on('click', function() {
        abrirModalConfirmacao(li);
    });
    let btnEditar = $("<button>").text("Editar").on('click', function() {
        editarItem(li, texto, btnRemover, btnEditar);
    });
    li.append(btnRemover, btnEditar);
    listaItems.append(li);
    notificar("Item adicionado.");
    atualizarContador();
}

function limparCampo(campo){
    campo.val("");
    campo.focus();
}

function editarItem(li, textoOriginal, btnRemover, btnEditar) {
    let inputEdicao = $("<input>").val(textoOriginal);
    let btnSalvar = $("<button>").text("Salvar").on('click', function() {
        let textoEditado = inputEdicao.val().trim();
        if (textoEditado === '') {
            notificar("O item não pode ficar vazio.");
            return;
        }
        li.empty().text(textoEditado).append(btnRemover, btnEditar);
        salvarLista();
        notificar("Item editado.");
    });

    li.empty().append(inputEdicao, btnSalvar);
}

function abrirModalConfirmacao(item) {
    itemAExcluir = item;
    modalConfirmacao.show();
}

$("#btnConfirmarRemocao").on('click', function() {
    itemAExcluir.remove();
    salvarLista();
    atualizarContador();
    notificar("Item removido.");
    modalConfirmacao.hide();
});

$("#btnCancelarRemocao").on('click', function() {
    modalConfirmacao.hide();
});

function notificar(mensagem) {
    notificacao.text(mensagem).fadeIn();
    setTimeout(function() {
        notificacao.fadeOut();
    }, 3000);
}

function mudarTema(){
    let bodyAtual = $("body");
    if(temaAtual == "claro"){
        temaAtual = "escuro";
        bodyAtual.removeClass('claro').addClass('escuro');
    } else {
        temaAtual = "claro";
        bodyAtual.removeClass('escuro').addClass('claro');
    }
}

function pesquisarItem() {
    let filtro = txbPesquisarItem.val().toLowerCase();
    listaItems.find('li').each(function() {
        let itemTexto = $(this).clone().children().remove().end().text().toLowerCase();
        $(this).toggle(itemTexto.indexOf(filtro) > -1);
    });
}

function atualizarContador() {
    contadorItems.text(listaItems.children().length);
}

function salvarLista() {
    let lista = [];
    listaItems.find('li').each(function() {
        let texto = $(this).clone().children().remove().end().text();
        lista.push(texto);
    });
    localStorage.setItem('listaItems', JSON.stringify(lista));
}

function carregarLista() {
    let listaSalva = JSON.parse(localStorage.getItem('listaItems'));
    if (listaSalva) {
        listaSalva.forEach(function(texto) {
            criaItemLista(texto);
        });
    }
}