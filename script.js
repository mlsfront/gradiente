// Selecionando os elementos
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const color3Input = document.getElementById('color3');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const gradientBox = document.getElementById('gradient-box');
const cssCode = document.getElementById('css-code');
const copyButton = document.getElementById('copy-button');
const directionSelect = document.getElementById('direction');
<<<<<<< HEAD
=======
const presetSelect = document.getElementById('preset-colors');  // Seleção de conjunto de cores predefinidos

// Função para aplicar o conjunto de cores predefinido
function applyPreset(preset) {
    switch (preset) {
        case 'sunset':
            color1Input.value = '#ff5f6d';
            color2Input.value = '#ffc3a0';
            color3Input.value = '#ffb347';
            break;
        case 'ocean':
            color1Input.value = '#2bc0e4';
            color2Input.value = '#eaecc6';
            color3Input.value = '#67d8ff';
            break;
        case 'forest':
            color1Input.value = '#5c4033';
            color2Input.value = '#8d6e63';
            color3Input.value = '#b29e8b';
            break;
        case 'retro':
            color1Input.value = '#ff416c';
            color2Input.value = '#ff4b2b';
            color3Input.value = '#ff914d';
            break;
        default:
            break;
    }

    // Atualizar o gradiente sempre que um preset for aplicado
    updateGradient();
}
>>>>>>> v3.0

// Função para atualizar o gradiente
function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const color3 = color3Input.value;
    const percentage = slider.value;
<<<<<<< HEAD
    const direction = directionSelect.value;  // Pega o valor da direção selecionada

    // Atualizando a visualização do gradiente com base nas cores, valor do slider e direção
    const gradient = `linear-gradient(${direction}, ${color1} ${percentage}%, ${color2} ${percentage}%, ${color3})`;
=======
    const direction = directionSelect.value;

    // Calculando os pontos de transição para as três cores
    const color1Stop = percentage + '%';
    const color2Stop = (100 - percentage * 2) + '%';
    const color3Stop = '100%';

    // Atualizando a visualização do gradiente com base nas cores, valor do slider e direção
    const gradient = `linear-gradient(${direction}, ${color1} ${color1Stop}, ${color2} ${color2Stop}, ${color3} ${color3Stop})`;
>>>>>>> v3.0

    // Definindo o fundo do box com o gradiente gerado
    gradientBox.style.background = gradient;

    // Atualizando o código CSS exibido
    cssCode.textContent = `background: ${gradient};`;
}

// Atualizando o valor do slider em tempo real
slider.addEventListener('input', (e) => {
    sliderValue.textContent = `${e.target.value}%`;
    updateGradient();
});

// Atualizando o gradiente quando o usuário muda as cores
color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);
color3Input.addEventListener('input', updateGradient);

// Atualizando o gradiente quando o usuário escolhe a direção
directionSelect.addEventListener('change', updateGradient);

<<<<<<< HEAD
=======
// Atualizando o gradiente quando o usuário escolhe um conjunto de cores predefinido
presetSelect.addEventListener('change', (e) => {
    const selectedPreset = e.target.value;
    if (selectedPreset !== 'none') {
        applyPreset(selectedPreset);
    }
});

>>>>>>> v3.0
// Função para copiar o código CSS para a área de transferência
function copyCSSCode() {
    const textarea = document.createElement('textarea');
    textarea.value = cssCode.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Código CSS copiado para a área de transferência!');
}

// Adicionando o evento de click para o botão de copiar
copyButton.addEventListener('click', copyCSSCode);

// Inicializa a visualização
updateGradient();
