// script.js
// Interações simples: abrir modal / rolar para sessão

document.addEventListener('DOMContentLoaded', function(){
  var start = document.getElementById('cta-start');
  var demo = document.getElementById('cta-demo');

  start && start.addEventListener('click', function(){
    // Aqui você pode abrir um modal ou redirecionar para /signup
    alert('Botão "Começar" clicado — implemente signup ou fluxo desejado.');
  });

  demo && demo.addEventListener('click', function(){
    document.getElementById('features').scrollIntoView({behavior:'smooth'});
  });
});