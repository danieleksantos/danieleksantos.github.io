document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("mapModal");
    const link = document.getElementById("openModal");
    const closeBtn = document.querySelector(".close");

    
    modal.style.display = "none";

    link.addEventListener("click", (event) => {
        event.preventDefault();
        modal.style.display = "flex"; 
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none"; 
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
