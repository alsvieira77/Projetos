# 🖼️ Projeto 3: Modal / Janela Pop-up Simples

Este projeto foca na criação de um componente de UI (User Interface) muito comum e essencial: a janela modal.

## 💻 Demonstração Ao Vivo

Você pode testar este projeto ao vivo clicando no link abaixo:

[**Ver Modal Online**](https://alsvieira77.github.io/Projetos/Modal-PopUp/modal.html)

## 📝 Descrição

Uma página web que demonstra como implementar uma janela pop-up (modal). Um botão na página principal abre o modal, que se sobrepõe ao conteúdo. O modal pode ser fechado de três maneiras: clicando no botão 'X' dentro dele, clicando na área escura fora dele, ou pressionando a tecla 'Escape' (Esc) no teclado.

## ✨ Funcionalidades

  * Abertura do modal através de um clique de botão.
  * Fundo escurecido (overlay) para focar no modal.
  * Fechamento via botão 'X'.
  * Fechamento via clique no overlay.
  * Fechamento via tecla 'Escape'.
  * Transições suaves de CSS para abrir e fechar.

## 🛠️ Tecnologias Utilizadas

  * **HTML5:** Estrutura do botão de gatilho e dos elementos do modal (overlay e conteúdo).
  * **CSS3:** Estilização do overlay (`position: fixed`, `rgba`), da caixa de conteúdo, e criação de classes de visibilidade (`.visivel`) com transições.
  * **JavaScript (ES6+):** Lógica para adicionar e remover classes CSS, tratamento de eventos de clique e teclado (`keydown`).

## 🧠 Conceitos Chave Aprendidos

  * Manipulação de classes CSS (`classList.add`, `classList.remove`, `classList.contains`).
  * Criação de overlays e posicionamento `fixed`.
  * Técnicas de CSS para mostrar/esconder elementos com transições.
  * Tratamento de eventos de teclado (`keydown`).
  * Uso do objeto `event` (`event.target`, `event.key`).
  * Implementação de múltiplas formas de interação para uma mesma ação.

## ⚙️ Como Executar

1.  Clone o repositório ou baixe os arquivos.
2.  Abra o arquivo `modal.html` em seu navegador.

## 🚀 Possíveis Melhorias Futuras

  * Melhorar a acessibilidade (ARIA roles e atributos).
  * Permitir a abertura de múltiplos modais (gerenciamento de pilha).
  * Carregar conteúdo dinâmico dentro do modal.
  * Adicionar "focus trap" para a navegação por 'Tab'.

<!-- end list -->
