function validarInformacoes() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;

    if(!valorVazio(nome) && !valorVazio(idade)){
        window.alert("informações válidas!")
    }
    else{
        window.alert("informações não são válidas!")
    }
}

function valorVazio(valor){
    if(valor == null || valor == "")
        return true;

    return false;
}