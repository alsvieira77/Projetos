const botaoAbrir = document.getElementById('abrir-modal');
const botaoFechar = document.getElementById('fechar-modal');
const modalOverlay = document.getElementById('modal-overlay');

function abrirModal () {
  modalOverlay.classList.add('visivel');
}

function fecharModal () {
  modalOverlay.classList.remove('visivel');
}

botaoAbrir.addEventListener('click', abrirModal);
botaoFechar.addEventListener('click', fecharModal);

// Fechar o modal ao clicar fora dele
modalOverlay.addEventListener('click', (evento) => {
  if (evento.target === modalOverlay) {
    fecharModal();}
});

// Fechar o modal ao pressionar a tecla Escape
document.addEventListener('keydown', (evento) => {
  console.log('Tecla pressionada:', evento.key);
  if (evento.key === 'Escape' && modalOverlay.classList.contains('visivel')) {
    fecharModal();
  }
});
  