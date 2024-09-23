function atualizarDataHora() {
    const agora = new Date();
    const opcoes = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        timeZone: 'America/Sao_Paulo'
    };
    
    const dataHoraFormatada = agora.toLocaleString('pt-BR', opcoes);
    document.getElementById("dataHora").textContent = dataHoraFormatada;
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);