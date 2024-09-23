function mudaEstiloDoParagrafo()
{
    var paragrafo = document.getElementById("paragrafo");

    if(paragrafo.style.backgroundColor == "rgb(255, 103, 247)") {
        defineCorDeFundo(paragrafo,"rgb(103, 255, 103)");
        defineCorDaFonte(paragrafo, "black");
    } else {
        defineCorDeFundo(paragrafo,"rgb(255, 103, 247)");
        defineCorDaFonte(paragrafo, "white");
    }
}

function defineCorDeFundo(element, cor){
    element.style.backgroundColor = cor;
}

function defineCorDaFonte(element, cor){
    element.style.color = cor;
}