var jogadaAtual = "X";
let celulas = document.querySelectorAll(".celula");
let jogadorAtualDisplay = document.getElementById("displayJogadorAtual");
let tabuleiro = Array(9).fill(null);
let jogoAtivo = true;
let statusDisplay = document.getElementById("status");

const condicoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

celulas.forEach(celula => {
    celula.addEventListener('click', () => jogar(celula));
});

function jogar(celula) {
    const indice = celula.getAttribute('data-indice');
    if (celula.innerHTML == "" && jogoAtivo) {
        celula.innerHTML = jogadaAtual;
        tabuleiro[indice] = jogadaAtual;

        verificarVencedor();

        jogadaAtual = jogadaAtual === "X" ? "O" : "X";
        jogadorAtualDisplay.innerHTML = jogadaAtual;
    }
}

function verificarVencedor() {
    for (let i = 0; i < condicoesVitoria.length; i++) {
        const [a, b, c] = condicoesVitoria[i];
        if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
            jogoAtivo = false;
            statusDisplay.textContent = `O ${tabuleiro[a]} venceu!`;
            return;
        }
    }

    if (!tabuleiro.includes(null)) {
        jogoAtivo = false;
        statusDisplay.textContent = 'Empate!';
    }
}

function recarregar() {
    window.location.reload();
}
