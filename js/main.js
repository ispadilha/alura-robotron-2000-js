const control = document.querySelectorAll("[data-control]");

control.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        alterData(evento.target.dataset.control, evento.target.parentNode)
    })
})

function alterData(operation, control) {
    const part = control.querySelector("[data-display]");

    if (operation === "-") {
        part.value = parseInt(part.value) - 1;
    }
    else {
        part.value = parseInt(part.value) + 1;
    }
}