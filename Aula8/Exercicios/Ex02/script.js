let btnMudarCor = document.getElementById("btnMudarCor");
let btnMudarFonte = document.getElementById("btnMudarFonte");
let pExemplo = document.getElementById("pExemplo");

let ultimaCor = "preto";
let ultimoEstilo = "normal";

btnMudarCor.addEventListener('click', mudarCor);
btnMudarFonte.addEventListener('click', mudarFonte);

function mudarCor(){
    if(ultimaCor == "preto"){
        ultimaCor = "vermelho";
        pExemplo.style.color = 'red';
    }
    else{
        ultimaCor = "preto";
        pExemplo.style.color = 'black';
    }
}

function mudarFonte(){
    if(ultimoEstilo == "normal"){
        ultimoEstilo = "italico";
        pExemplo.style.fontStyle = 'italic';
    }
    else{
        ultimoEstilo = "normal";
        pExemplo.style.fontStyle = 'normal';
    }
}