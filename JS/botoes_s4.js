 // Função para verificar qual input está selecionado e atualizar a cor da label correspondente
 function atualizarCorLabels4() {
    // Array de labels e inputs
    const labelss4 = document.querySelectorAll('.secao4 .manual-btn_s4');
    const inputss4 = document.querySelectorAll('input[name="radio-btns4"]');

    // Iterar sobre os inputs para verificar qual está selecionado
    inputss4.forEach((input, index) => {
        if (input.checked) {
            // Adicionar classe 'selecionado' à label correspondente
            labelss4[index].classList.add('selecionados4');
        } else {
            // Remover classe 'selecionado' das outras labels
            labelss4[index].classList.remove('selecionados4');
        }
    });
}

// Adicionar eventos de mudança para os inputs
const inputss4 = document.querySelectorAll('input[name="radio-btns4"]');
inputss4.forEach((input) => {
    input.addEventListener('change', atualizarCorLabels4);
});

// Chamar a função inicialmente para garantir que a cor esteja correta ao carregar a página
atualizarCorLabels4();

