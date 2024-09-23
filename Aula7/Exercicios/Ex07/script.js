let posicao = 0; // Posição inicial
let direcao = 1; // Controla a direção (1 = direita, -1 = esquerda)
const quadrado = document.getElementById("quadrado");
const larguraTela = window.innerWidth;

function moverQuadrado() {
    posicao += direcao * 5; // Move 5px a cada intervalo

    // Verifica se chegou no limite da tela (direita ou esquerda)
    if (posicao >= (larguraTela - 50) || posicao <= 0) {
        direcao *= -1; // Inverte a direção
    }

    quadrado.style.left = posicao + "px"; // Atualiza a posição
}

// Executa a função moverQuadrado a cada 20ms
setInterval(moverQuadrado, 20);
