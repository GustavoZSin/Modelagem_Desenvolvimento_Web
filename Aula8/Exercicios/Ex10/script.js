const btnAdicionar = document.getElementById("btnAdicionar");
const btnSubtrair = document.getElementById("btnSubtrair");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir");
const resultadoDiv = document.getElementById("resultado");

function calcular(operacao) {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado;

    switch (operacao) {
        case 'adicionar':
            resultado = numero1 + numero2;
            break;
        case 'subtrair':
            resultado = numero1 - numero2;
            break;
        case 'multiplicar':
            resultado = numero1 * numero2;
            break;
        case 'dividir':
            if (numero2 === 0) {
                resultado = 'Erro: Divisão por zero!';
            } else {
                resultado = numero1 / numero2;
            }
            break;
        default:
            resultado = 'Operação inválida';
    }

    resultadoDiv.textContent = `Resultado: ${resultado}`;
}

btnAdicionar.addEventListener("click", () => calcular('adicionar'));
btnSubtrair.addEventListener("click", () => calcular('subtrair'));
btnMultiplicar.addEventListener("click", () => calcular('multiplicar'));
btnDividir.addEventListener("click", () => calcular('dividir'));
