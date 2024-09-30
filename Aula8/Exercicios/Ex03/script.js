let btnIncrementar = document.getElementById("btnIncrementar");
let btnDecrementar = document.getElementById("btnDecrementar");
let lblContagem = document.getElementById("lblContagem");
let contador = 0;

btnIncrementar.addEventListener('click', incrementar);
btnDecrementar.addEventListener('click', decrementar);

function incrementar(){
    contador++;
    lblContagem.innerHTML = contador;
}

function decrementar(){
    contador--;
    lblContagem.innerHTML = contador;
}

