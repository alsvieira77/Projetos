# ❓ Projeto 4: Menu Acordeão / FAQ Simples

O último projeto do Nível 1, focado em lidar com múltiplos elementos interativos e seus estados individuais.

## 💻 Demonstração Ao Vivo

Você pode testar este projeto ao vivo clicando no link abaixo:

[** Ver demonstração do Menu Acordeão Online**](https://alsvieira77.github.io/Projetos/MenuAcordeao/faq.html)

## 📝 Descrição

Implementação de um componente "acordeão", ideal para seções de Perguntas Frequentes (FAQ). Apresenta uma lista de perguntas; ao clicar em uma, a resposta correspondente é revelada com uma animação suave. Clicar novamente a esconde.

## ✨ Funcionalidades

  * Exibição de uma lista de perguntas e respostas.
  * Expansão/Contração de respostas ao clicar na pergunta.
  * Animação suave de abertura e fechamento.
  * Indicador visual (+/X) que muda conforme o estado (aberto/fechado).

## 🛠️ Tecnologias Utilizadas

  * **HTML5:** Estrutura de lista usando `div`s, com `button` para as perguntas e `div` para as respostas.
  * **CSS3:** Estilização dos itens, perguntas e respostas. Uso de `max-height` e `transition` para a animação. Estilização condicional baseada em classes (`.ativo`).
  * **JavaScript (ES6+):** Seleção de múltiplos elementos (`querySelectorAll`), iteração (`forEach`), adição de eventos, navegação no DOM (`nextElementSibling`) e alternância de classes (`classList.toggle`).

## 🧠 Conceitos Chave Aprendidos

  * `querySelectorAll` para selecionar coleções de elementos.
  * `forEach` para aplicar lógica a cada elemento de uma coleção.
  * Adição de eventos a múltiplos elementos dentro de um loop.
  * Navegação relativa no DOM (`nextElementSibling`).
  * `classList.toggle` como forma eficiente de alternar estados.
  * Técnica CSS de `max-height` para criar animações de altura.
  * Gerenciamento do estado de múltiplos componentes.

## ⚙️ Como Executar

1.  Clone o repositório ou baixe os arquivos.
2.  Abra o arquivo `faq.html` em seu navegador.

## 🚀 Possíveis Melhorias Futuras

  * Implementar a funcionalidade "apenas um aberto por vez".
  * Adicionar uma barra de busca para filtrar as perguntas.
  * Usar ícones SVG ou de fontes em vez de texto para '+/-'.
  * Marcar a pergunta/resposta aberta na URL para links diretos.
