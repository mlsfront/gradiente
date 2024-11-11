# Gerador de Gradiente CSS

Este é um simples gerador de gradientes CSS interativo. A aplicação permite que o usuário crie gradientes personalizados, escolhendo até 3 cores e ajustando as proporções do gradiente com um controle deslizante (slider). O código CSS do gradiente gerado pode ser copiado diretamente com o clique de um botão.

## Funcionalidades

- Selecione até 3 cores usando os campos de entrada do tipo `color`.
- Ajuste a proporção do gradiente com o controle deslizante (slider).
- Visualize o gradiente gerado em tempo real.
- Copie o código CSS gerado com um simples clique no botão.

## Como Usar

1. **Seleção de Cores**: Escolha as três cores desejadas para o seu gradiente.
2. **Ajuste do Gradiente**: Use o controle deslizante para ajustar a proporção de mistura entre as cores no gradiente.
3. **Visualização**: O gradiente gerado será exibido em tempo real na área de visualização.
4. **Copiar Código CSS**: Clique no botão "Copiar Código CSS" para copiar o código gerado para a área de transferência. O código pode ser usado diretamente em seu CSS.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
/gerador-gradiente
    /index.html
    /styles.css
    /script.js
    /README.md
```

### Descrição dos Arquivos

- `index.html`: O arquivo principal da aplicação com a estrutura HTML.
- `styles.css`: O arquivo de estilo responsável pela aparência da página.
- `script.js`: O arquivo JavaScript que controla a lógica da aplicação, incluindo a atualização do gradiente e a funcionalidade de cópia do código CSS.

### Como Rodar o Projeto

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em seu navegador preferido.
3. Acesse a interface e comece a criar seu gradiente!

## Exemplo de Código CSS Gerado

Aqui está um exemplo do código CSS que pode ser gerado pela aplicação:

```css
background: linear-gradient(to right, #ff0000 50%, #00ff00 50%, #0000ff 100%);
```

## Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo e layout da página.
- **JavaScript**: Para manipular os eventos e a lógica do gradiente.

