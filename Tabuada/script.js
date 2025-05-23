// Função para gerar a tabuada
function gerar(){
  var num = document.getElementById('tab')
  var tab = document.getElementById('seltab')
  if(num.value.length == 0){
    alert('Por favor, digite um número!')
    // Se o campo estiver vazio, exibe um alerta
  } else {
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    // Limpa o conteúdo anterior da tabela
    while (c <= 10) {
      let item = document.createElement('option')
      // Cria um novo elemento option
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
      c++
    }
  }
}