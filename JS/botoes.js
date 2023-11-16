 // Função para verificar qual input está selecionado e atualizar a cor da label correspondente
 function atualizarCorLabel() {
    // Array de labels e inputs
    const labels = document.querySelectorAll('.secao2 .manual-btn');
    const inputs = document.querySelectorAll('input[name="radio-btn"]');

    // Iterar sobre os inputs para verificar qual está selecionado
    inputs.forEach((input, index) => {
        if (input.checked) {
            // Adicionar classe 'selecionado' à label correspondente
            labels[index].classList.add('selecionado');
        } else {
            // Remover classe 'selecionado' das outras labels
            labels[index].classList.remove('selecionado');
        }
    });
}

// Adicionar eventos de mudança para os inputs
const inputs = document.querySelectorAll('input[name="radio-btn"]');
inputs.forEach((input) => {
    input.addEventListener('change', atualizarCorLabel);
});

// Chamar a função inicialmente para garantir que a cor esteja correta ao carregar a página
atualizarCorLabel();


