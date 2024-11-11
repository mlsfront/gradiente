// Selecionando os elementos
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const color3Input = document.getElementById('color3');
const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');
const gradientBox = document.getElementById('gradient-box');

// Função para atualizar o gradiente
function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const color3 = color3Input.value;
    const percentage = slider.value;

    // Atualizando a visualização do gradiente com base nas cores e no valor do slider
    const gradient = `linear-gradient(to right, ${color1} ${percentage}%, ${color2} ${percentage}%, ${color3})`;

    gradientBox.style.background = gradient;
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

// Inicializa a visualização
updateGradient();
