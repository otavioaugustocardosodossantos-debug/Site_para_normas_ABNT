/* barra progresso */

window.addEventListener("scroll", () => { 
// adiciona um evento que é executado sempre que o usuário rola a página

let scroll = document.documentElement.scrollTop
// pega o quanto o usuário já rolou a página (posição atual do scroll)

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
// calcula a altura total rolável da página (altura total - altura visível)

let progress = (scroll / height) * 100
// calcula a porcentagem do progresso do scroll

document.querySelector(".progress-bar").style.width = progress + "%"
// altera a largura da barra de progresso de acordo com o scroll

})


/* menu mudar */

window.addEventListener("scroll", () => { 
// adiciona outro evento de scroll

let menu = document.querySelector(".menu")
// seleciona o elemento com classe "menu"

if(window.scrollY > 50){ 
// verifica se o usuário rolou mais de 50px

menu.classList.add("scrolled")
// adiciona a classe "scrolled" ao menu

}else{

menu.classList.remove("scrolled")
// remove a classe se estiver acima de 50px

}

})


/* cards aparecendo */

const cards = document.querySelectorAll(".card")
// seleciona todos os elementos com classe "card"

function reveal(){ 
// função responsável por revelar os cards

const trigger = window.innerHeight * 0.85
// define o ponto de ativação (85% da altura da tela)

cards.forEach(card =>{ 
// percorre cada card

const top = card.getBoundingClientRect().top
// pega a posição do card em relação ao topo da tela

if(top < trigger){ 
// se o card estiver dentro da área visível

card.classList.add("show")
// adiciona a classe "show" (ativa a animação)

}

})

}

window.addEventListener("scroll", reveal)
// chama a função sempre que rolar a página


/* luz mouse */

document.addEventListener("mousemove", e => { 
// executa sempre que o mouse se move

document.body.style.setProperty("--x", e.clientX + "px")
// define uma variável CSS (--x) com a posição horizontal do mouse

document.body.style.setProperty("--y", e.clientY + "px")
// define uma variável CSS (--y) com a posição vertical do mouse

})



window.addEventListener("scroll", function(){
// adiciona mais um evento de scroll

let elementos = document.querySelectorAll(".animar");
// seleciona todos os elementos com classe "animar"

elementos.forEach(el => {
// percorre cada elemento

let pos = el.getBoundingClientRect().top;
// pega a posição do elemento na tela

if(pos < window.innerHeight){
// verifica se o elemento entrou na tela

el.classList.add("mostrar");
// adiciona a classe "mostrar" (ativa animação)

}
});
});


// animação seções//
const sections = document.querySelectorAll(".section");
// seleciona todas as seções com classe "section"

window.addEventListener("scroll", () => {
// evento de scroll

sections.forEach(sec => {
// percorre cada seção

const top = sec.getBoundingClientRect().top;
// pega a posição da seção na tela

if(top < window.innerHeight){
// verifica se a seção está visível

sec.classList.add("show");
// adiciona a classe "show" (ativa animação)

}
});
});