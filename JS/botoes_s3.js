 // Função para verificar qual input está selecionado e atualizar a cor da label correspondente
 function atualizarCorLabels3() {
    // Array de labels e inputs
    const labelss3 = document.querySelectorAll('.secao3 .manual-btn_s3');
    const inputss3 = document.querySelectorAll('input[name="radio-btns3"]');

    // Iterar sobre os inputs para verificar qual está selecionado
    inputss3.forEach((input, index) => {
        if (input.checked) {
            // Adicionar classe 'selecionado' à label correspondente
            labelss3[index].classList.add('selecionados3');
        } else {
            // Remover classe 'selecionado' das outras labels
            labelss3[index].classList.remove('selecionados3');
        }
    });
}

// Adicionar eventos de mudança para os inputs
const inputss3 = document.querySelectorAll('input[name="radio-btns3"]');
inputss3.forEach((input) => {
    input.addEventListener('change', atualizarCorLabels3);
});

// Chamar a função inicialmente para garantir que a cor esteja correta ao carregar a página
atualizarCorLabels3();

