var contador = 0;

function incrementarContador() {
    contador++;
    console.log(contador);
    document.getElementById("contagem").innerHTML = contador;
}