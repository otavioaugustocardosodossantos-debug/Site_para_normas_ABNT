// Seleciona todos os cards
const cards = document.querySelectorAll('.item');
// pega todos os elementos que possuem a classe "item" e guarda na variável "cards"


// Função que verifica se o elemento apareceu na tela
function mostrarCards() {
    const alturaTela = window.innerHeight;
    // pega a altura visível da tela do navegador

    cards.forEach(card => {
        // percorre cada card da lista

        const topoCard = card.getBoundingClientRect().top;
        // pega a posição do topo do card em relação à tela

        if (topoCard < alturaTela - 100) {
        // verifica se o card já entrou na tela (com 100px de margem antes)

            card.classList.add('mostrar');
            // adiciona a classe "mostrar" para ativar animação no CSS

        }
    });
}


// Evento de scroll
window.addEventListener('scroll', mostrarCards);
// toda vez que o usuário rolar a página, executa a função mostrarCards


// Executa quando carrega
mostrarCards();
// executa a função uma vez ao carregar a página (caso já tenha elementos visíveis)


window.addEventListener("load", function() {
    // evento que acontece quando a página termina de carregar completamente

    document.body.classList.add("carregado");
    // adiciona a classe "carregado" no body (pode ser usada para animações iniciais)
});


const elementos = document.querySelectorAll(".animar");
// seleciona todos os elementos com a classe "animar"
// (por enquanto essa variável não está sendo usada no código)