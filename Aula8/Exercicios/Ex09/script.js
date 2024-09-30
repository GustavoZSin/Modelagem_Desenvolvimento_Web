const btnProgredir = document.getElementById("btnProgredir");
const progresso = document.getElementById("progresso");

let porcentagem = 0;

btnProgredir.addEventListener("click", () => {
    if (porcentagem < 100) {
        porcentagem += 10;
        progresso.style.width = porcentagem + "%";
    }

    if (porcentagem >= 100) {
        btnProgredir.disabled = true;
        btnProgredir.textContent = "Concluído";
    }
});