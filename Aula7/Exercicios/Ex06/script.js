function somar() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 + numero2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

function subtrair() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 - numero2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const resultado = numero1 * numero2;
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}

function dividir() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    if (numero2 !== 0) {
        const resultado = numero1 / numero2;
        document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
    } else {
        document.getElementById('resultado').textContent = "Erro: Divisão por zero não permitida!";
    }
}