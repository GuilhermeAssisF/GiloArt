 // Função para verificar qual input está selecionado e atualizar a cor da label correspondente
 function atualizarCorLabels5() {
    // Array de labels e inputs
    const labelss5 = document.querySelectorAll('.secao5 .manual-btn_s5');
    const inputss5 = document.querySelectorAll('input[name="radio-btns5"]');

    // Iterar sobre os inputs para verificar qual está selecionado
    inputss5.forEach((input, index) => {
        if (input.checked) {
            // Adicionar classe 'selecionado' à label correspondente
            labelss5[index].classList.add('selecionados5');
        } else {
            // Remover classe 'selecionado' das outras labels
            labelss5[index].classList.remove('selecionados5');
        }
    });
}

// Adicionar eventos de mudança para os inputs
const inputss5 = document.querySelectorAll('input[name="radio-btns5"]');
inputss5.forEach((input) => {
    input.addEventListener('change', atualizarCorLabels5);
});

// Chamar a função inicialmente para garantir que a cor esteja correta ao carregar a página
atualizarCorLabels5();

