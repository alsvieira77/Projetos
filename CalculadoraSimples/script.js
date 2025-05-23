/* Função para inserir os valores na tela */
function insert(num){
  var numero = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

/* Função para limpar a tela */
function limpar(){
  document.getElementById('resultado').innerHTML = "";
}

/* Função para apagar a última entrada */
function apagar(){
  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
  var resultado = document.getElementById('resultado').innerHTML;
  if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
  } else {
    document.getElementById('resultado').innerHTML = "0";
  }
}