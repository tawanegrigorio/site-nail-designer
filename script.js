const portifolio = document.getElementById("portifolio");
const valores = document.getElementById("valores");
const sobre = document.getElementById("sobre");
const contato = document.getElementById("contato");

portifolio.addEventListener("click", () => {
    window.location.href = "portifolio.html";
});

valores.addEventListener("click", () => {
    window.location.href = "valores.html";
});

sobre.addEventListener("click", () => {
    window.location.href = "sobre.html";
});

contato.addEventListener("click", () => {
    window.open("https://wa.me/5588982178746", "_blank");
});
