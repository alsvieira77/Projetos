let cont = 0;

const aumentar = document.getElementById("aumentar");
const diminuir = document.getElementById("diminuir");
const contador = document.getElementById("contador");
const zerar = document.getElementById("zerar");

function atualizarContador() {
  contador.textContent = cont;

    if (cont > 0) {
        contador.style.color = '#28a745'; // Verde
    } else if (cont < 0) {
        contador.style.color = '#dc3545'; // Vermelho
    } else {
        contador.style.color = '#495057'; // Cinza (cor inicial)
    }

}

function somar() {
  cont++;
  atualizarContador();
}

function subtrair() {
  cont--;
  atualizarContador();
}

function zerarContador() {
  cont = 0;
  atualizarContador();
}

aumentar.addEventListener("click", somar);
diminuir.addEventListener("click", subtrair); 
zerar.addEventListener("click", zerarContador);

atualizarContador();