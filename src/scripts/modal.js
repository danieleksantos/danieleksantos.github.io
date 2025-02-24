document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("mapModal");
    const link = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close");

    // Garante que o modal esteja fechado ao iniciar
    modal.style.display = "none";

    link.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "flex"; // Exibe o modal ao clicar no link
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; // Fecha ao clicar no botão
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Fecha ao clicar fora do modal
        }
    });
});
