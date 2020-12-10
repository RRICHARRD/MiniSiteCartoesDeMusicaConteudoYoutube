const modalOverlay = document.querySelector(".modal-overlay"); //PEGA ESSA CLASSE DO DOCUMENTO E APLICA NESSA VARIÁVEL
const cards = document.querySelectorAll(".card"); //PEGA TODAS AS CLASSES DE NOME card, É O NOME DADO PARA A CLASSE DA CADA CARTÃO, ENTÃO PEGA TODOS OS CARTÕES

for (let card of cards)
{
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id") //PEGA O ID DO CARD E COLOCA ALI EM BAIXO
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`;

    });
};

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = "" //TIRANDO O VÍDEO, INCLUSIVE O SOM DE FUNDO, POR ISSO O SRC FICA VAZIO AQUI
});

