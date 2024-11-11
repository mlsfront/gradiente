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

// Função para atualizar o gradiente
function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const color3 = color3Input.value;
    const percentage = slider.value;
    const direction = directionSelect.value;  // Pega o valor da direção selecionada

    // Atualizando a visualização do gradiente com base nas cores, valor do slider e direção
    const gradient = `linear-gradient(${direction}, ${color1} ${percentage}%, ${color2} ${percentage}%, ${color3})`;

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
