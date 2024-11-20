// Função para verificar a compatibilidade dos componentes escolhidos
function verifyCompatibility() {
    // Obtém os valores selecionados nos campos de configuração
    const cpu = document.getElementById('cpu').value;
    const gpu = document.getElementById('gpu').value;
    const motherboard = document.getElementById('motherboard').value;
    const ram = document.getElementById('ram').value;
    const storage = document.getElementById('storage').value;
    const cooler = document.getElementById('cooler').value;
    const psu = document.getElementById('psu').value;
    const caseOption = document.getElementById('case').value; // "case" é palavra reservada, renomeei para evitar problemas
    const os = document.getElementById('os').value;

    const compatibilityResult = document.getElementById('compatibility-result');
    
    // Verifica se todos os campos foram preenchidos
    if (!cpu || !gpu || !motherboard || !ram || !storage || !cooler || !psu || !caseOption || !os) {
        compatibilityResult.textContent = "Por favor, preencha todos os campos para verificar a compatibilidade.";
        compatibilityResult.style.color = "red";
        return;
    }

    // Verificação de compatibilidade simplificada (adapte para casos mais complexos)
    let isCompatible = true;

    // Exemplo de regra básica: RAM DDR5 é incompatível com motherboards AMD X670.
    if (ram.startsWith("ddr5") && motherboard === "amd-x670") {
        isCompatible = false;
    }

    // Exemplo: Fonte abaixo de 750W não suporta GPUs de alto desempenho (RTX 4070 e RX 7900).
    if ((gpu === "nvidia-4070" || gpu === "amd-rx7900") && psu !== "psu-850w" && psu !== "psu-1000w") {
        isCompatible = false;
    }

    // Exemplo: Cooler de ar é incompatível com gabinetes mini-tower.
    if (cooler === "air-cooler" && caseOption === "mini-tower") {
        isCompatible = false;
    }

    // Mensagem de compatibilidade
    if (isCompatible) {
        compatibilityResult.textContent = "A sua configuração está compatível!";
        compatibilityResult.style.color = "green";
    } else {
        compatibilityResult.textContent = "A sua configuração está incompatível. Por favor, revise a sua escolha.";
        compatibilityResult.style.color = "red";
    }
}
