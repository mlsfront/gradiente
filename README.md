# Gerador de Gradiente CSS Interativo

Esta aplicação permite criar gradientes CSS personalizados utilizando até três cores selecionadas pelo usuário. O usuário pode ajustar a proporção do gradiente em tempo real através de um controle deslizante, escolher a direção do gradiente e ainda selecionar entre diversos conjuntos de cores predefinidos. O código CSS gerado é exibido e pode ser copiado facilmente.

## Funcionalidades

- **Seleção de Cores**: Selecione até 3 cores personalizadas usando os campos de entrada do tipo `color`.
- **Ajuste do Gradiente**: O controle deslizante permite alterar a proporção de mistura das cores no gradiente.
- **Escolha da Direção**: Escolha a direção do gradiente entre várias opções (ex: `to right`, `45deg`, `90deg`, `top`, `bottom`, etc.).
- **Conjuntos de Cores Predefinidos**: Selecione rapidamente entre conjuntos de cores predefinidos, como **Por do Sol**, **Oceano**, **Floresta**, e **Retro**.
- **Visualização em Tempo Real**: Visualize o gradiente gerado instantaneamente na área de visualização.
- **Cópia do Código CSS**: O código CSS do gradiente gerado é exibido e pode ser copiado com um simples clique em um botão.

## Como Usar

1. **Seleção de Cores**: O usuário pode escolher até 3 cores diferentes para o gradiente utilizando os campos de cor.
2. **Ajuste da Proporção do Gradiente**: O controle deslizante permite ajustar a mistura das cores no gradiente. 
3. **Escolha da Direção do Gradiente**: Selecione a direção do gradiente através do menu suspenso. As opções incluem direções como `to right`, `45deg`, `90deg`, entre outras.
4. **Escolha de Conjunto de Cores Predefinidos**: Clique no menu suspenso para escolher entre os conjuntos de cores predefinidos. As opções incluem: **Por do Sol**, **Oceano**, **Floresta**, **Retro**.
5. **Visualização**: O gradiente gerado será exibido na área de visualização.
6. **Copiar Código CSS**: Clique no botão "Copiar Código CSS" para copiar o código CSS do gradiente gerado para a área de transferência.

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

- `index.html`: Contém a estrutura HTML da página, incluindo os controles de cores, controle deslizante, seleção da direção do gradiente e do conjunto de cores predefinidos.
- `styles.css`: Responsável pelo design e layout da interface, incluindo a visualização do gradiente.
- `script.js`: Contém a lógica de geração do gradiente, a atualização em tempo real e a cópia do código CSS para a área de transferência.

### Como Rodar o Projeto

1. Clone ou baixe o repositório.
2. Abra o arquivo `index.html` em seu navegador para visualizar e interagir com a aplicação.
3. Crie seus gradientes, ajuste a direção e as cores, escolha um conjunto de cores predefinido, e copie o código CSS gerado para usá-lo em seu projeto.

## Exemplo de Código CSS Gerado

Após selecionar as cores, ajustar o controle deslizante, escolher o conjunto de cores predefinido e a direção do gradiente, um exemplo do código CSS gerado pode ser:

```css
background: linear-gradient(to right, #ff5f6d 33%, #ffc3a0 66%, #ffb347 100%);
```

Este código CSS pode ser copiado facilmente para o seu projeto com o clique do botão.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo da página e a apresentação do gradiente.
- **JavaScript**: Para controlar os eventos e atualizar o gradiente em tempo real, além de permitir a cópia do código CSS.

## Contribuição

Se você deseja contribuir para este projeto, envie um pull request ou entre em contato para discutir melhorias.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).