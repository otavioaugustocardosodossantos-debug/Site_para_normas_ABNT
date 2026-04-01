const sections = document.querySelectorAll("section");
// seleciona todos os elementos <section> do HTML e guarda na variável "sections"

window.addEventListener("scroll", function(){
// adiciona um evento que executa toda vez que o usuário rola a página

sections.forEach(function(sec){
// percorre cada seção encontrada

const posicao = sec.getBoundingClientRect().top;
// pega a posição da seção em relação ao topo da tela

if(posicao < window.innerHeight - 100){
// verifica se a seção entrou na tela (com uma margem de 100px antes)

sec.classList.add("mostrar");
// adiciona a classe "mostrar" para ativar animação via CSS

}

});

});



//Animação ao rolar a página card//
const cards = document.querySelectorAll(".card");
// seleciona todos os elementos com classe "card"

window.addEventListener("scroll", function(){
// adiciona outro evento de scroll

cards.forEach(function(card){
// percorre cada card

const posicao = card.getBoundingClientRect().top;
// pega a posição do card em relação ao topo da tela

if(posicao < window.innerHeight - 100){
// verifica se o card já apareceu na tela

card.style.opacity = "1";
// torna o card visível (antes provavelmente estava com opacity: 0)

card.style.transform = "translateY(0)";
// move o card para a posição normal (remove deslocamento vertical)

}

});

});

const elementos = document.querySelectorAll(".animar");
// seleciona todos os elementos com classe "animar" (mas aqui não está sendo usado ainda)