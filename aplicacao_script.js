/* aplicacao.script.js */

/* Mostrar texto da aplicação */
function mostrarTexto(){
// cria uma função chamada mostrarTexto

    const resultado = document.getElementById("resultado");
    // seleciona o elemento com id "resultado"

    if(resultado){ 
    // verifica se o elemento existe (evita erro no código)

        resultado.innerHTML =
        "A aplicação da ABNT NBR 17225 garante organização, clareza e padronização das informações.";
        // insere esse texto dentro do elemento HTML

    }
}


/* Mostrar ou esconder comparação (usando classe CSS) */
function toggleComparacao(){
// cria uma função para mostrar ou esconder a seção

    const comparacao = document.getElementById("comparacao");
    // seleciona o elemento com id "comparacao"

    const botao = document.querySelector("button");
    // seleciona o primeiro botão da página

    if(!comparacao || !botao) return; 
    // se algum dos elementos não existir, para a execução (evita erro)

    if(comparacao.classList.contains("ativo")){
    // verifica se o elemento tem a classe "ativo"

        comparacao.classList.remove("ativo");
        // remove a classe (esconde ou muda estilo via CSS)

        botao.innerText = "Mostrar exemplo";
        // altera o texto do botão

    }else{

        comparacao.classList.add("ativo");
        // adiciona a classe "ativo" (mostra ou anima o elemento)

        botao.innerText = "Esconder exemplo";
        // altera o texto do botão

    }
}


/* Efeito de luz seguindo o mouse */
document.addEventListener("mousemove", function(e){
// adiciona um evento que executa sempre que o mouse se move

    const luz = document.querySelector(".luz");
    // seleciona o elemento com classe "luz"

    if(!luz) return; 
    // se o elemento não existir, para (evita erro)

    luz.style.left = e.clientX + "px";
    // move o elemento na horizontal conforme a posição do mouse

    luz.style.top = e.clientY + "px";
    // move o elemento na vertical conforme a posição do mouse

});


/* Seleciona elementos para animação (caso use depois) */
const elementos = document.querySelectorAll(".animar");
// seleciona todos os elementos com a classe "animar"
// (no momento não está sendo usado, mas pode servir para animações futuras)