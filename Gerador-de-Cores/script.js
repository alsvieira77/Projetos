//Gerador de Cores

// Selecionando os elementos do DOM
const botaoMudarCor = document.getElementById("gerarCor");
const codigoCor = document.getElementById("codigoCor");
const corpoDaPagina = document.querySelector("body");

// Função para gerar uma cor hexadecimal aleatória
function gerarCorAleatoria () {
  const caracteres = '0123456789ABCDEF';
  let cor = '#';
  for (i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * 16);
    cor += caracteres[indiceAleatorio];
  }
  return cor;
}

// Função para mudar a cor de fundo da página e exibir o código da cor
function mudarCordeFundo (){
  const novaCor = gerarCorAleatoria();
  corpoDaPagina.style.backgroundColor = novaCor;
  codigoCor.textContent = novaCor;
}

// Adicionando um evento de clique ao botão para mudar a cor de fundo
botaoMudarCor.addEventListener("click", mudarCordeFundo);
mudarCordeFundo();