const todasAsPerguntas = document.querySelectorAll('.acordeao-pergunta');

todasAsPerguntas.forEach(function(pergunta) {

  pergunta.addEventListener('click', function(evento){

    const perguntaClicada = evento.currentTarget;
    const resposta = perguntaClicada.nextElementSibling;

    perguntaClicada.classList.toggle('ativo');
    resposta.classList.toggle('ativo');


})})