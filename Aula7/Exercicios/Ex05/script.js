const cores = ["red", "blue", "green", "yellow"];
let controle = 0;

document.addEventListener("DOMContentLoaded", () => {
    const quadrado = document.getElementById('quadrado');
    const trocaCor = document.getElementById('trocaCor');

    if (trocaCor) {
        trocaCor.addEventListener('click', () => {
            quadrado.style.background = cores[controle];
            controle++;

            if (controle >= cores.length) {
                controle = 0;
            }
        });
    }
});