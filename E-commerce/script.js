/*Array de produtos*/
const produtos = [
  { id: 1, nome: "Produto A", preco: 10.0, image: "/images/mulher1.png" },
  { id: 2, nome: "Produto B", preco: 20.0, image: "/images/homem.png" },
  { id: 3, nome: "Produto C", preco: 30.0, image: "/images/mulher2.png" },
];

/* Função para criar um button */
function criarBotao(text) {
  const botao = document.createElement("button");
  botao.className = 'btn';
  botao.textContent = text;
  return botao;
}

/* Função para criar um card */
function criarCard(produto) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${produto.image}" alt="${produto.nome}" class="card-img">
    <h2 class="card-title">${produto.nome}</h2>
    <p>Preco: R$ ${produto.preco}</p>
  `;
  const botao = criarBotao("Comprar");
  card.appendChild(botao);
  const botaoSaibaMais = criarBotao("Saiba mais");
  card.appendChild(botaoSaibaMais);
  return card;
}

/* Função para criar o grid */
const grid = document.getElementById("produtos-grid");
produtos.forEach((produto) => {
  const card = criarCard(produto);
  grid.appendChild(card);
});
