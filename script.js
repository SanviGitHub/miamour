const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

// Función para mover y reducir el tamaño del botón
function moveAndShrink(button) {
    let size = parseFloat(getComputedStyle(button).fontSize);

    if (size > 8) { // Evitar que desaparezca completamente
        // Reduce el tamaño de la fuente
        button.style.fontSize = (size - 1) + "px";
        // Cambia la posición a un lugar aleatorio dentro del contenedor
        button.style.position = "relative";
        button.style.left = `${Math.random() * 100 - 50}px`;
        button.style.top = `${Math.random() * 100 - 50}px`;
    }
}

// Evento de "mouseover" para mover el botón antes de que se haga clic
yesButton.addEventListener("mouseover", () => moveAndShrink(yesButton));
noButton.addEventListener("mouseover", () => moveAndShrink(noButton));
