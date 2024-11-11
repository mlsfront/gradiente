# Gerador de Gradiente CSS Interativo

Esta aplicação permite criar gradientes CSS personalizados utilizando três cores selecionadas pelo usuário. O usuário pode ajustar a proporção do gradiente em tempo real através de um controle deslizante. Além disso, o código CSS gerado é exibido e pode ser copiado facilmente.

## Funcionalidades

- Selecione até 3 cores personalizadas usando os campos de entrada do tipo `color`.
- Ajuste a distribuição do gradiente com o controle deslizante.
- Visualize o gradiente gerado em tempo real.
- Copie o código CSS gerado com um simples clique em um botão.

## Como Usar

1. **Seleção de Cores**: O usuário pode escolher até 3 cores diferentes para o gradiente.
2. **Ajuste do Gradiente**: O controle deslizante permite alterar a proporção de mistura das cores no gradiente.
3. **Visualização**: O gradiente gerado será mostrado na área de visualização.
4. **Copiar Código CSS**: Clique no botão "Copiar Código CSS" para copiar o código CSS do gradiente gerado.

## Estrutura do Projeto

A estrutura do projeto permanece como segue:

```
/gerador-gradiente
    /index.html
    /styles.css
    /script.js
    /README.md
```

### Descrição dos Arquivos

- `index.html`: Contém a estrutura HTML da página, incluindo os controles de cores e o controle deslizante.
- `styles.css`: Responsável pelo design e layout da interface.
- `script.js`: Contém a lógica de geração do gradiente, atualização em tempo real e cópia do código CSS.

### Como Rodar o Projeto

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em seu navegador para visualizar e interagir com a aplicação.
3. Crie seus gradientes e copie o código CSS gerado.

## Exemplo de Código CSS Gerado

Após selecionar as cores e ajustar o controle deslizante, um exemplo do código CSS gerado pode ser:

```css
background: linear-gradient(to right, #ff0000 33%, #00ff00 66%, #0000ff 100%);
```

Este código CSS pode ser copiado facilmente para o seu projeto com o clique do botão.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo da página e a apresentação do gradiente.
- **JavaScript**: Para controlar os eventos e atualizar o gradiente em tempo real.
