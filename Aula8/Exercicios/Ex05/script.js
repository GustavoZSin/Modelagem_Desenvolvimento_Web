let paragrafos = document.querySelectorAll(".paragrafos");
let btnAcaoParagrafo = document.getElementById("btnAcaoParagrafo");
let ultimaAcao = "mostrar";

btnAcaoParagrafo.addEventListener('click', mostrarEsconder);

function mostrarEsconder(){
    paragrafos.forEach(paragrafo => {
        if(paragrafo.style.display === "none"){
            paragrafo.style.display = "block";
        }
        else{
            paragrafo.style.display = "none";
        }
    });
}