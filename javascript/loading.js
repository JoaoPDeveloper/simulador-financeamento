const myButton = document.getElementById('my-button');
const spinner = document.querySelector('.spinner');

myButton.addEventListener('click', () => {
  myButton.disabled = true; // desabilita o botão para evitar cliques repetidos
  spinner.style.display = 'inline-block'; // mostra o componente de carregamento
  var i = setInterval(function () { 
    clearInterval(i);
    document.getElementById("carregando").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
  }, 4000);
  spinner.style.display = 'none'; // esconde o componente de carregamento
  myButton.disabled = false; // habilita o botão novamente
});
